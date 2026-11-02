import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Software Engineer at AMD</p>
        <p>
          Member of{' '}
          <a
            href="https://stellar-group.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}
          >
            STE||AR Group
          </a>
        </p>
        <p>
          Read my blogs on{' '}
          <a
            href="https://rocm.blogs.amd.com/authors/shreyas-atre.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}
          >
            AMD ROCm Blogs
          </a>
        </p>
        <p>Interested in Compilers, GPU Computing, and High Performance Computing</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Shreyas Atre - Software Engineer at AMD, MSCS from LSU (3.95/4.00 GPA), STE||AR Group member specializing in Compilers, ROCm, and High Performance Computing.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
