import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const CurrentWork = [
  {
    title: "AMD ROCm Technical Articles",
    link: "https://rocm.blogs.amd.com/authors/shreyas-atre.html",
    tags: ["ROCm", "GPU Computing", "AMD", "HPC", "Full-Time"],
    description:
      "Technical blogs and articles on GPU optimization, ROCm ecosystem, and modern GPU computing with AMD.",
  },
];

const GraduateProjects = [
  {
    title: "ChplX",
    link: "https://github.com/SAtacker/chplx",
    tags: ["Chapel", "C++", "HPX", "HPC", "Compiler"],
    description:
      "A bridge and backend enabling interoperability between the productive Chapel parallel programming language and C++/HPX asynchronous task-based runtime.",
  },
  {
    title: "Reproducible Floating Accumulator (RFA) in CCCL",
    link: "https://youtu.be/wUiBh646hEI",
    tags: ["CUDA", "C++", "NVIDIA", "CCCL", "Talk / Demo"],
    description:
      "Integrated RFA into CUB/CCCL for reproducible GPU device-wide reduction summation kernels (watch video presentation).",
  },
  {
    title: "HPX Contributions",
    link: "https://github.com/STEllAR-GROUP/hpx",
    tags: ["C++20", "Distributed", "Concurrency", "Futures"],
    description:
      "Contributions to the C++ Standard Library for Parallelism and Concurrency, focusing on asynchronous execution policies, futures, and modern C++ abstractions.",
  },
];

const UndergradProjects = [
  {
    title: "Template Decl Lookup Optimization",
    link: "https://reviews.llvm.org/D144831",
    tags: ["LLVM", "Clang", "Modern C++", "Compilers"],
    description:
      "Optimized template specialization lookup for Clang modules by adding a lookup table in preambles, reducing complexity from O(n²) to O(n).",
  },
  {
    title: "WasmEdge",
    link: "https://github.com/WasmEdge/WasmEdge/issues?q=author%3ASAtacker",
    tags: ["WebAssembly", "C++", "Runtime", "Systems"],
    description:
      "Contributions to WasmEdge Runtime: C/C++ Python SDK extension with near-native speeds, unit-tests, benchmarks, and multi-mode support.",
  },
  {
    title: "PID Tuning GUI",
    link: "https://github.com/VedantParanjape/pid-tuning-gui",
    Svg: require("../../static/img/pid_tuning_gui.svg").default,
    tags: ["Python", "GUI", "Robotics"],
    description: "PID tuning GUI to get the Wall-E bot tuned up and running quickly.",
  },
  {
    title: "Beagle-Config",
    link: "https://github.com/SAtacker/bb-config",
    Svg: require("../../static/img/beagle_c.svg").default,
    tags: ["C++", "Embedded Linux", "USB"],
    description: "Beagle-Config lets you easily configure your beagle device over USB.",
  },
  {
    title: "DRV8305 Driver",
    link: "https://github.com/VedantParanjape/esp-idf-drv8305",
    tags: ["C", "ESP32", "FreeRTOS", "SPI"],
    description:
      "Driver for Espressif's ESP32 to establish communication over SPI with R/W to configuration registers on top of FreeRTOS.",
  },
  {
    title: "Imitecio",
    link: "https://github.com/SAtacker/IMITECIO",
    Svg: require("../../static/img/imitecio.svg").default,
    tags: ["Python", "Computer Vision", "Gaming"],
    description: "Pose estimation based game controls powered by computer vision.",
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
        (May – Aug) System Software Intern at <strong>NVIDIA</strong> (CUDA Core C++ Libraries). Watch presentation on{" "}
        <a href="https://youtu.be/wUiBh646hEI" target="_blank" rel="noopener noreferrer">
          Reproducible Floating Accumulators in CUB/CCCL ↗
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

function ProjectCard({ Svg, link, title, description, tags }) {
  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <div className={styles.projectCard}>
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
          <p style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>{description}</p>
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
              <ProjectCard key={idx} {...props} />
            ))}
          </div>

          <h3 className="margin-bottom--md" style={{ color: "var(--ifm-color-primary-darker)" }}>
            Graduate & Research Work
          </h3>
          <div className="row margin-bottom--lg">
            {GraduateProjects.map((props, idx) => (
              <ProjectCard key={idx} {...props} />
            ))}
          </div>

          <h3 className="margin-bottom--md" style={{ color: "var(--ifm-color-emphasis-700)" }}>
            Undergraduate Work (2019 – 2023)
          </h3>
          <div className="row">
            {UndergradProjects.map((props, idx) => (
              <ProjectCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
