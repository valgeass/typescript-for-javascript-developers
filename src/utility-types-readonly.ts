export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'maru',
  age: 26,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Sato',
  age: 26,
};

type OriginalReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Test = OriginalReadOnly<Profile>;

const test: Test = {
  name: 'test',
  age: 30,
};

