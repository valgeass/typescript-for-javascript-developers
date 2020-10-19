export {};

let bmi: (height: number, weight: number) => number = (height: number, weight: number): number => {
  return weight / (height * height);
};
