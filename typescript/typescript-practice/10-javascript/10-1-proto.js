// 프로토타입은 자바스크립트에서 상속을 사용하기 위해서 쓰는 용도이다.
// es6 부터 class 문법이 나오면서 안씀
// class 도 까보면 내부엔 prototype으로 구현되어있음


// const x = {}
// const y = {}
// console.log(x)
// console.log(y)
// console.log(x.__proto__ == y.__proto__);
// const array = [];
// console.log(array)


function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = (shots) => {
  //   console.log('making... ☕️');
  // }
}

// // Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making... ☕️');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

// console.log(machine1);
// console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(123)
console.log(latteMachine);
latteMachine.makeCoffee();