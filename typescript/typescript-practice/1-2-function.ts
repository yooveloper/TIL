// Optional Parameter
// 인자에 ? 를 붙이면 전달해도되고 전달하지 않아도 되는 옵셔널 파라미터가 됨.
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}
printName("lee", "sin");
printName("kim");
printName("park", undefined);

// Default Parameter
// 함수의 인자에 초기값을 할당해주면 디폴트 메시지가 들어감
function printMessage(message: string = "default message") {
  console.log(message);
}
printMessage();

// Rest Parameter
console.log(addNumber(1, 2));
console.log(addNumber(1, 2, 3, 4));
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

function addNumber(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}
