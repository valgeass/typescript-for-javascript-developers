export {};

// function double(value: number): number;
// function double(value: string): string;

// function double(value: any): any {
//   if (typeof value === 'number') {
//     return value * 2;
//   } else {
//     return value + value;
//   }
// }

// type Double = {
//   (value: number): number;
//   (value: string): string;
// };

type Double = {
  (value: number): number;
  (value: string): string;
};

const double: Double = (value: any)=> {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
};

// function double(value: any){
//   if (typeof value === 'number') {
//     return value * 2;
//   } else {
//     return value + value;
//   }
// };

console.log(double(100));
console.log(double('Go'));
// console.log(double(true));
