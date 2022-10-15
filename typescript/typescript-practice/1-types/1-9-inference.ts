// 타입 추론

/**
 * Type Inference
 */

let text = "hello"; // 선언함과 동시에 문자열을 할당했기 때문에 타입스크립트가 자동으로 string으로 타입을 유추함
text = "hi";
text = true; // error

function print(message) {
  // parameter 인자는 암묵적으로 any타입을 가지게 되므로 타입을 명시하라고 경고 뜸
  console.log(message);
}

print("hello");
print(1);

function add(x: number, y: number) {
  // 자동으로 타입스크립트가 return 타입을 추론함.
  return x + y;
}

const result = add(1, 2); // result 변수 또한 자동으로 number 타입으로 추론함.
