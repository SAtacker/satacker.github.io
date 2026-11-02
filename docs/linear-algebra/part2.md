---
sidebar_position: 2
title: "Matrix Decompositions, Solvers, and GPU Acceleration"
description: "LU, Cholesky, QR, and SVD factorizations with direct solvers and accelerator memory hierarchy considerations."
---

# Matrix Decompositions, Solvers, and GPU Acceleration

## Direct Solvers for Linear Systems

Solving $\mathbf{A}\mathbf{x} = \mathbf{b}$ via explicit matrix inversion ($\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$) is both numerically unstable and computationally inefficient. Production solvers factorize $\mathbf{A}$ into structured triangular, orthogonal, or diagonal matrices.

### LU Decomposition with Partial Pivoting

For a general non-singular matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$, Gaussian elimination with row pivoting computes:

$$
\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}
$$

- $\mathbf{P} \in \mathbb{R}^{n \times n}$: Permutation matrix tracking row interchanges.
- $\mathbf{L} \in \mathbb{R}^{n \times n}$: Unit lower-triangular matrix ($l_{ii} = 1, \; |l_{ij}| \le 1$).
- $\mathbf{U} \in \mathbb{R}^{n \times n}$: Upper-triangular matrix.

**Computational Cost**:
1. Factorization: $\frac{2}{3} n^3$ FLOPs ($\approx \frac{1}{3} n^3$ multiply-adds).
2. Forward substitution ($\mathbf{L}\mathbf{y} = \mathbf{P}\mathbf{b}$): $n^2$ FLOPs.
3. Backward substitution ($\mathbf{U}\mathbf{x} = \mathbf{y}$): $n^2$ FLOPs.

**Pivoting Strategy**: At column $k$, the pivot is chosen as $\max_{i \ge k} |a_{ik}^{(k)}|$ and swapped into the diagonal position. This ensures multiplier magnitudes satisfy $|l_{ij}| \le 1$, bounding growth factors during Gaussian elimination.

---

### Cholesky Factorization

When $\mathbf{A} \in \mathbb{R}^{n \times n}$ is Symmetric Positive Definite ($\mathbf{A} = \mathbf{A}^T$ and $\mathbf{x}^T \mathbf{A} \mathbf{x} > 0 \; \forall \mathbf{x} \neq \mathbf{0}$), $\mathbf{A}$ factors uniquely into:

$$
\mathbf{A} = \mathbf{L}\mathbf{L}^T
$$

where $\mathbf{L}$ is a lower-triangular matrix with strictly positive diagonal elements:

$$
l_{jj} = \sqrt{a_{jj} - \sum_{k=1}^{j-1} l_{jk}^2}, \qquad l_{ij} = \frac{1}{l_{jj}} \left( a_{ij} - \sum_{k=1}^{j-1} l_{ik} l_{jk} \right) \quad (i > j)
$$

**Computational Cost**: $\frac{1}{3} n^3$ FLOPs ($\approx \frac{1}{6} n^3$ multiply-adds), exactly half the cost of LU factorization. Pivoting is not required for numerical stability.

---

### QR Decomposition and Least Squares

For rectangular $\mathbf{A} \in \mathbb{R}^{m \times n}$ with $m \ge n$:

$$
\mathbf{A} = \mathbf{Q}\mathbf{R}
$$

- $\mathbf{Q} \in \mathbb{R}^{m \times m}$ (full) or $\mathbb{R}^{m \times n}$ (thin/economy): Orthogonal matrix ($\mathbf{Q}^T \mathbf{Q} = \mathbf{I}$).
- $\mathbf{R} \in \mathbb{R}^{m \times n}$ (full) or $\mathbb{R}^{n \times n}$ (thin): Upper-triangular matrix.

#### Numerical Implementations
1. **Householder Reflections**: Applies orthogonal reflectors $\mathbf{H}_k = \mathbf{I} - 2 \frac{\mathbf{v}_k \mathbf{v}_k^T}{\mathbf{v}_k^T \mathbf{v}_k}$ to annihilate subdiagonal columns. Cost: $2n^2(m - \frac{n}{3})$ FLOPs. Numerically backward stable.
2. **Givens Rotations**: Applies $2 \times 2$ orthogonal rotations to eliminate specific non-zero elements. Ideal for banded or sparse structures.

#### Linear Least Squares
To solve $\min_{\mathbf{x}} \|\mathbf{A}\mathbf{x} - \mathbf{b}\|_2$:

$$
\mathbf{R}\mathbf{x} = \mathbf{Q}_1^T \mathbf{b}
$$

Unlike forming the normal equations $\mathbf{A}^T \mathbf{A} \mathbf{x} = \mathbf{A}^T \mathbf{b}$, which squares the condition number ($\kappa(\mathbf{A}^T \mathbf{A}) = \kappa(\mathbf{A})^2$), QR operates directly on $\mathbf{A}$ and preserves the original condition number $\kappa(\mathbf{A})$.

---

## Spectral Decompositions

### Eigendecomposition
For square $\mathbf{A} \in \mathbb{R}^{n \times n}$, a non-zero vector $\mathbf{v}$ satisfying $\mathbf{A}\mathbf{v} = \lambda \mathbf{v}$ is an eigenvector associated with eigenvalue $\lambda$.

If $\mathbf{A}$ has $n$ linearly independent eigenvectors, it is diagonalizable:

$$
\mathbf{A} = \mathbf{V}\mathbf{\Lambda}\mathbf{V}^{-1}
$$

where $\mathbf{\Lambda} = \text{diag}(\lambda_1, \dots, \lambda_n)$ and $\mathbf{V} = [\mathbf{v}_1, \dots, \mathbf{v}_n]$.

**Spectral Theorem**: If $\mathbf{A} = \mathbf{A}^T$, then all $\lambda_i \in \mathbb{R}$, and there exists an orthonormal eigenbasis $\mathbf{Q}$:

$$
\mathbf{A} = \mathbf{Q}\mathbf{\Lambda}\mathbf{Q}^T = \sum_{i=1}^n \lambda_i \mathbf{q}_i \mathbf{q}_i^T
$$

---

### Singular Value Decomposition (SVD)

For any matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ with rank $r \le \min(m, n)$:

$$
\mathbf{A} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^T = \sum_{i=1}^r \sigma_i \mathbf{u}_i \mathbf{v}_i^T
$$

- $\mathbf{U} \in \mathbb{R}^{m \times m}$: Orthogonal matrix whose columns are eigenvectors of $\mathbf{A}\mathbf{A}^T$.
- $\mathbf{\Sigma} \in \mathbb{R}^{m \times n}$: Diagonal matrix of ordered singular values $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$.
- $\mathbf{V} \in \mathbb{R}^{n \times n}$: Orthogonal matrix whose columns are eigenvectors of $\mathbf{A}^T \mathbf{A}$.

The vectors satisfy the mapping relations:

$$
\mathbf{A}\mathbf{v}_i = \sigma_i \mathbf{u}_i, \qquad \mathbf{A}^T \mathbf{u}_i = \sigma_i \mathbf{v}_i
$$

#### Low-Rank Approximation (Eckart-Young-Mirsky Theorem)
The truncated rank-$k$ approximation ($k < r$):

$$
\mathbf{A}_k = \sum_{i=1}^k \sigma_i \mathbf{u}_i \mathbf{v}_i^T
$$

minimizes the approximation error over all matrices of rank at most $k$:

$$
\min_{\text{rank}(\mathbf{B}) \le k} \|\mathbf{A} - \mathbf{B}\|_2 = \|\mathbf{A} - \mathbf{A}_k\|_2 = \sigma_{k+1}
$$

$$
\min_{\text{rank}(\mathbf{B}) \le k} \|\mathbf{A} - \mathbf{B}\|_F = \|\mathbf{A} - \mathbf{A}_k\|_F = \sqrt{\sum_{i=k+1}^{\min(m, n)} \sigma_i^2}
$$

---

## Accelerator Memory Hierarchy and Tiling

On hardware accelerators (e.g., AMD ROCm / CDNA / RDNA, NVIDIA CUDA), high computational throughput relies on structured data reuse across memory levels:

```
[ Global Memory: HBM / GDDR ]   ~1.5 - 5.3 TB/s
            │
            ▼ Tile load into on-chip scratchpad
[ Local Data Share (LDS) / Shared Memory ]   ~15 - 30 TB/s
            │
            ▼ Tile load into registers
[ Vector Register File (VGPRs) ]   ~100+ TB/s
            │
            ▼ Direct operand feed
[ Matrix Core Engine / Tensor Cores ]
```

### GEMM Tiling Hierarchies
1. **Workgroup / Thread-Block Tile**: Partitions $\mathbf{C}$ into an $M_{\text{tile}} \times N_{\text{tile}}$ submatrix. A workgroup cooperatively loads $M_{\text{tile}} \times K_{\text{step}}$ and $K_{\text{step}} \times N_{\text{tile}}$ slices of $\mathbf{A}$ and $\mathbf{B}$ into LDS/shared memory.
2. **Wavefront / Warp Tile**: Subdivides the block tile across waves executing matrix-multiply instructions (e.g., AMD `v_mfma` or NVIDIA `mma.sync`).
3. **Thread Register Tile**: Accumulators stay in vector registers across the entire $K$-dimension accumulation loop, preventing memory spills.

---

## Floating-Point Non-Associativity and Summation

In IEEE-754 floating-point arithmetic, addition is non-associative:

$$
(a + b) + c \neq a + (b + c)
$$

Varying execution scheduling or reduction tree topologies across GPU workgroups changes the summation order and causes non-deterministic results.

### Compensated Summation
Kahan compensated summation maintains a running compensation variable $c$ to accumulate lost low-order bits:

```cpp
float kahan_sum(const float* data, size_t n) {
    float sum = 0.0f;
    float c = 0.0f;

    for (size_t i = 0; i < n; ++i) {
        float y = data[i] - c;
        float t = sum + y;
        c = (t - sum) - y;
        sum = t;
    }
    return sum;
}
```

> **Compiler Optimization Caveat**: Compilers with aggressive floating-point reassociation flags enabled (`-ffast-math`, `-Ofast`, or `#pragma STDC FP_CONTRACT ON`) can optimize `(t - sum) - y` algebraically to zero. In production code, memory fences, volatile reads, or `#pragma STDC FP_CONTRACT OFF` are required to preserve compensation semantics.

### Reproducible Accumulators
When bit-level determinism is required across variable thread counts or distributed nodes, reproducible accumulation techniques include:
- **Demmel-Nguyen multi-tier binning**: Accumulating floating-point values into fixed-point exponent bins.
- **Superaccumulators (Kulisch)**: Long fixed-point registers (e.g., hundreds of bits) that cover the full dynamic exponent range without intermediate roundoff.
