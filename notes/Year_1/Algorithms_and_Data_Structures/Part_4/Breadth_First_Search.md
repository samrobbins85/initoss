---
title: Breadth First Search
---

# Graphs

-   A graph $G=(V,E)$ is a pair of sets: vertices V and edges E

-   To give an adjacency list representation of a graph, for each vertex
    v list all the vertices adjacent to v

-   To given an adjacency matrix representation of a graph create a
    square matrix A and label the rows and columns with the vertices:
    the entry in row i column j is 1 if vertex j is adjacent to vertex i
    and 0 if it is not

-   Can also represent a graph by an array of its edges

## Representations

![image](/img/Year_1/ADS/Part_4/BFS/representation.webp)

For each representation:

-   How much space do we need to store it?

-   How long does it take to initialize an empty graph?

-   How long does it take to make a copy?

-   How long does it take to insert an edge?

-   How long does it take to list the vertices adjacent to a vertex u?

-   How long does it take to find out if the edge (u,v) belongs to G?

# Breadth-First Search

-   Input: a graph $G=(V,E)$ and a source vertex s

-   Aim: to find the distance from s to each of the other vertices in
    the graph

-   Idea: send out a **wave** from s

    -   The wave first hits vertices at distance 1

    -   Then the wave hits vertices at distance 2

    -   and so on

-   BFS maintains a queue that contains vertices that have been
    discovered but are waiting to be processed

-   BFS colours the vertices:

    -   White indicates that a vertex is undiscovered

    -   Grey indicates that a vertex is discovered but unprocessed

    -   Black indicates that a vertex has been processed

-   The algorithm maintains an **array** d (distance)

    -   $d[s]=0$ where s is the source vertex

    -   if we discover a new vertex v while processing u, we set
        $d[v]=d[u]+1$

## Example

![image](/img/Year_1/ADS/Part_4/BFS/example.webp)

-   Initialization: source vertex grey, others are while; distance to
    source is 0; add source to the queue

-   While the queue is not empty

    -   Remove first vertex v from the queue

    -   add white neighbours of v to queue and colour them grey;
        distance is 1 greater than to v

    -   colour v black

## Pseudocode

`BFS(G,s)`

```
for each vertex u in V[G]-{s}
    do colour[u]=White
        d[u]=infinity
            pi[u]=null
colour[s]=grey
d[s]=0
pi[s]=null
Q=[]
enqueue(Q,s)
while Q != []
    do u=dequeue(Q)
        for each v in Adj[u]
            do if color[v] = white
                then colour[v]=grey
                    d[v]=d[u]+1
                    pi[v]=u
                    enqueue(Q,v)
        colour[u]=black
```

## Analysis of running time

-   We want an upper bound on the worst case running time

-   Assume that it takes constant time for each operation such as to
    teat and update colours, to make changes to distance (and
    predecessor) and to enqueue and dequeue

-   Initialization takes time $\mathcal{O}(V)$

-   Each vertex enters (and leaves) the queue exactly one. So queueing
    operations take $\mathcal{O}(V)$

-   In the loop the adjacency lists of each vertex are scanned. Each
    list is read once, and the combined lengths of the lists is
    $\mathcal{O}(E)$

-   Thus the total running time is $\mathcal{O}(V+E)$

## More than distances

-   What if as well as finding the distance to each vertex, we want to
    be able to find a shortest possible path from the source to each
    vertex?

    -   Recursively ask predecessors of nodes until you get back to the
        start node

    -   BFS used the predecessor of v and v for each vertex v. Note that
        the predecessor is denoted by $\Pi$

    -   The path from the source S in the Breadth First Tree is a
        shortest path from S to V

-   What should we add to the algorithm to achieve this?

## Notes

-   Note that the algorithm runs on both directed and undirected graphs

-   Notice that the highlighted edges (the ones used to discover new
    vertices) form a tree: we call this a **Breadth-first tree**. A path
    from s to another vertex v through the tree is the shortest path
    between s and v

-   The predecessor of a vertex is the one from which is was discovered
    (i.e. its parent in the Breadth-first tree). We can record
    predecessors in an array $\Pi$ when we run the algorithm and then
    use this array to construct the breadth-first tree

# Proofs

## Notation

Let's call the graph we consider G and the source vertex s. The distance
in G from s to a vertex v is denoted $\delta(s,v)$ and the distance
found by BFS is $d[v]$

So BFS is correct if $d[v]=\delta(s,v)$ for every vertex $v$ in G

Let us first show that the d values found cannot be too small

## Lemma 1

When BFS terminates, for each vertex v we have
$d[v]\geqslant \delta(s,v)$

### Proof

We use induction on the number of vertices added to the queue

The **base case** is when the first vertex s is added to the queue.
Clearly $d[s]=0=\delta(s,s)$

Now suppose a vertex $v$ is being added to the queue. This means that
$v$ has just been discovered from some other vertex $u$ and that as $v$
is added to the queue $d[v]$ is set to be $d[u]+1$

By induction, we know that $d[u]\geqslant \delta (s,u)$ so we have

$$
d [ v ] = d [ u ] + 1 \geq \delta ( s , u ) + 1 \geq \delta ( s , v )
$$

Where the last inequality follows from the fact that a shortest path to
$u$ can be extended to a shortest path to $v$ by adding the edge from
$u$ to $v$ (so the distance to $v$ is at most one greater than the
distance to $u$ - it might, of course, be less if there is an
alternative path to $v$ and this is why we cannot replace the inequality
in the lemma by an equals sign and use the same proof). The lemma is
proved

Now we know that the value of $d[v]$ cannot be smaller than it should
be, we have to think about how to prove it cannot be too big. To do
this, we first think about what we can say about the values in the array
$d$ if we know the order in which vertices enter the queue

## Lemma 2

In $u$ is enqueued before $v$ then $d[u]\leqslant d[v]$

### Proof

In fact, we shall prove the following claim

If a is at the head of the queue and b is at the tail, then $d[b]$ is
either $d[a]$ or $d[a]+1$, and $d$ values of the vertices as you go
along the queue never decrease

Notice what this is saying: either $d[w]$ is the same for every vertex
in the queue or the first so many vertices have one $d$ value and the
ones behind have $d$ value one greater. Also not that the claim implies
the lemma: if $v$ enters the queue later than $u$ then $d[v]$ must be at
least $d[u]$

We prove this claim by using induction on the number of vertices added
to the queue:

The **base case** - when the source is first added to the queue - is
clearly true.

Now suppose a vertex $w$ is added to the queue. This happens when a
vertex $x$ is removed from the front of the queue and $w$ is a neighbour
of $x$. Let $y$ be the vertex at the tail of the queue at the moment $w$
is added.

By the inductive hypothesis, $d[y]$ is $d[x]$ or $d[x]+1$ and we set
$d[w]$ to be $d[x]+1$ so the claim remains true (since $w$ is given a
$d$ value at least as large as the vertex in front of it and no more
than one more than the vertex at the front of the queue).

The lemma is proved

## Theorem 1

When BFS terminates, for each vertex $v$ we have $d[v]=\delta(s,v)$

### Proof

Let us assume the Theorem is not true. Then by lemma 1, we have
$d[v]>\delta(s,v)$ for some vertex $v$. Let us say that $v$ is the
vertex closest to the source $s$ for which this is true.

Consider the shortest path from $s$ to $v$. Let $u$ be the penultimate
vertex on that shortest path. So $\delta(s,v)=\delta(s,u)+1$. Because
$u$ is nearer to $s$ than $v$, we have $d[u]=\delta(s,u)$ (by the way
that we chose $v$. So)

$$
d [ v ] > \delta ( s , v ) = \delta ( s , u ) + 1 = d [ u ] + 1
$$

That is $d[v]$ is at least $d[u]+2$. But think about what happens when $u$ is
dequeued

-   If $v$ was already dequeued, when $d[v]\leqslant d[u]$ (by Lemma 2);
    a contradiction

-   If $v$ is in the queue, then it was added, when some vertex $w$ was
    dequeued and $d[v]$ was assigned the value $d[w]+1$. But
    $d[w]\leqslant d[u]$ (by Lemma 2 again, since $w$ must have been
    added ahead of $u$ in the queue) so $d[v]\leqslant d[u]+1$; again, a
    contradiction

-   Finally if $v$ is not yet in the queue, then when $u$ is discovered
    and $d[v]$ is given the value $d[u]+1$. This last contradiction
    proved the Theorem
