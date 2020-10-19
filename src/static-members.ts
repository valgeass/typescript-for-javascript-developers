export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Hota';
  static lastName: string = 'Maru';

  static work(): string {
    return `hello, ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
