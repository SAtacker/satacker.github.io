import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Typed from "react-typed";
import Particles from "react-particles-js";
import particles_config from "../particlesjs-config.json";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Typed
          strings={[
            "Open Source Contributor",
            "Love for Math",
            "Interested in Research (in broad areas)",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Particles
        className="particles"
        params={particles_config}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Layout title={`${siteConfig.title}`} description="My website">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </div>
  );
}
