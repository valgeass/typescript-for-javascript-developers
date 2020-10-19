export {};

let name: any = 'maru';

let length = (<string>name).length;

// length = 'foo';

interface Foo {
  foo: number;
}

const bar = {} as Foo;

console.log(bar);
