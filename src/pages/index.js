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
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <div className={styles.avatarContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/61797109?v=4"
            alt={siteConfig.title}
            className={styles.avatar}
          />
        </div>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        
        <p className={styles.heroBio}>
          Software Engineer at <strong>AMD</strong> working on AI Frameworks & GPU Computing. Member of the{' '}
          <a
            href="https://stellar-group.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ifm-color-primary-lighter)', textDecoration: 'underline', fontWeight: 600 }}
          >
            STE||AR Group
          </a>
          . Passionate about Compilers, Heterogeneous Systems, and High-Performance Parallel Runtimes.
        </p>

        <div className={styles.heroBadges}>
          <span className={styles.heroBadge}>⚡ AI Frameworks @ AMD</span>
          <span className={styles.heroBadge}>🎓 MSCS from LSU (3.95 GPA)</span>
          <span className={styles.heroBadge}>⚙️ Compilers & HPC</span>
          <span className={styles.heroBadge}>🚀 C++ / ROCm / CUDA</span>
        </div>

        <div className={styles.heroActions}>
          <a
            className={styles.actionBtnPrimary}
            href="https://rocm.blogs.amd.com/authors/shreyas-atre.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AMD ROCm Blogs ↗
          </a>
          <Link className={styles.actionBtnSecondary} to="/resume">
            View Resume 📄
          </Link>
          <a
            className={styles.actionBtnSecondary}
            href="https://github.com/SAtacker"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile ↗
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Shreyas Atre - Software Engineer at AMD, MSCS from LSU (3.95/4.00 GPA), STE||AR Group member specializing in Compilers, ROCm, and High Performance Computing."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
