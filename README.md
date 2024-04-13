[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3yAkp-x3)

# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

The **worst-case** $\Theta$ runtime complexity of my cycle detection is the same as running a `dfs`. That means it is $\Theta(V + E)$ where $V$ represents the number of verticies and $E$ represents the number of edges in the graph.

```js
for (let node = 0; node < graph.length; node++) {
  if (!visited.has(node) && search(node)) {
    return true;
  }
}
```

If we take a closer look at the code we see we will iterate over each verticy in which we have not already visited. This means a total of $V$ veriticies will be iterated over.

Then inside the `search()` function we iterate over all connected edges for the current node. Therefore the **worst-case** runtime complexity to detect a cycle in a graph using this algorithm is $\Theta(V + E)$.
