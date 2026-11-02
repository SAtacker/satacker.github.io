---
sidebar_position: 1
slug: /intro
title: Overview & Engineering Notes
description: Technical documentation and engineering notes on modern C++, parallel runtimes, linear algebra, and compilers.
---

# Engineering Notes & Knowledge Base

Technical documentation and engineering notes covering high-performance computing, compiler tooling, parallel runtime architectures, and numerical linear algebra.

---

## Notebooks

<div className="row" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
  <div className="col col--4" style={{ marginBottom: '1rem' }}>
    <div className="card" style={{ height: '100%', border: '1px solid var(--ifm-color-emphasis-300)' }}>
      <div className="card__header">
        <h3>Modern C++ & Runtimes</h3>
      </div>
      <div className="card__body">
        <p>
          Asynchronous task systems, P2300 Senders & Receivers, coroutines (<code>co_await</code>), and parallel runtime architectures in HPX.
        </p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/c++/GSoC-HPX">
          View C++ Notes →
        </a>
      </div>
    </div>
  </div>

  <div className="col col--4" style={{ marginBottom: '1rem' }}>
    <div className="card" style={{ height: '100%', border: '1px solid var(--ifm-color-emphasis-300)' }}>
      <div className="card__header">
        <h3>Linear Algebra</h3>
      </div>
      <div className="card__body">
        <p>
          Vector spaces, matrix decompositions (LU, Cholesky, QR, SVD), condition numbers, BLAS hierarchy, and GPU acceleration.
        </p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/linear-algebra/introduction">
          View Linear Algebra →
        </a>
      </div>
    </div>
  </div>

  <div className="col col--4" style={{ marginBottom: '1rem' }}>
    <div className="card" style={{ height: '100%', border: '1px solid var(--ifm-color-emphasis-300)' }}>
      <div className="card__header">
        <h3>Tooling & Compilers</h3>
      </div>
      <div className="card__body">
        <p>
          Lexical analysis with Flex/Bison, terminal UI component design with FTXUI (<code>quick-ftxui</code>), and developer workflows.
        </p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/docs/quick-ftxui/flex">
          View Tooling Notes →
        </a>
      </div>
    </div>
  </div>
</div>

---

## Related References

- **[GSoC Progress Log](/gsoc-log)**: Week-by-week engineering log of the Google Summer of Code project with HPX and the STE||AR Group.
- **[Personal Blog](/blog)**: Technical articles on systems software, developer ergonomics, and HPC.
- **[AMD ROCm Blogs](https://rocm.blogs.amd.com/authors/shreyas-atre.html)**: Technical blog posts on GPU computing and AI frameworks.
- **[Talks & Publications](/resume#publications--papers)**: Conference recordings and papers from CppNow, CppCon, and WAMTA.
