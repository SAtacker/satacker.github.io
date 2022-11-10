import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "PID Tuning GUI",
    link: "https://github.com/VedantParanjape/pid-tuning-gui",
    Svg: require("../../static/img/pid_tuning_gui.svg").default,
    description: (
      <>
        <hr></hr>
        PID tuning GUI was designed from the ground up to be easily installed
        and used to get Wall-E bot tuned up and running quickly.
      </>
    ),
  },
  {
    title: "Beagle-Config",
    link: "https://github.com/SAtacker/bb-config",
    Svg: require("../../static/img/beagle_c.svg").default,
    description: (
      <>
        Beagle-Config lets you focus on your development, and it&apos;ll do the
        chores. Go ahead and configure your beagle device.
      </>
    ),
  },
  {
    title: "Imitecio",
    link: "https://github.com/SAtacker/IMITECIO",
    Svg: require("../../static/img/imitecio.svg").default,
    description: (
      <>
        Under SRA's Summer Mentorship
        <hr></hr>
        Pose Estimation has been for a while in the deep learning industry.
        Considering the various applications of it, we aimed at creating a
        simple game at first.
      </>
    ),
  },
];

function Feature({ Svg, link, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <h2>Projects</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="text--center">
          <h3>
            View <a href="https://www.github.com/SAtacker">github</a>
          </h3>
        </div>
      </div>
    </section>
  );
}
