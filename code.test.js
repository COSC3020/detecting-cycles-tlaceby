const assert = require("assert");
const { hasCycle } = require("./code");

const c1 = [
  [1], // 0
  [2], // 1
  [0], // 2
];

const dg1 = [
  [1], // 0
  [0], // 1
  [3], // 2
  [2], // 3
  [], // 4
];

const g1 = [
  [1], // 0
  [0, 2, 3], // 1
  [1], // 2
  [1, 4], // 3
  [3], // 4
];

const g2 = [
  [1, 2], // 1
  [0, 2], // 1
  [0, 1], // 2

  [4], // 3
  [5, 3], // 4
  [4, 6], // 5
  [5], // 6
];

const g3 = [
  [3], // 0
  [3], // 1
  [3], // 2
  [0, 1, 2], // 3
];

const g4 = [
  [1, 2, 3], // 0
  [0, 2, 3], // 1
  [0, 1, 3], // 2
  [0, 1, 2], // 3
];

const g5 = [
  [1], // 0
  [0, 2], // 1
  [1, 3], // 2
  [2, 4, 5], // 3
  [3], // 4
  [3], // 5

  [7], // 6
  [6, 8, 9], // 7
  [7], // 8
  [7], // 9
];

assert(hasCycle(c1) === true); // 0 -> 1 -> 2 -> 0
assert(hasCycle(dg1) === false);

assert(hasCycle(g1) === false);
assert(hasCycle(g2) === true); // 0 -> 1 -> 2 -> 0
assert(hasCycle(g3) === false);
assert(hasCycle(g4) === true); // 0 -> 3 -> 1 -> 0 ... etc...
assert(hasCycle(g5) === false);
