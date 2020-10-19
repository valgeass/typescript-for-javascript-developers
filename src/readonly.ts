export {};

class VisaCard {
  // readonly owner: string;

  constructor(readonly owner: string) {
    // this.owner = owner;
  }
}

let myVisaCard = new VisaCard('maru');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'test';
