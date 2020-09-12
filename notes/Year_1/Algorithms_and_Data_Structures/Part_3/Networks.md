---
title: Networks
---

# Comparator

![Comparator](/img/Year_1/ADS/Part_3/Networks/comparator.webp)

This works in $\mathcal{O}(1)$ time

![Network](/img/Year_1/ADS/Part_3/Networks/intro.webp)

Wires go straight, left to right

Each comparator has inputs/outputs on some pairs of wires

Data marches left to right, in goose step (synchronised)

The depth is the longest chain of comparators that could be encountered,
so the above example has depth of 3

## Claim

This comparison network will sort any set of 4 input values

## Proof

-   after leftmost comparators, min is on either wire 1 or 3, max is on
    either 2 or 4

-   after next two comparators, min is on wire 1, max on 4

-   last comparator gets correct values onto 2 and 3

# Selection sorter

![image](/img/Year_1/ADS/Part_3/Networks/selection.webp)

Depth:

$$
D ( n ) = D ( n - 1 ) + 2 , D ( 2 ) = 1 \Rightarrow D ( n ) = 2 n - 3 = \Theta ( n )
$$

If view depth as "time" parallelism gets us faster method than any
sequential comparison based sort

## Can we do better

We can do better than $\Theta(n)$, the AKS network has depth
$\mathcal{O}(\log n)$, with the caveats:

-   Huge constant

-   Really hard to construct

-   Highly impractical - of theoretical interest only

## Simplification

-   Consider the line (1D array) of length n

-   Each node 1,...,n stores one of the items to be sorted

-   in even steps even-numbered nodes i compare/exchange with their
    neighbour i+1

-   in odd steps odd-numbered nodes i compare/exchange with their
    neighbour i+1

-   called **odd-even transposition sort** (OETS)

For example:

![image](/img/Year_1/ADS/Part_3/Networks/network.webp)

This is very similar to **bubble sort**

The questions are now:

-   does it always work? yes

-   how long does it take? no more than n steps

It can be viewed as a sorting network of depth n:

![image](/img/Year_1/ADS/Part_3/Networks/network1.webp)

We will prove this using the 0/1 principle and induction

**Lemma (0-1 principle)**

Let CE be an **oblivious compare-exchange algorithm** or network. CE
correctly sort all sequences of integer numbers iff CE correctly sorts
all 0-1 sequences

Oblivious - does the same steps no matter what the values of the input
is

**Lemma(OETS)**

An OETS network of depth n sorts any input of length n

**Base: $n\leqslant 2$** clear (comparators work by definition)

**Step $n-1\rightarrow n$** Let N be OETS network for n elements and let
$a=(a_0,...,a_{n-1})$ be 0/1 sequence

**Case 1** if $a_{n-1}$ (bottom row) then:

-   bottom row of comparators obsolete

-   we've got OETS network for n-1 elements plus superfluous row and
    column

-   by hypothesis $(a_0,...,a_{n-2})$ get sorted

-   $a_{n-1}$ already in proper position so we're done

**Case 2** if $a_{n-1}=0$ then

-   Any comparator seeing this 0 performs swap (if other element is also
    0 then jump horses); might as well replace them with fixed crossing
    lines

    ![image](/img/Year_1/ADS/Part_3/Networks/networkProof.webp)

-   What remains is OETS network for input size n-1 so we're done

## Proving the 0-1 Principle

-   Assume you have an input
    $<a_1,a_2,...,a_n>\xrightarrow[]{C}<b_1,b_2,...,b_n>$
-   You have a monotonic function $f:\mathbb{Z}\rightarrow\mathbb{Z}$
-   Where monotone is for every $x\leqslant y \Rightarrow f(x)\leqslant f(y)$
-   Apply the monotonic function to a comparator
    ![Network](/img/Year_1/ADS/Part_3/Networks/comparator.webp)
    This would create
    ![Network](/img/Year_1/ADS/Part_3/Networks/0-1.webp)

-   As this is true for a comparator, it will be true for any network of
    comparators
-   Applying this to the sequence:

$$
<(f(a_1),f(a_2),...,f(a_n))>\xrightarrow{C}<f(b_1),f(b_2),...,f(b_n)>
$$

-   The winning elements of the first
    sequence($<a_1,a_2,...,a_n>\xrightarrow[]{C}<b_1,b_2,...,b_n>$) will be
    the same as the winning elements of this sequence
-   Assume you have some input $a_1,a_2,...,a_i,...,a_j,...$ where $a_i>a_j$
    and their order is maintained after going through the function, then the
    function is wrong.

$$
f(x)=\{ 0 \  if \  x<a_i \quad 1 \  if \  x\geqslant \  a_i\}
$$

-   Out of this, you get a sequence of 0s and 1s sorted incorrectly.
-   Want to prove C sorts 0-1 input $\Rightarrow$ sorts any input
-   Proved it sorts some input incorrectly $\Rightarrow$ sorts some 0-1
    input incorrectly (contrapositive proof)
-   This is because in logic:

$$
A\Rightarrow B \equiv \lnot B\Rightarrow\lnot A
$$

# Bitonic sequences

**Formal definition:** A sequence $(a_0,...,a_{n-1})$ is called
**bitonic** if

1.  There is an index j, $0\leqslant j< n$ such that $(a_0,\ldots,a_j)$
    is monotonically increasing , and $(a_j,\ldots ,a_{n-1})$ is
    monotonically decreasing

2.  if (1) is not fulfilled, then there is an index i, $0\leqslant i <n$
    such that $(a_i,...,a_{n-1},a_0,...,a_{i-1})$ does fulfill (1). i.e.
    you can just loop the numbers round to the front (see example below)

Examples:

-   (0,2,3,5,6,7,3,1) is bitonic by (1), j=5

-   (6,7,5,3,0,1,4,5) is bitonic by (2), i=4, j=5, after shift:
    (0,1,4,5,6,7,5,3)

-   An example of a non bitonic sequence is 1,3,2,4

All bitonic sequences of 0s and 1s are of the form:

-   $0^i1^j0^k$

-   $1^i0^j1^k$

## "Shapes" of bitonic sequences

![image](/img/Year_1/ADS/Part_3/Networks/shapes.webp)

## Properties of bitonic sequences

-   Property "bitonic" is closed under cyclic shift (remains bitonic
    under any cyclic shift)

-   Every sub-sequence of a bitonic sequence is bitonic itself

-   If $$A=(a_0,...,a_i)$$ monotonically increasing and
    $$B=(b_{i+1},...,b_{n-1})$$ is monotonically decreasing, then
    $$AB=(a_0,...,a_i,b_{i+1},b_{n-1})$$ is bitonic

## Bitonic sorting network

**Step 1:** construct a "bitonic sorter"; it sorts any bitonic
sequence

For 0-1 sequences- which we can focus on - bitonic sequences have the
form

$$
0^i1^j0^k \quad \text{or} \quad 1^i0^j1^k
$$

### Step 0: Half cleaner

![image](/img/Year_1/ADS/Part_3/Networks/half_cleaner.webp)

If clean in lower part: all 1s

If clean in upper part: all 0s

**Lemma**:
If the imput to a half-cleaner is a bitonic 0-1 sequence, then for
output:

-   Both top and bottom half are bitonic

-   every element in top half is $\leqslant$ any element in bottom half

-   at least one of the halves is clean - all 0's or all 1's

**Proof:**

Sorter is comparing nth element in 1st half with nth element in 2nd half
repeatedly for all elements

### Step 1: Bitonic Sorter

![image](/img/Year_1/ADS/Part_3/Networks/bitonic_sorter.webp)

Using the bitonic sorters on the clean version, while not actually doing
anything, keeps the data in the correct place. Supposing the converse
where the bottom half was clean with 1s, they would all be in the
correct place and concatenating it with the output from the bitonic
sorter gives a list

### Step 2: A merging network

Merges 2 sorted sequences. Adapt a half-cleaner.

Idea: given 2 sorted sequences, reverse second one, concatenate with the
first $\Rightarrow$ bitonic

Example:

$$
X=0011 \quad Y=0111 \quad Y^R=1110 \quad XY^R=00111110
$$

-   So can merge X and Y by doing bitonic sort on X and $Y^R$

-   Don't explicitly reverse Y, instead reverse the bottom half of the
    connections of the first half-cleaner

![image](/img/Year_1/ADS/Part_3/Networks/reverse_cleaner.webp)

![image](/img/Year_1/ADS/Part_3/Networks/full_network.webp)

### Step 3: Asorting network

Recursive merging - like merge sort, bottom up:

![image](/img/Year_1/ADS/Part_3/Networks/AsortingNetwork.webp)

You can see that this just keeps recursing down the size of the mergers

Depth:

$$
D(n)=D(n/2)+\log n, D(2)=2 \Rightarrow D(n)=\Theta(\log^2 n)
$$

Use 0-1 principle to prove that this sorts all inputs

Prove by induction as it has recursive construction.

**Base case**: comparators sort two numbers.

Need to prove mergers do what they are supposed to do. - recursive
construction so use induction again

Need to prove half cleaners do what they are supposed to do - proof
already shown via lemma.
