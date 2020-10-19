export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberAny);
console.log(typeof numberUnknown);
// console.log(numberUnknown + 10);
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
