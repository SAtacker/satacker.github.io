---
sidebar_position: 1
slug: /intro
title: Overview & Engineering Notes
description: Shreyas Atre's personal technical documentation, deep dives into modern C++, HPC runtimes, compilers, and numerics.
---

# 📚 Engineering Notes & Knowledge Base

Welcome to my personal technical documentation hub. This space serves as a living repository for deep dives, architectural designs, algorithms, and practical notes across high-performance computing, compiler tooling, and modern C++.

:::tip Quick Navigation
Use the sidebar on the left to browse topics hierarchically, or jump directly into one of the core notebooks below.
:::

---

## 🗂️ Knowledge Topics

<div className="row" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
  <div className="col col--4" style={{ marginBottom: '1rem' }}>
    <div className="card" style={{ height: '100%', border: '1px solid var(--ifm-color-emphasis-300)' }}>
      <div className="card__header">
        <h3>⚡ Modern C++ & Runtimes</h3>
      </div>
      <div className="card__body">
        <p>
          Deep dives into modern C++ (C++20/23/26), asynchronous task systems, P2300 Senders & Receivers, coroutines (<code>co_await</code>), and parallel runtime architectures in HPX.
        </p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/c++/GSoC-HPX">
          Explore C++ Notes →
        </a>
      </div>
    </div>
  </div>

  <div className="col col--4" style={{ marginBottom: '1rem' }}>
    <div className="card" style={{ height: '100%', border: '1px solid var(--ifm-color-emphasis-300)' }}>
      <div className="card__header">
        <h3>📐 Linear Algebra</h3>
      </div>
      <div className="card__body">
        <p>
          Foundations of linear algebra, matrix decompositions, vector spaces, and numerical methods powering graphics, simulations, and machine learning kernels.
        </p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/linear-algebra/introduction">
          Explore Linear Algebra →
        </a>
      </div>
    </div>
  </div>

  <div className="col col--4" style={{ marginBottom: '1rem' }}>
    <div className="card" style={{ height: '100%', border: '1px solid var(--ifm-color-emphasis-300)' }}>
      <div className="card__header">
        <h3>🛠️ Tooling & Compilers</h3>
      </div>
      <div className="card__body">
        <p>
          Lexical analysis with Flex/Bison, terminal UI component design with FTXUI (<code>quick-ftxui</code>), and developer workflow tooling.
        </p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/quick-ftxui/flex">
          Explore Tooling Notes →
        </a>
      </div>
    </div>
  </div>
</div>

---

## 🔗 Related Resources

Beyond these technical notes, you can find other writings, talk recordings, and project logs across the site:

- **[GSoC Progress Log](/gsoc-log)**: Complete week-by-week engineering log of the Google Summer of Code project with HPX and the STE||AR Group.
- **[Personal Blog](/blog)**: Articles, updates, and tutorials on software systems, developer ergonomics, and HPC.
- **[AMD ROCm Blogs](https://rocm.blogs.amd.com/authors/shreyas-atre.html)**: Official publications on GPU computing, performance tuning, and deep learning frameworks.
- **[Conference Talks & Publications](/resume#publications--papers)**: Slides, videos, and academic papers including CppNow, CppCon, and WAMTA 2025.

---

:::info Open Source & Contributions
Notice an erratum or have feedback? Contributions are welcome via pull request or issue on [GitHub](https://github.com/SAtacker/satacker.github.io).
:::
