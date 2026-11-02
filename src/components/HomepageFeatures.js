import React, { useState } from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const CurrentWork = [
  {
    title: "AMD ROCm Technical Articles",
    link: "https://rocm.blogs.amd.com/authors/shreyas-atre.html",
    tags: ["ROCm", "GPU Computing", "AMD", "HPC", "Full-Time"],
    description:
      "Technical blogs and articles on GPU optimization, ROCm ecosystem, and modern GPU computing with AMD.",
    details: {
      role: "Software Engineer at AMD (AI Frameworks Group)",
      highlights: [
        "Authored in-depth technical blogs and tutorials on the AMD ROCm ecosystem and modern GPU performance tuning.",
        "Focus on LLM quantization, layerwise loss minimization algorithms (GPTAQ), and deterministic profiling for AMD Quark.",
        "Work with PyTorch, ROCm HIP, and performance analysis tools on AMD Instinct accelerators.",
      ],
      links: [
        { label: "Author Profile on AMD ROCm Blogs", url: "https://rocm.blogs.amd.com/authors/shreyas-atre.html" },
      ],
    },
  },
];

const GraduateProjects = [
  {
    title: "ChplX (CppCon Talk)",
    link: "https://youtu.be/aOKqyt00xd8",
    tags: ["CppCon", "Chapel", "C++", "HPX", "HPC", "Compiler"],
    description:
      "A bridge and backend enabling interoperability between the productive Chapel parallel programming language and C++/HPX asynchronous task-based runtime (watch CppCon presentation).",
    details: {
      role: "Master's Thesis Research & CppCon Presentation",
      highlights: [
        "Developed ChplX, a source-to-source compiler/transformer translating Chapel parallel constructs into modern C++ with HPX runtime backend.",
        "Enhanced runtime performance of Chapel domains by 25% using compile-time evaluation and metaprogramming.",
        "Presented the design and evaluation at CppCon and published in WAMTA 2025 / Springer LNCS.",
      ],
      links: [
        { label: "Watch CppCon Presentation (YouTube)", url: "https://youtu.be/aOKqyt00xd8" },
        { label: "GitHub: SAtacker/chplx", url: "https://github.com/SAtacker/chplx" },
        { label: "Master's Thesis (LSU Theses 6227)", url: "https://repository.lsu.edu/gradschool_theses/6227" },
      ],
    },
  },
  {
    title: "Reproducible Floating Accumulator (CppNow Talk)",
    link: "https://youtu.be/wUiBh646hEI",
    tags: ["CppNow", "CUDA", "C++", "NVIDIA", "CCCL"],
    description:
      "Integrated RFA into CUB/CCCL for reproducible GPU device-wide reduction summation kernels (watch CppNow presentation).",
    details: {
      role: "System Software Intern — NVIDIA (CCCL Team)",
      highlights: [
        "Integrated a Reproducible Floating Accumulator (RFA) into CUB API supporting GPU/device-wide reduction summation kernels.",
        "Profiled using NSight Compute benchmarks, identifying bloated kernel sizes causing i-cache misses, and optimized performance.",
        "Delivered a technical presentation at CppNow detailing floating point reproducibility on CUDA architectures.",
      ],
      links: [
        { label: "Watch CppNow Presentation (YouTube)", url: "https://youtu.be/wUiBh646hEI" },
        { label: "NVIDIA CCCL Pull Request #2234", url: "https://github.com/NVIDIA/cccl/pull/2234" },
      ],
    },
  },
  {
    title: "HPX Contributions",
    link: "https://github.com/TheHPXProject/hpx/commits?author=SAtacker",
    tags: ["C++20", "Distributed", "Concurrency", "Futures"],
    description:
      "Contributions to the C++ Standard Library for Parallelism and Concurrency, focusing on asynchronous execution policies, futures, and modern C++ abstractions.",
    details: {
      role: "Core Contributor & Graduate Researcher (STE||AR Group)",
      highlights: [
        "Implemented C++ coroutine (co_await) integration with Senders/Receivers in HPX compliant with ISO C++ P2300 standard.",
        "Reported and resolved upstream bugs in NVIDIA's reference P2300 library (stdexec) for promise type detection.",
        "Maintained and enhanced core asynchronous components, build infrastructure, and performance benchmarks.",
      ],
      links: [
        { label: "View HPX Commits by SAtacker", url: "https://github.com/TheHPXProject/hpx/commits?author=SAtacker" },
        { label: "HPX Repository", url: "https://github.com/TheHPXProject/hpx" },
        { label: "STE||AR Group", url: "https://stellar-group.org/" },
      ],
    },
  },
];

const UndergradProjects = [
  {
    title: "Template Decl Lookup Optimization",
    link: "https://reviews.llvm.org/D144831",
    tags: ["LLVM", "Clang", "Modern C++", "Compilers"],
    description:
      "Optimized template specialization lookup for Clang modules by adding a lookup table in preambles, reducing complexity from O(n²) to O(n).",
    details: {
      role: "LLVM / Clang Contributor",
      highlights: [
        "Optimized template specialization declaration lookup algorithms within Clang modules.",
        "Engineered a preamble lookup table for specialized C++ templates, cutting time complexity from O(n²) down to O(n).",
        "Significantly reduced compiler memory consumption during large-scale translation unit compilation.",
      ],
      links: [
        { label: "LLVM Phabricator Review D144831", url: "https://reviews.llvm.org/D144831" },
      ],
    },
  },
  {
    title: "WasmEdge",
    link: "https://github.com/WasmEdge/WasmEdge/issues?q=author%3ASAtacker",
    tags: ["WebAssembly", "C++", "Runtime", "Systems"],
    description:
      "Contributions to WasmEdge Runtime: C/C++ Python SDK extension with near-native speeds, unit-tests, benchmarks, and multi-mode support.",
    details: {
      role: "Software Engineering Intern at SecondState Inc.",
      highlights: [
        "Built C/C++ native extensions for the WasmEdge Python SDK delivering near-native execution performance.",
        "Engineered multi-mode runtime support and comprehensive automated test suites.",
        "Authored 650+ lines of robust bash installer and parser scripts for secure system integration.",
      ],
      links: [
        { label: "View Author Issues & Contributions in WasmEdge", url: "https://github.com/WasmEdge/WasmEdge/issues?q=author%3ASAtacker" },
        { label: "WasmEdge Repository", url: "https://github.com/WasmEdge/WasmEdge" },
      ],
    },
  },
  {
    title: "PID Tuning GUI",
    link: "https://github.com/VedantParanjape/pid-tuning-gui",
    Svg: require("../../static/img/pid_tuning_gui.svg").default,
    tags: ["Python", "GUI", "Robotics"],
    description: "PID tuning GUI to get the Wall-E bot tuned up and running quickly.",
    details: {
      role: "Robotics Developer",
      highlights: [
        "Cross-platform graphical tool to tune PID controller parameters for autonomous Wall-E robotics bots.",
        "Interactive real-time plotting, serial communication, and preset profile saving.",
      ],
      links: [
        { label: "GitHub: VedantParanjape/pid-tuning-gui", url: "https://github.com/VedantParanjape/pid-tuning-gui" },
      ],
    },
  },
  {
    title: "Beagle-Config",
    link: "https://github.com/SAtacker/bb-config",
    Svg: require("../../static/img/beagle_c.svg").default,
    tags: ["C++", "Embedded Linux", "USB"],
    description: "Beagle-Config lets you easily configure your beagle device over USB.",
    details: {
      role: "Google Summer of Code 2021 Contributor (BeagleBoard.org)",
      highlights: [
        "Designed and implemented a modern C++ terminal dashboard using FTXUI for low-level Linux and BeagleBone configuration.",
        "Interfaced with kernel userspace IOCTL calls and raw sockets to automate network rules and eliminate manual CLI steps.",
        "Set up ARM cross-compilation toolchains with Clang and CMake.",
      ],
      links: [
        { label: "GitHub: SAtacker/bb-config", url: "https://github.com/SAtacker/bb-config" },
        { label: "GSoC Proposal on eLinux", url: "https://elinux.org/BeagleBoard/GSoC/2021_Proposal/beagle_config" },
      ],
    },
  },
  {
    title: "DRV8305 Driver",
    link: "https://github.com/VedantParanjape/esp-idf-drv8305",
    tags: ["C", "ESP32", "FreeRTOS", "SPI"],
    description:
      "Driver for Espressif's ESP32 to establish communication over SPI with R/W to configuration registers on top of FreeRTOS.",
    details: {
      role: "Embedded Systems Developer",
      highlights: [
        "Authored device driver for Texas Instruments DRV8305 three-phase gate driver.",
        "Integrated high-speed SPI read/write routines into Espressif ESP-IDF and FreeRTOS tasks.",
      ],
      links: [
        { label: "GitHub: VedantParanjape/esp-idf-drv8305", url: "https://github.com/VedantParanjape/esp-idf-drv8305" },
      ],
    },
  },
  {
    title: "Imitecio",
    link: "https://github.com/SAtacker/IMITECIO",
    Svg: require("../../static/img/imitecio.svg").default,
    tags: ["Python", "Computer Vision", "Gaming"],
    description: "Pose estimation based game controls powered by computer vision.",
    details: {
      role: "Computer Vision & AI Developer",
      highlights: [
        "Developed body-pose estimation mapping using TensorFlow Lite PoseNet and OpenCV.",
        "Mapped user gestures directly into responsive game control inputs in real-time.",
      ],
      links: [
        { label: "GitHub: SAtacker/IMITECIO", url: "https://github.com/SAtacker/IMITECIO" },
      ],
    },
  },
];

const PublicationsList = [
  {
    authors: "Atre, S., Taylor, C., Diehl, P., Kaiser, H.",
    year: "2026",
    title: "Closing a Source Complexity Gap Between Chapel and HPX",
    venue: "In: Diehl, P., Cao, Q., Herault, T., Bosilca, G. (eds) Asynchronous Many-Task Systems and Applications. WAMTA 2025. Lecture Notes in Computer Science, vol 15690. Springer, Cham.",
    doi: "https://doi.org/10.1007/978-3-031-97196-9_3",
  },
  {
    authors: "Atre, Shreyas Swanand",
    year: "2025",
    title: "ChplX: The HPX Solution for Bridging Chapel and C++",
    venue: "LSU Master's Theses. 6227.",
    doi: "https://repository.lsu.edu/gradschool_theses/6227",
  },
];

const NewsItems = [
  {
    year: "2026",
    text: (
      <>
        (March) Joined <strong>AMD</strong> full-time as a Software Engineer. Published technical blogs on{" "}
        <a href="https://rocm.blogs.amd.com/authors/shreyas-atre.html" target="_blank" rel="noopener noreferrer">
          AMD ROCm Blogs
        </a>
        .
      </>
    ),
  },
  {
    year: "2025",
    text: (
      <>
        (December) Graduated with a <strong>Master of Science in Computer Science (MSCS)</strong> from Louisiana State University (LSU) with a <strong>3.95 / 4.00 GPA</strong>. Defended Master's Thesis on ChplX.
      </>
    ),
  },
  {
    year: "2025",
    text: (
      <>
        (Sept – Dec) Software Engineering Co-op / Intern at <strong>AMD</strong>.
      </>
    ),
  },
  {
    year: "2024",
    text: (
      <>
        (May – Aug) System Software Intern at <strong>NVIDIA</strong> (CUDA Core C++ Libraries). Watch CppNow talk on{" "}
        <a href="https://youtu.be/wUiBh646hEI" target="_blank" rel="noopener noreferrer">
          Reproducible Floating Accumulators in CUB/CCCL ↗
        </a>
        . Also gave a CppCon talk on{" "}
        <a href="https://youtu.be/aOKqyt00xd8" target="_blank" rel="noopener noreferrer">
          ChplX ↗
        </a>
        .
      </>
    ),
  },
  { year: "2023", text: "Enrolled in Fall 2023 Masters in Computer Science at Louisiana State University (LSU)" },
  { year: "2023", text: "Completed Electronics and Telecommunication Engineering degree from VJTI, Mumbai" },
  { year: "2022", text: "(October) Intern at STE||AR Group" },
  { year: "2022", text: "(June) Intern at National Supercomputing Mission nodal center, IIT Kharagpur" },
  { year: "2022", text: "(Summer) Google Summer of Code contributor at STE||AR Group (HPX)" },
  { year: "2021", text: "(November) Intern at IIT Madras" },
  { year: "2021", text: "(September) Intern at WasmEdge" },
  { year: "2021", text: "(Summer) Google Summer of Code contributor at BeagleBoard.org" },
  { year: "2020", text: "Completed in top 10 in e-Yantra Robotics competition" },
  { year: "2019", text: "Enrolled in Electronics and Telecommunication Engineering at VJTI, Mumbai" },
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          &times;
        </button>

        <h3 style={{ marginBottom: "0.25rem", color: "var(--ifm-color-primary)" }}>{project.title}</h3>
        {project.details?.role && (
          <p style={{ fontStyle: "italic", color: "var(--ifm-color-emphasis-700)", marginBottom: "1rem" }}>
            {project.details.role}
          </p>
        )}

        <p style={{ lineHeight: 1.6 }}>{project.description}</p>

        {project.details?.highlights && (
          <div className={styles.detailSection}>
            <h4>Key Highlights</h4>
            <ul className={styles.detailHighlights}>
              {project.details.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {project.tags && (
          <div style={{ margin: "1rem 0" }}>
            {project.tags.map((tag, i) => (
              <span key={i} className={styles.tagBadge} style={{ marginRight: "0.4rem" }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.details?.links && (
          <div className={styles.detailSection}>
            <h4>Links & Resources</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {project.details.links.map((linkItem, i) => (
                <a
                  key={i}
                  className="button button--secondary button--sm"
                  href={linkItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textAlign: "left", width: "fit-content" }}
                >
                  {linkItem.label} ↗
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ Svg, link, title, description, tags, details, onSelect }) {
  const handleCardClick = (e) => {
    // If the click is not on the primary external link anchor, open the modal details
    if (e.target.tagName !== "A") {
      onSelect({ Svg, link, title, description, tags, details });
    }
  };

  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <div className={styles.projectCard} onClick={handleCardClick} title="Click card to view details">
        {Svg && (
          <div className="text--center margin-bottom--md">
            <Svg className={styles.featureSvg} alt={title} />
          </div>
        )}
        <div className="text--center">
          <h3 style={{ marginBottom: "0.5rem" }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "0.5rem" }}>{description}</p>
        </div>
        {tags && (
          <div className={styles.tagsContainer}>
            {tags.map((tag, i) => (
              <span key={i} className={styles.tagBadge}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className={styles.clickHint}>Click card for details & highlights ↗</div>
      </div>
    </div>
  );
}

function NewsSection() {
  return (
    <div className={styles.sectionBlock}>
      <div className="text--center">
        <h2>News & Milestones</h2>
      </div>
      <ul className={styles.timelineList}>
        {NewsItems.map((item, idx) => (
          <li key={idx} className={styles.timelineItem}>
            <span className={styles.timelineYear}>{item.year}</span>
            <p className={styles.timelineText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PublicationsSection() {
  return (
    <div className={styles.sectionBlock}>
      <div className="text--center">
        <h2>Publications & Theses</h2>
      </div>
      <ul className={styles.publicationsList}>
        {PublicationsList.map((pub, idx) => (
          <li key={idx} className={styles.publicationItem}>
            <div>
              {pub.authors} ({pub.year}). <strong>{pub.title}</strong>. {pub.venue}{" "}
              {pub.doi && (
                <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                  {pub.doi}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomepageFeatures() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={styles.features}>
      <div className="container">
        <NewsSection />
        <hr className="margin-vert--lg" />
        <PublicationsSection />
        <hr className="margin-vert--lg" />
        <div className={styles.sectionBlock}>
          <div className="text--center margin-bottom--lg">
            <h2>Projects</h2>
            <p>
              Explore more repositories on{" "}
              <a href="https://github.com/SAtacker" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>

          <h3 className="margin-bottom--md" style={{ color: "var(--ifm-color-primary)" }}>
            Current Full-Time Work
          </h3>
          <div className="row margin-bottom--lg">
            {CurrentWork.map((props, idx) => (
              <ProjectCard key={idx} {...props} onSelect={setSelectedProject} />
            ))}
          </div>

          <h3 className="margin-bottom--md" style={{ color: "var(--ifm-color-primary-darker)" }}>
            Graduate & Research Work
          </h3>
          <div className="row margin-bottom--lg">
            {GraduateProjects.map((props, idx) => (
              <ProjectCard key={idx} {...props} onSelect={setSelectedProject} />
            ))}
          </div>

          <h3 className="margin-bottom--md" style={{ color: "var(--ifm-color-emphasis-700)" }}>
            Undergraduate Work (2019 – 2023)
          </h3>
          <div className="row">
            {UndergradProjects.map((props, idx) => (
              <ProjectCard key={idx} {...props} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
