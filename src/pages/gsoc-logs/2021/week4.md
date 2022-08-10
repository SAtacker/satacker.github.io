## Sunday, 27th June

- Implemented `pipe` for communicating with `connmanctl`

### Talking to the shell

```cpp title="shell_helper"
void connman_h::shell_helper(const char* cmd) {
  result = "";
  std::array<char, 128> buffer;
  /* ----------------------------------------------------------------------
  // This is not thread safe
  std::unique_ptr<FILE, decltype(&pclose)> pipe(popen(cmd, "r"), pclose);
  if (!pipe) {
    throw std::runtime_error("popen() failed!");
  }
  while (fgets(buffer.data(), buffer.size(), pipe.get()) != nullptr) {
    result += buffer.data();
  }
   ---------------------------------------------------------------------- */
  pid_t pid = 0;
  int pipefd[2];
  FILE* output;

  pipe(pipefd);  // create a pipe
  pid = fork();  // span a child process
  if (pid == 0) {
    // Child. Let's redirect its standard output to our pipe and replace process
    // with tail
    close(pipefd[0]);
    dup2(pipefd[1], STDOUT_FILENO);
    dup2(pipefd[1], STDERR_FILENO);
    setvbuf(stdout, NULL, _IOLBF, 1000);
    execl("/bin/sh", "sh", "-c", cmd, (char*)NULL);
  }

  // Only parent gets here. Listen to what the tail says
  close(pipefd[1]);
  output = fdopen(pipefd[0], "r");

  while (fgets(buffer.data(), buffer.size(), output) != nullptr) {
    result += buffer.data();
  }
  fclose(output);
}
```

### Checking wifi status through IOCTL

```cpp title="Code to check wlan0 interface enabled or disabled"
bool connman_h::wifi_status() {
  int skfd = socket(AF_INET, SOCK_DGRAM, 0);

  if (skfd < 0) {
    std::cerr << "cannot open socket" << std::endl;
    return 0;
  }

  const char* ifname = "wlan0";
  struct ifreq req;

  strncpy(req.ifr_ifrn.ifrn_name, ifname, IFNAMSIZ);

  int err = ioctl(skfd, SIOCGIFFLAGS, &req);
  if (err) {
    perror("SIOCGIFFLAGS");
    return err;
  } else {
    int flags = req.ifr_ifru.ifru_flags;
    return (flags & IFF_UP) ? true : false;
  }
  return 0;
}
```

### Result Parsing

```cpp title="Parsing the result"
void connman_h::get_service_names() {
  if (!wifi_status()) {
    /* Enable wifi */
    shell_helper("connmanctl enable wifi");
    std::this_thread::sleep_for(std::chrono::seconds(1));
  }

  /* Scan wifi */
  shell_helper("connmanctl scan wifi");

  /* Get mac address formatted into continuous string */
  shell_helper(
      "cat /sys/class/net/wlan0/address | sed  -r "
      "'s/^([^:]{2}):([^:]{2}):([^:]{2}):([^:]{2}):([^:]{2}):([^:]{2})$/"
      "\\1\\2\\3\\4\\5\\6/'");

  /* Get macaddress from trailing spaces */
  auto mac_address = result.substr(0, result.length() - 2);

  /* Get connman services */
  shell_helper("connmanctl services | sed -e 's/[ \t]*//'");

  /* Temporary string to store wifi_macaddress*/
  auto temp_start = "wifi_" + mac_address;

  while (true) {
    /* If length is 0 break */
    if (result.length() == 0) {
      break;
    }

    /* Position of newline character */
    size_t newline_pos = 1;
    if (result.find("\n") != std::string::npos) {
      newline_pos = result.find("\n");

      /* Get current line from trimmed sub sequence */
      auto current_line = reduce(result.substr(0, newline_pos));

      /* Position of wifi_<macaddress> */
      auto pos = current_line.find(temp_start);

      /* Default check for std::string::npos */
      if (pos != std::string::npos) {
        /* pos==0 means that it is hidden and has no name*/
        if (pos != 0) {
          auto name = reduce(current_line.substr(0, pos));
          auto act_pos = name.find("*A");
          if (act_pos != std::string::npos) {
            name.erase(act_pos, act_pos + name.find_first_of(" ") + 1);
            active_name = name;
          }
          auto unique_name = current_line.substr(pos);
          service_names[name] = unique_name;
        } else {
          service_names["hidden - " + current_line.substr(0, 10)] =
              current_line;
        }
      } else {
        std::cerr << "Not finding unique_name" << std::endl;
      }
    }
    result.erase(0, newline_pos + 1);
  }
}
```

## Tuesday, 29nd June

### Connmanctl using `pipes` and writing to .configs

- I could not get to use dbus but I got the wifi connection working anyway using pipes and .config file writing in /var/lib/connman/wifiname.config
- I have a working example of dbus and connman in staging from https://github.com/eurogiciel-oss/connman-json-client
- This would be done last to keep myself from falling behind schedule.
- Link for current demo (its a hardcoded test for a workaround against using dbus and just using pipes)

[![asciicast](https://asciinema.org/a/422909.svg)](https://asciinema.org/a/422909)

## Wednesday, 30th June

### Reference Example with pipes

- Currently the fullscreen mode does not do well with the output
- Scrolling of text doesn't work well here
- [Link](https://github.com/SAtacker/FTXUI/commit/a2a9ca3b7b57b6d9b3e4509b241558cd7bb590ec)
  [![asciicast](https://asciinema.org/a/423106.svg)](https://asciinema.org/a/423106)

- I have a similar problem
  [![asciicast](https://asciinema.org/a/423111.svg)](https://asciinema.org/a/423111)

```cpp title="The code that's causing this"
Element Render() override {
Elements e;
for (auto n : connman_interface->get_wifi_names()) {
    e.push_back(text(to_wstring(n)));
    e.push_back(separator());
}
return vbox(e) | flex;
}
```
