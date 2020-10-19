export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PratialType = Partial<Profile>;
type RequiredType = Required<Profile>;
