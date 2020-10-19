export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run.';
  }
}

class Lion extends Animal {
  public spped: number;
  constructor(name: string, speed: number) {
    super(name);
    this.spped = speed;
  }
  run(): string {
    return `${super.run()} ${this.spped}km/h. `;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 100).run());
