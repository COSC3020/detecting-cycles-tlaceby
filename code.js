/**
 * Detect cycles using dfs search. Expects a adj list as the graph representation
 * @param {number[][]} graph
 * @returns {boolean}
 */
function hasCycle(graph) {
  const visited = new Set();

  /**
   * @param {number} node
   * @param {number} parent
   * @returns {boolean}
   */
  function search(node, parent = Infinity) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      const visitedNeighbor = visited.has(neighbor);

      // If not visited this node but the node leads back to us also a cycle
      if (!visitedNeighbor && search(neighbor, node)) {
        return true;
      }

      // If we made it from a neighbor -> node -> neighbor also a cycle
      if (visitedNeighbor && neighbor !== parent) {
        return true;
      }
    }

    return false;
  }

  for (let node = 0; node < graph.length; node++) {
    if (!visited.has(node) && search(node)) {
      return true;
    }
  }

  return false;
}

module.exports.hasCycle = hasCycle;
