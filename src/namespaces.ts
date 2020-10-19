export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('maru');
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person('ma');
console.log(meOsaka.name);
const michael = new English.Person('Michael', 'Joseph', 'Jakson');
console.log(michael);
