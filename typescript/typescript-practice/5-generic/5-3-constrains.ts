interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제네릭인데 타입은 Employee를 상속받은 애들만 가능
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const kim = new FullTimeEmployee();
const park = new PartTimeEmployee();
kim.workFullTime();
park.workPartTime();
const kimAfterPay = pay(kim);
const parkAfterPay = pay(park);

const obj = {
  name: "kim",
  age: 20,
};

console.log(getValue(obj, "name")); // kim
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj, "score")); // error

// keyof type = object 안에 들어있는 key의 type을 의미함.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
