---
sidebar_position: 2
title: "Matrix Decompositions, Solvers & GPU Acceleration"
description: "Direct and iterative solvers, LU, Cholesky, QR, SVD decompositions, and mapping matrix operations to GPU hardware."
---

# 🚀 Matrix Decompositions, Solvers & GPU Acceleration

In applied scientific computing and high-performance machine learning, we rarely invert matrices explicitly ($\mathbf{A}^{-1}$). Computing an explicit inverse is numerically unstable and computationally inefficient ($O(n^3)$ with large constant factors).

Instead, we factorize (decompose) matrices into products of canonical, easily inverted structures (e.g., triangular, orthogonal, diagonal matrices).

---

## 1. Direct Solvers for Linear Systems ($\mathbf{A}\mathbf{x} = \mathbf{b}$)

### A. LU Decomposition with Partial Pivoting ($\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}$)
Any non-singular matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ can be factored into:
- $\mathbf{P}$: Permutation matrix (row swaps for numerical stability)
- $\mathbf{L}$: Unit lower-triangular matrix with $1$s on the diagonal
- $\mathbf{U}$: Upper-triangular matrix

```
  PA = L * U

  Step 1: Factorization        PA = LU              (Cost: (2/3)n^3 FLOPs)
  Step 2: Forward Substitution L y = P b            (Cost: n^2 FLOPs)
  Step 3: Back Substitution    U x = y              (Cost: n^2 FLOPs)
```

**Partial Pivoting Criterion**: At step $k$, find $\max_{i \ge k} |a_{ik}|$ and swap rows to place the largest magnitude element on the diagonal pivot. This bounds multiplier elements ($|l_{ij}| \le 1$) and prevents catastrophic division by near-zero values.

---

### B. Cholesky Decomposition ($\mathbf{A} = \mathbf{L}\mathbf{L}^T$)
If $\mathbf{A}$ is **Symmetric Positive Definite (SPD)** ($\mathbf{A} = \mathbf{A}^T$ and $\mathbf{x}^T \mathbf{A} \mathbf{x} > 0 \quad \forall \mathbf{x} \neq \mathbf{0}$):

- $\mathbf{L}$ is a real lower-triangular matrix with strictly positive diagonal entries.
- **Computational Cost**: $\frac{1}{3} n^3$ FLOPs — **$2\times$ faster** than LU factorization with half the memory footprint.
- **Numerical Stability**: Guaranteed stable without row pivoting.
- **Applications**: Kalman filtering, Gaussian processes, covariance matrix manipulation in machine learning.

---

### C. QR Decomposition ($\mathbf{A} = \mathbf{Q}\mathbf{R}$)
For any rectangular matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ ($m \ge n$):
- $\mathbf{Q} \in \mathbb{R}^{m \times m}$: Orthogonal matrix ($\mathbf{Q}^T \mathbf{Q} = \mathbf{I}$, $\|\mathbf{Q}\mathbf{x}\|_2 = \|\mathbf{x}\|_2$)
- $\mathbf{R} \in \mathbb{R}^{m \times n}$: Upper-triangular matrix

#### Algorithms to Compute QR:
1. **Gram-Schmidt Orthogonalization**: Intuitive projection method, but mathematically unstable in finite-precision arithmetic (modified Gram-Schmidt is better, but still sensitive).
2. **Householder Reflections**: Applies a series of elementary reflectors $\mathbf{H}_k = \mathbf{I} - 2 \mathbf{v}_k \mathbf{v}_k^T / (\mathbf{v}_k^T \mathbf{v}_k)$ to zero out subdiagonal columns. Unconditionally numerically stable.
3. **Givens Rotations**: Performs plane rotations to zero out specific individual elements. Highly parallelizable and optimal for sparse or banded matrices.

#### Solving Linear Least Squares ($\min_{\mathbf{x}} \|\mathbf{A}\mathbf{x} - \mathbf{b}\|_2$):
$$
\mathbf{A}\mathbf{x} \approx \mathbf{b} \implies \mathbf{Q}\mathbf{R}\mathbf{x} = \mathbf{b} \implies \mathbf{R}\mathbf{x} = \mathbf{Q}^T \mathbf{b}
$$
Because $\mathbf{Q}$ is orthogonal, it preserves the Euclidean norm and conditions the problem identically without squaring the condition number ($\kappa(\mathbf{A}^T \mathbf{A}) = \kappa(\mathbf{A})^2$ in normal equations).

---

## 2. Spectral Decompositions: Eigendecomposition & SVD

### A. Eigendecomposition ($\mathbf{A} = \mathbf{V}\mathbf{\Lambda}\mathbf{V}^{-1}$)
For a square matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$:
$$
\mathbf{A} \mathbf{v} = \lambda \mathbf{v} \quad (\mathbf{v} \neq \mathbf{0})
$$
If $\mathbf{A}$ has $n$ linearly independent eigenvectors, $\mathbf{A}$ can be diagonalized:
- $\mathbf{\Lambda} = \text{diag}(\lambda_1, \dots, \lambda_n)$
- $\mathbf{V} = [\mathbf{v}_1, \dots, \mathbf{v}_n]$

**Spectral Theorem for Symmetric Matrices**:
If $\mathbf{A} = \mathbf{A}^T$, then all eigenvalues $\lambda_i \in \mathbb{R}$, and the eigenvectors form an orthonormal basis:
$$
\mathbf{A} = \mathbf{Q} \mathbf{\Lambda} \mathbf{Q}^T = \sum_{i=1}^n \lambda_i \mathbf{q}_i \mathbf{q}_i^T
$$

---

### B. Singular Value Decomposition (SVD) ($\mathbf{A} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^T$)
Every matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ has an SVD decomposition:
$$
\mathbf{A} = \sum_{i=1}^r \sigma_i \mathbf{u}_i \mathbf{v}_i^T
$$
- $\mathbf{U} \in \mathbb{R}^{m \times m}$: Left singular vectors (orthonormal eigenvectors of $\mathbf{A}\mathbf{A}^T$)
- $\mathbf{\Sigma} \in \mathbb{R}^{m \times n}$: Diagonal singular values $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$
- $\mathbf{V} \in \mathbb{R}^{n \times n}$: Right singular vectors (orthonormal eigenvectors of $\mathbf{A}^T \mathbf{A}$)

#### Eckart-Young-Mirsky Theorem (Optimal Low-Rank Approximation):
The rank-$k$ truncated SVD $\mathbf{A}_k = \sum_{i=1}^k \sigma_i \mathbf{u}_i \mathbf{v}_i^T$ minimizes approximation error under both the Frobenius and spectral norms:
$$
\min_{\text{rank}(\mathbf{B}) = k} \|\mathbf{A} - \mathbf{B}\|_2 = \|\mathbf{A} - \mathbf{A}_k\|_2 = \sigma_{k+1}
$$
This forms the mathematical underpinning of **Principal Component Analysis (PCA)**, latent semantic indexing, and modern model compression / LoRA (Low-Rank Adaptation) fine-tuning in LLMs.

---

## 3. High-Performance Hardware Mapping (GPUs & Accelerators)

Modern GPUs (AMD CDNA/RDNA, NVIDIA Hopper/Blackwell) optimize matrix operations through hierarchical memory tiling:

```
+-------------------------------------------------------------------------+
| Level 0: Global HBM Memory (TB/s bandwidth, multi-GB capacity)          |
|    |                                                                    |
|    v [Tile into LDS / Shared Memory]                                    |
| Level 1: On-Chip Shared Memory / LDS (Tens of TB/s bandwidth, ~64-228KB)|
|    |                                                                    |
|    v [Tile into Register File]                                          |
| Level 2: Vector Register Files (Hundreds of TB/s, instantaneous access) |
|    |                                                                    |
|    v [Matrix Multiply-Accumulate]                                       |
| Compute Engines: AMD Matrix Core / NVIDIA Tensor Core Units             |
+-------------------------------------------------------------------------+
```

### GEMM Tiling Strategies
To achieve close to theoretical peak TFLOPs on a GPU:
1. **Thread Block / Workgroup Tile**: Partition matrix $\mathbf{C}$ into sub-blocks ($M_{\text{tile}} \times N_{\text{tile}}$) processed by independent compute units.
2. **Warp / Wavefront Tile**: Further subdivide within the workgroup so each wave coordinates execution.
3. **Register Tile**: Each thread holds an accumulator fragment ($m \times n$) in registers, streaming $K$-dimension slices through inner dot products.

---

## 4. Numerical Accuracy & Floating-Point Summation

### The Non-Associativity of Floating-Point Addition
In IEEE-754 arithmetic, floating-point addition is **not associative**:
$$
(a + b) + c \neq a + (b + c)
$$
In high-throughput parallel reductions (such as parallel GEMM across thousands of GPU threads), changing thread schedules or reduction trees alters the summation order, leading to non-deterministic numerical results.

### Compensated Summation Algorithms
When computing high-precision dot products or accumulators:

- **Kahan Compensated Summation**:
  Tracks running low-order rounding error in a compensation variable $c$:
  ```cpp
  float sum = 0.0f;
  float c = 0.0f; // Running compensation for lost low-order bits

  for (float x : data) {
      float y = x - c;
      float t = sum + y;
      c = (t - sum) - y;
      sum = t;
  }
  ```
- **Reproducible Floating-Point Accumulators**:
  Techniques such as superaccumulators (multi-word fixed-point registers spanning the entire dynamic exponent range) or bucketed exponent binning guarantee bit-exact determinism across varying thread topologies and execution orders.

---

## 5. Summary & Key Takeaways

1. **Never invert matrices explicitly**: Use $\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}$ for general square systems, $\mathbf{A} = \mathbf{L}\mathbf{L}^T$ for SPD systems, and $\mathbf{A} = \mathbf{Q}\mathbf{R}$ for least squares.
2. **Leverage Structure**: Identifying matrix symmetry, sparsity, or triangularity yields order-of-magnitude algorithmic speedups.
3. **Hardware Alignment**: Modern accelerator performance depends on maximizing arithmetic intensity (Level 3 BLAS / GEMM) and structuring algorithms to fit cache and register hierarchies.
