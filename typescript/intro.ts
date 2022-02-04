console.log('Hello, TypeScript');

function add(a: number, b: number) {
  return a + b;
}

// const sum = add("2", 3); output: "error"
const sum = add(2, 3);
console.log(sum);
