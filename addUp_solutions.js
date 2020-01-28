function addUpToLoop(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
const addUpToMath = n => (n * (n + 1)) / 2;

console.time("perf 1");
addUpToLoop(1000000000);
console.timeEnd("perf 1");

console.time("perf 2");
addUpToMath(1000000000);
console.timeEnd("perf 2");
