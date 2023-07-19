import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { FixedSizeList as List } from 'react-window';

const FeatureList = {
  "2019-2021": [
    {
      title: "PID Tuning GUI",
      link: "https://github.com/VedantParanjape/pid-tuning-gui",
      Svg: require("../../static/img/pid_tuning_gui.svg").default,
      description: (
        <>
          <hr></hr>
          PID tuning GUI to get the Wall-E bot tuned up and running quickly.
        </>
      ),
    },
    {
      title: "Beagle-Config",
      link: "https://github.com/SAtacker/bb-config",
      Svg: require("../../static/img/beagle_c.svg").default,
      description: (
        <>
          <hr></hr>
          Beagle-Config lets you to configure your beagle device.
        </>
      ),
    },
    {
      title: "Imitecio",
      link: "https://github.com/SAtacker/IMITECIO",
      Svg: require("../../static/img/imitecio.svg").default,
      description: (
        <>
          <hr></hr>
          Pose Estimation based game controls
        </>
      ),
    },
  ]
};



const NewsList = [
  "2023 : Enrolled in Fall 2023 Masters in Computer Science at Louisiana State University",
  "2023 : Completed Electronics and Telecommunication Engg. course from VJTI, Mumbai",
  "2022 : (October) Intern at STE||AR Group",
  "2022 : (June) Intern at National Supercomputing Mission nodal center IIT Kharagpur",
  "2022 : (Summer) Google Summer of Code contributor at STE||AR Group",
  "2021 : (November) Intern at IIT Madras",
  "2021 : (September) Intern at WasmEdge",
  "2021 : (Summer) Google Summer of Code contributor at BeagleBoard.org",
  "2020 : Completed in top 10 in Eyantra Robotics competition",
  "2019 : Enrolled in Electronics and Telecommunication Engg. course VJTI, Mumbai",
];

const Publications = [
  "None as of " + new Date().toDateString() + ", maybe in the near future",
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

const NewsRow = ({ index, style }) => (
  <div style={style}>
    <p align="left">
      <p>
        {NewsList[index]}
      </p>
    </p>
  </div>
);

const PublicationsRow = ({ index, style }) => (
  <div style={style}>
    <p align="left">
      <p>
        {Publications[index]}
      </p>
    </p>
  </div>
);

const NewsComponent = () => (
  <div>
    <div className="text--center">
      <h2>News</h2>
      Last updated: {new Date().toDateString()}
    </div>
    <hr></hr>
    <div className="text--center">
      <List
        height={Object.keys(NewsList).length * 20}
        itemCount={Object.keys(NewsList).length}
        itemSize={35}
      >
        {NewsRow}
      </List>
    </div>
  </div>
);

const PublicationsComponent = () => (
  <div>
    <div className="text--center">
      <h2>Publications</h2>
    </div>
    <hr></hr>
    <div className="text--center">
      <List
        height={Object.keys(Publications).length * 20}
        itemCount={Object.keys(Publications).length}
        itemSize={35}
      >
        {PublicationsRow}
      </List>
    </div>
  </div>
);


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {NewsComponent()}
        <hr></hr>
        {PublicationsComponent()}
        <hr></hr>
        <div className="text--center">
          <h2>Projects</h2>
        </div>
        <div className="text--center">
          View <a href="https://www.github.com/SAtacker">github</a>
        </div>
        <hr></hr>
        <div className="text--center">
          2019-2021
        </div>
        <div className="row">
          {FeatureList["2019-2021"].map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
