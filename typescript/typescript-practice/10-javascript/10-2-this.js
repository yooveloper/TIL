
// 자바스크립트에서 this란 부르는 곳에 따라서 달라질수 있으므로
// bind 함수를 이용해서 묶어줘야 한다.

console.log(this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();
console.clear()

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  }
}

// 클래스 안에서 함수를 선언할때 arrow function을 사용하면 this 바인딩 방지
// arrow function을 쓰면 선언될 당시에 this context를 기억한다.
class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  }
}

const counter = new Counter();
counter.increase();
// const caller = counter.increase;
const caller = counter.increase.bind(counter)
caller();


class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run()