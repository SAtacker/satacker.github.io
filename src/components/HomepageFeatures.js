import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = {
  "2019-2021": [
    {
      title: "PID Tuning GUI",
      link: "https://github.com/VedantParanjape/pid-tuning-gui",
      Svg: require("../../static/img/pid_tuning_gui.svg").default,
      description: "PID tuning GUI to get the Wall-E bot tuned up and running quickly.",
    },
    {
      title: "Beagle-Config",
      link: "https://github.com/SAtacker/bb-config",
      Svg: require("../../static/img/beagle_c.svg").default,
      description: "Beagle-Config lets you easily configure your beagle device over USB.",
    },
    {
      title: "Imitecio",
      link: "https://github.com/SAtacker/IMITECIO",
      Svg: require("../../static/img/imitecio.svg").default,
      description: "Pose estimation based game controls powered by computer vision.",
    },
  ],
};

const PublicationsList = [
  {
    authors: "Atre, S., Taylor, C., Diehl, P., Kaiser, H.",
    year: "2026",
    title: "Closing a Source Complexity Gap Between Chapel and HPX",
    venue: "In: Diehl, P., Cao, Q., Herault, T., Bosilca, G. (eds) Asynchronous Many-Task Systems and Applications. WAMTA 2025. Lecture Notes in Computer Science, vol 15690. Springer, Cham.",
    doi: "https://doi.org/10.1007/978-3-031-97196-9_3",
  },
];

const NewsItems = [
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

function Feature({ Svg, link, title, description }) {
  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <div className={styles.projectCard}>
        <div className="text--center margin-bottom--md">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center">
          <h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p>{description}</p>
        </div>
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
        <h2>Publications</h2>
      </div>
      <ul className={styles.publicationsList}>
        {PublicationsList.map((pub, idx) => (
          <li key={idx} className={styles.publicationItem}>
            <div>
              {pub.authors} ({pub.year}). <strong>{pub.title}</strong>. {pub.venue}{' '}
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
          <div className="text--center margin-bottom--md">
            <h2>Featured Projects</h2>
            <p>
              Check out my repositories on{" "}
              <a href="https://github.com/SAtacker" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
          <div className="row">
            {FeatureList["2019-2021"].map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
