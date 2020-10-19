export {};

const reducer = (accumulator: number, currentValue: number): number =>
  accumulator + currentValue;

const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values);
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
