# Notes Site

This is a site for my university notes, written in MDX

You can find the markdown for all the lectures in the `notes` directory, and all the images in the `public` directory. When adding styles you can use [Tailwind CSS](https://tailwindcss.com/).


## Workarounds

In the React components, newline characters need to be inserted manually until I work out how to fix this, so follow the example below

```js
<Definition name="Sequential Consistency">
{`- The interleaved sequence of operations meets the specification of a (single) correct copy of the contents  \n  
- The order of operations in the interleaving is consistent with the program order in which each individual process executed them`}
</Definition>
```
In addition, if you are using LaTeX, chances are you're going to be using backslashes, for example `\times`, sadly the backslashes get processed as escape characters, so you need to add `String.raw`, like this

```js
<Definition name="Separating Hyperplane">
{String.raw`
Let $S=\{(x_i,y_i)\}^m_{i=1} \in \mathbb{R}^d\times \{-1,+1\}$ be a training set. \n
By a hyperplane we mean a set of Hilbert space $H_{w,b}=\{x\in \mathbb{R}^d:w^Tx+b=0\}$ parametrised by $w\in \mathbb{R}^d$ and $b\in \mathbb{R}$. \n
We assume that the data are linearly separable, that is, there exist $w\in \mathbb{R}^d$ and $b\in \mathbb{R}$ such that $y_i(w^Tx_i+b)>0,i=1,..,m$. \n
In which case we call $H_{w,b}$ a separating hyperplane.
`}
</Definition>
```

 `\n`, gets fixed inside the component, but requires a space after the `\n` so that it doesn't also match things like `\not`. Not the most elegant solution I admit, I'll probably come up with a better way in the future.
 
 ## Performance issues in Firefox with uBlock Origin
 
 By default uBlock Origin disables link prefetching, which is one of the methods that the websites uses to increase performance. If you notice the site being slow when you are using Firefox with uBlock Origin, you can change this in the uBlock Origin settings on the **settings** tab under **privacy** uncheck **disable link prefetching**.
