---
title: Recap
---

# Polynomials

## Definition

Let $n\geqslant 0$ be an integer, and let $a_0,a_1,...,a_n$ be real
numbers, $a_n\neq0$ the function:
$$
f(x)=a_n\cdot x^n+a_{n-1}\cdot x^{n-1}+...+a_1\cdot x+a_0
$$
is called a **polynomial**

The numbers $a_0,...,a_n$ are called **coefficients**

We say this is a polynomial of **degree** n

Note: If f(x)=0, then the degree of f(x) is $-\infty$

## Types of polynomials

| Degree | Name      |
| ------ | --------- |
| 0      | constants |
| 1      | linear    |
| 2      | quadratic |
| 3      | cubic     |

## Proposition

Let

$$
f ( x ) = a _ { n } \cdot x ^ { n } + a _ { n - 1 } \cdot x ^ { n - 1 } + \ldots + a _ { 1 } \cdot x + a _ { 0 }
$$

$$
g ( x ) = b _ { m } \cdot x ^ { m } + b _ { m - 1 } \cdot x ^ { m - 1 } + \ldots + b _ { 1 } \cdot x + b _ { 0 }
$$

be polynomials of degrees n and m respectively

- the **sum** of the polynomials f(x)+g(x) is a polynomial of
  **degree** max{n,m}

- the **product** of the polynomials $f(x)\cdot g(x)$ is a polynomial
  of degree n+m. Product is multiplying two functions together

- the **composition** of the polynomials $f(g(x))$ is a polynomial of
  degree $n\cdot m$. Composition is replacing the x terms in f(x) with
  g(x). Remember $f(g(x))\neq g(f(x))$

- The degree is the important part, as most other parts are
  insignificant as x becomes large

# Positive integer powers

## Definition

For a positive integer n and a real number a,
$$a ^ { n } = \underbrace { a \cdot a \cdot \ldots \cdot a } _ { n }$$
The number a is called the **base** and n is called the **exponent** or
the **power**

## Basic rules

For positive integers n,m and a real number a $$a^n\cdot a^m=a^{n+m}$$
$$(a^n)^m=a^{n\cdot m}$$

# Rational Powers

## Definitions

### Definition 1

For a real number $a\neq 0$ (because $0^0$ is undefined) $$a^0=1$$

### Definition 2

For a positive integer n and a real number $a\neq 0$
$$a^{-n}=\dfrac{1}{a^n}$$

### Defintion 3

For a positive integer n and a real number $a\geqslant 0$, we define
$a^{\frac{1}{n}}$ as the **n-th root** of a

That is $a^{\frac{1}{n}}$ is a real number x with the property $x^n=a$
$(a^{\frac{1}{n}}=x\Leftrightarrow x^n=a)$

We also write $a^{\frac{1}{n}}=\sqrt[n]{a}$

## More on Rational Powers

When $a>0$ and n is even the equation $$x^n=a$$ may have more than one
real solution

For example, the equation $$x^2=4$$ has two solutions, 2 and -2

By convention, we normally consider the **positive solution** as the
value of the n-th root of a

Notice that we assumes that $a>0$
If n is an **odd** integer, then we can extend the definition of the
n-th root to **negative** bases a because the equation $$a^n=a$$ still
has real solutions
For example:

$$
(-8)^{\frac{1}{3}}=-2 \ \text{ because } \ (-2)^3=-8
$$

## Definition

Let m be an integer and let n be a positive integer. For a real number $a>0$

$$
a^{\frac{m}{n}}=(a^m)^\frac{1}{n}=(a^\frac{1}{n})^m
$$

For example

$$
8^\frac{2}{3}=4
$$

$$
8^{-\frac{2}{3}}=\frac{1}{4}
$$

# Real Powers

Because the set of rational numbers is a dense subset (belong in or
limit points) of the real numbers we can also define real powers. That
is, we can define $a^x$ for any positive real number a and any real
number x.

The formal technique to do this is by taking the **limit**.

That means that for any real number x, we can find a rational
$\frac{m}{n}$ arbitrarily close to x, so that $a^{\frac{m}{n}}$ is also
arbitrarily close to $a^x$.

# Exponential Functions

## Definition

For a fixed positive real number a, the function $$f(x)=a^x$$ is called
**exponential function** with base a

## Proposition 1

Let $a,b,x,y$ be real numbers with $a,b>0$. Then

- $a^x\cdot a^y=a^{x+y}$

- $a^{-x}=\frac{1}{a_x}$

- $(a^x)^y=a^{x\cdot y}$

- $(ab)^x=a^x\cdot b^x$

## Proposition 2

Let $a,x,y$ be real numbers with $a>1$. Then for $x\leqslant y$,
$a^x\leqslant a^y$

We say that the exponential function with $a>1$ increases
**monotonically**

# Logarithms

## Definition

For real positive number $x,a$ with $a\neq 1$, the **logarithm** of x to
the **base** a, written $\log_ax$ as the unique real number y that
satisfies $a^y=x$

That is, if we raise a to the power of $\log_ax$ we get x:

$$
a^{\log_ax}=x
$$

## Properties of logarithms

### Proposition

Let $a,x,y$ be positive real numbers $a\neq 1$ we have

- $\log_axy=log_ax+log_ay$

- $\log_a\frac{x}{y}=\log_ax-\log_ay$

- $\log_ax^s=s\cdot \log_ax$ for any real s

**Proof**

- $a^{\log_ax+\log_ay}=a^{\log_ax}\cdot a^{\log_ay}=x\cdot y$

- $a^{\log_ax-\log_ay}=a^{\log_ax}\cdot a^{-\log_ay}=\frac{x}{y}$

- $a^{s\log_ax}=(a^{\log_ax})^s=x^s$

### Proposition

Let $a,b,x$ be positive real numbers, $a,b \neq 1$, Then
$$\log_ax=\dfrac{log_bx}{\log_ba}$$ So logarithms to different constant
bases only differ by a constant

**Proof**
By the definition $$x=a^{\log_ax}$$ It follows that

$$
\log_bx=\log_ba^{\log_ax}=\log_ax\cdot\log_ba
$$

### Natural Logarithms

The natural logarithm is denoted $ln x$
2,e and 10 are the "special" bases in CS

## Logarithmic Function

### Definition

Let a be a positive real number $a\neq 1$. The function

$$
f(x)=\log_ax
$$

Defined for positive real numbers is called **logarithmic**

- Logarithmic functions are **inverses** of exponential functions

- They are only defined on positive real numbers

- For any base, the logarithm of 1 to that base is 0

- For $a>1$ logarithms to the base a increase monotonically.
