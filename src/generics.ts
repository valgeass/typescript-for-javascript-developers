export {};

// const echo = (arg: number): number => arg;

// const echo = (arg: string): string => arg;

const echo = <T>(arg: T): T => arg;

console.log(echo<number>(100));
console.log(echo<string>('hello'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello generics').echo());
console.log(new Mirror<boolean>(false).echo());
