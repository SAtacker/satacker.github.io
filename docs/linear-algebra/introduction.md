---
sidebar_position: 1
title: "Foundations of Linear Algebra"
description: "Vector spaces, matrix transformations, norms, conditioning, and BLAS operational hierarchy."
---

# Foundations of Linear Algebra

## Vectors and Norms

A vector $\mathbf{x} \in \mathbb{R}^n$ represents a column tuple:

$$
\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}
$$

### Inner Product and Orthogonality
The standard Euclidean inner product is defined as:

$$
\langle \mathbf{x}, \mathbf{y} \rangle = \mathbf{x}^T \mathbf{y} = \sum_{i=1}^n x_i y_i
$$

The Cauchy-Schwarz inequality bounds the inner product:

$$
|\mathbf{x}^T \mathbf{y}| \le \|\mathbf{x}\|_2 \|\mathbf{y}\|_2
$$

with equality if and only if $\mathbf{x}$ and $\mathbf{y}$ are linearly dependent. Two vectors are orthogonal ($\mathbf{x} \perp \mathbf{y}$) when $\mathbf{x}^T \mathbf{y} = 0$.

### Vector Norms
For $\mathbf{x} \in \mathbb{R}^n$, the standard $p$-norms are:

- **$L_1$ Norm**: $\|\mathbf{x}\|_1 = \sum_{i=1}^n |x_i|$
- **$L_2$ Norm**: $\|\mathbf{x}\|_2 = \sqrt{\mathbf{x}^T \mathbf{x}} = \sqrt{\sum_{i=1}^n x_i^2}$
- **$L_\infty$ Norm**: $\|\mathbf{x}\|_\infty = \max_{1 \le i \le n} |x_i|$

---

## Matrix Properties and Subspaces

For $\mathbf{A} \in \mathbb{R}^{m \times n}$, the matrix defines a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ via $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$.

### Fundamental Subspaces
1. **Range / Column Space**: $\mathcal{R}(\mathbf{A}) = \{\mathbf{A}\mathbf{x} \mid \mathbf{x} \in \mathbb{R}^n\} \subseteq \mathbb{R}^m$
2. **Kernel / Null Space**: $\mathcal{N}(\mathbf{A}) = \{\mathbf{x} \in \mathbb{R}^n \mid \mathbf{A}\mathbf{x} = \mathbf{0}\} \subseteq \mathbb{R}^n$
3. **Row Space**: $\mathcal{R}(\mathbf{A}^T) \subseteq \mathbb{R}^n$
4. **Left Null Space**: $\mathcal{N}(\mathbf{A}^T) \subseteq \mathbb{R}^m$

The subspaces form orthogonal complements under the fundamental theorem of linear algebra:

$$
\mathcal{R}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A}^T), \quad \mathcal{R}(\mathbf{A}^T)^\perp = \mathcal{N}(\mathbf{A})
$$

The dimensions satisfy the Rank-Nullity Theorem:

$$
\text{rank}(\mathbf{A}) + \text{nullity}(\mathbf{A}) = n
$$

---

## Canonical Matrix Classes

| Class | Definition | Key Properties |
| :--- | :--- | :--- |
| **Symmetric** | $\mathbf{A} = \mathbf{A}^T$ | Real eigenvalues; admitting an orthonormal eigenbasis. |
| **Orthogonal** | $\mathbf{Q} \in \mathbb{R}^{n \times n}, \; \mathbf{Q}^T \mathbf{Q} = \mathbf{I}$ | Isometry: $\Vert \mathbf{Q}\mathbf{x} \Vert_2 = \Vert \mathbf{x} \Vert_2$; condition number $\kappa(\mathbf{Q}) = 1$. |
| **Symmetric Positive Definite (SPD)** | $\mathbf{A} = \mathbf{A}^T, \; \mathbf{x}^T \mathbf{A} \mathbf{x} > 0 \; \forall \mathbf{x} \neq \mathbf{0}$ | Strictly positive real eigenvalues ($\lambda_i > 0$); admits unique Cholesky factorization. |
| **Unitary** (Complex) | $\mathbf{U} \in \mathbb{C}^{n \times n}, \; \mathbf{U}^* \mathbf{U} = \mathbf{I}$ | Preserves inner products in $\mathbb{C}^n$. |

---

## Matrix Norms and Conditioning

### Norms
- **Frobenius Norm**:
  $$
  \|\mathbf{A}\|_F = \sqrt{\sum_{i=1}^m \sum_{j=1}^n a_{ij}^2} = \sqrt{\text{tr}(\mathbf{A}^T \mathbf{A})}
  $$
- **Induced 2-Norm (Spectral Norm)**:
  $$
  \|\mathbf{A}\|_2 = \sup_{\mathbf{x} \neq \mathbf{0}} \frac{\|\mathbf{A}\mathbf{x}\|_2}{\|\mathbf{x}\|_2} = \sigma_{\max}(\mathbf{A})
  $$

### Condition Number
For invertible $\mathbf{A} \in \mathbb{R}^{n \times n}$, the 2-norm condition number is:

$$
\kappa(\mathbf{A}) = \|\mathbf{A}\|_2 \|\mathbf{A}^{-1}\|_2 = \frac{\sigma_{\max}(\mathbf{A})}{\sigma_{\min}(\mathbf{A})}
$$

When solving $\mathbf{A}\mathbf{x} = \mathbf{b}$, relative perturbations in data propagate according to:

$$
\frac{\|\delta \mathbf{x}\|}{\|\mathbf{x}\|} \le \kappa(\mathbf{A}) \left( \frac{\|\delta \mathbf{A}\|}{\|\mathbf{A}\|} + \frac{\|\delta \mathbf{b}\|}{\|\mathbf{b}\|} \right)
$$

---

## BLAS Operational Hierarchy

Dense linear algebra software divides computational routines into three BLAS tiers based on operational intensity:

| BLAS Tier | Signature Example | FLOPs | Data Movement | Arithmetic Intensity ($\text{FLOPs/Byte}$) | Performance Regime |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Level 1** | $\mathbf{y} \leftarrow \alpha \mathbf{x} + \mathbf{y}$ (AXPY) | $2n$ | $3n \times \text{sizeof}(T)$ | $\approx 2 / (3 \times 4) \approx 0.17$ | Memory Bandwidth Bound |
| **Level 2** | $\mathbf{y} \leftarrow \alpha \mathbf{A}\mathbf{x} + \beta \mathbf{y}$ (GEMV) | $2n^2$ | $(n^2 + 2n) \times \text{sizeof}(T)$ | $\approx 2 / \text{sizeof}(T) \approx 0.5$ | Memory Bandwidth Bound |
| **Level 3** | $\mathbf{C} \leftarrow \alpha \mathbf{A}\mathbf{B} + \beta \mathbf{C}$ (GEMM) | $2mnk$ | $(mn + mk + nk) \times \text{sizeof}(T)$ | $O(n)$ with tiling | Compute Bound |

In Level 3 BLAS, data transferred from main memory (HBM/DRAM) into on-chip cache or registers can be reused $O(n)$ times. This arithmetic reuse is what allows modern GPU matrix execution pipelines (AMD Matrix Core, NVIDIA Tensor Core) to run at sustained theoretical throughput.
