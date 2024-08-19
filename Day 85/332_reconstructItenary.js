const findItenary = (tickets) => {
  const adjacencyList = new Map();

  // build adjaceny list
  for (let [from, to] of tickets) {
    if (!adjacencyList.has(from)) {
      adjacencyList.set(from, []);
    }
    adjacencyList.get(from).push(to);
  }

  //sort the destinations is reverse lexicographical order

  for (let [key, value] of adjacencyList) {
    value.sort((a, b) => b.localeCompare(a));
  }

  const result = [];

  //DFS
  function dfs(airport) {
    const destinations = adjacencyList.get(airport) || [];

    while (destinations.length > 0) {
      const nextAirport = destinations.pop();
      dfs(nextAirport);
    }

    result.unshift(airport);
  }

  dfs("JFK");

  return result;
};

const assert = require("assert");
assert.deepEqual(
  findItenary([
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFO", "SJC"],
    ["LHR", "SFO"],
  ]),
  ["JFK", "MUC", "LHR", "SFO", "SJC"]
);
assert.deepEqual(
  findItenary([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ]),
  ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
);
console.log("All test cases passed!");
