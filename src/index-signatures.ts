export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'maru', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue}
profile.name = 'maru';
profile.age = 26;
profile.nationality = 'Japan';
