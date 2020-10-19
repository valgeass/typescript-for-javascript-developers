export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('maru', 26);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
