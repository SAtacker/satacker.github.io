---
sidebar_position: 1
title: "Foundations of Linear Algebra"
description: "Core concepts of linear algebra for high-performance computing, numerical computing, and AI systems."
---

# 📐 Foundations of Linear Algebra

Linear algebra is the foundational mathematical language of modern computing—powering computer graphics, scientific simulations, high-performance computing (HPC), and modern deep learning frameworks.

This guide reviews fundamental vector and matrix operations with a focus on computational efficiency, numerical stability, and hardware mapping.

---

## 1. Vectors and Vector Spaces

A **vector** $\mathbf{x} \in \mathbb{R}^n$ is an ordered tuple of $n$ real numbers:

$$
\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}
$$

### Core Vector Operations
- **Vector Addition**: $\mathbf{z} = \mathbf{x} + \mathbf{y} \implies z_i = x_i + y_i$
- **Scalar Multiplication**: $\mathbf{z} = \alpha \mathbf{x} \implies z_i = \alpha x_i$
- **Dot Product (Inner Product)**:
  $$
  \langle \mathbf{x}, \mathbf{y} \rangle = \mathbf{x}^T \mathbf{y} = \sum_{i=1}^n x_i y_i = \|\mathbf{x}\|_2 \|\mathbf{y}\|_2 \cos(\theta)
  $$
  Two non-zero vectors are **orthogonal** if and only if $\mathbf{x}^T \mathbf{y} = 0$.

### Vector Norms ($L_p$)
Norms measure the length or magnitude of a vector:
- **$L_1$ Norm (Manhattan / Taxicab)**:
  $$\|\mathbf{x}\|_1 = \sum_{i=1}^n |x_i|$$
- **$L_2$ Norm (Euclidean)**:
  $$\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^n x_i^2} = \sqrt{\mathbf{x}^T \mathbf{x}}$$
- **$L_\infty$ Norm (Max / Chebyshev)**:
  $$\|\mathbf{x}\|_\infty = \max_{1 \le i \le n} |x_i|$$

---

## 2. Matrices and Linear Transformations

An $m \times n$ matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ has $m$ rows and $n$ columns:

$$
\mathbf{A} = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

A matrix represents a **linear mapping** from $\mathbb{R}^n \to \mathbb{R}^m$:
$$
T(\mathbf{x}) = \mathbf{A}\mathbf{x}
$$

### Fundamental Subspaces
For any matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:
1. **Column Space (Range)**: $\mathcal{R}(\mathbf{A}) = \{\mathbf{A}\mathbf{x} \mid \mathbf{x} \in \mathbb{R}^n\} \subseteq \mathbb{R}^m$
2. **Null Space (Kernel)**: $\mathcal{N}(\mathbf{A}) = \{\mathbf{x} \in \mathbb{R}^n \mid \mathbf{A}\mathbf{x} = \mathbf{0}\} \subseteq \mathbb{R}^n$
3. **Row Space**: $\mathcal{R}(\mathbf{A}^T) \subseteq \mathbb{R}^n$
4. **Left Null Space**: $\mathcal{N}(\mathbf{A}^T) \subseteq \mathbb{R}^m$

**Rank-Nullity Theorem**:
$$\text{rank}(\mathbf{A}) + \text{nullity}(\mathbf{A}) = n$$

---

## 3. Special Matrix Classes

| Matrix Type | Mathematical Property | Key Characteristics |
| :--- | :--- | :--- |
| **Square** | $m = n$ | Has determinants and eigenvalues. |
| **Symmetric** | $\mathbf{A} = \mathbf{A}^T$ | Real eigenvalues, orthogonal eigenvectors. |
| **Orthogonal** | $\mathbf{Q}^T \mathbf{Q} = \mathbf{I} \implies \mathbf{Q}^{-1} = \mathbf{Q}^T$ | Preserves Euclidean length and angles ($\|\mathbf{Q}\mathbf{x}\|_2 = \|\mathbf{x}\|_2$). |
| **Positive Definite (SPD)** | $\mathbf{x}^T \mathbf{A} \mathbf{x} > 0 \quad \forall \mathbf{x} \neq \mathbf{0}$ | All eigenvalues $> 0$; enables Cholesky factorization. |
| **Diagonal** | $a_{ij} = 0 \text{ for } i \neq j$ | Trivial inversion and matrix-vector products. |
| **Triangular (Upper/Lower)** | $a_{ij} = 0 \text{ for } i > j$ (Upper) | Solvable in $O(n^2)$ via forward/back substitution. |

---

## 4. Matrix Norms & Condition Numbers

### Matrix Norms
- **Frobenius Norm**:
  $$\|\mathbf{A}\|_F = \sqrt{\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2} = \sqrt{\text{tr}(\mathbf{A}^T \mathbf{A})}$$
- **Induced Spectral Norm ($L_2$)**:
  $$\|\mathbf{A}\|_2 = \sigma_{\max}(\mathbf{A}) = \sqrt{\lambda_{\max}(\mathbf{A}^T \mathbf{A})}$$

### Numerical Conditioning
The **condition number** $\kappa(\mathbf{A})$ measures how sensitive the solution of $\mathbf{A}\mathbf{x} = \mathbf{b}$ is to perturbations in the input:
$$\kappa(\mathbf{A}) = \|\mathbf{A}\| \cdot \|\mathbf{A}^{-1}\| = \frac{\sigma_{\max}(\mathbf{A})}{\sigma_{\min}(\mathbf{A})}$$

- **Well-conditioned**: $\kappa(\mathbf{A}) \approx 1$ (error is not amplified).
- **Ill-conditioned**: $\kappa(\mathbf{A}) \gg 1$ (small numerical inaccuracies or rounding errors produce wildly inaccurate solutions).
- **Singular**: $\kappa(\mathbf{A}) = \infty$ (non-invertible).

---

## 5. Computational Complexity & The BLAS Hierarchy

In high-performance computing and GPU software (e.g., cuBLAS, rocBLAS), dense linear algebra routines are standardized into three **BLAS (Basic Linear Algebra Subprograms)** levels based on their compute-to-memory ratio:

```
+--------------------------------------------------------------------------------+
| BLAS Level | Representative Routine | Flops   | Memory Access | Arithmetic Intensity |
|------------+------------------------+---------+---------------+----------------------|
| Level 1    | AXPY: y = a*x + y      | O(n)    | O(n)          | Memory-Bound (Low)   |
| Level 2    | GEMV: y = a*A*x + b*y  | O(n^2)  | O(n^2)        | Memory-Bound (Low)   |
| Level 3    | GEMM: C = a*A*B + b*C  | O(n^3)  | O(n^2)        | Compute-Bound (High) |
+--------------------------------------------------------------------------------+
```

### Why Level 3 BLAS Dominates Modern Accelerators
- In **Level 1** and **Level 2**, each memory transfer yields only $\approx 1$ to $2$ floating-point operations. The GPU memory bus quickly becomes saturated, leaving ALUs starving for data.
- In **Level 3 (GEMM)**, an $n \times n$ matrix multiplication requires $O(n^3)$ operations on $O(n^2)$ data. By tiling data into fast on-chip SRAM (Shared Memory / LDS) and register files, data can be reused $O(n)$ times before being written back to high-bandwidth memory (HBM/DRAM).
- This high arithmetic intensity is the mathematical principle allowing GPU Matrix/Tensor Cores to achieve hundreds of teraflops.

---

:::note Next Up
Continue to [Part 2: Matrix Decompositions, Solvers & GPU Acceleration](/docs/linear-algebra/part2) to explore LU, Cholesky, QR, and SVD factorizations and how they map to modern GPU architectures.
:::
