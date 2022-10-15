// number
const num1: number = 0;
const num2: number = 0.1;
const num3: number = -1;

// string
const str: string = "hello";

// boolean
const boal1: boolean = false;
const boal2: boolean = true;

// undefined
let age: number | undefined; // union type = 또는
age = undefined;
age = 1;

function find(): number | undefined {
  return undefined;
}

// null 💩
let person: null;
let person2: string | null;

// unknown 💩
// 어떤 종류의 데이터가 담길지 알수가 없는 타입
// 가능하면 안써야 함.
let notSure: unknown;
notSure = 0;
notSure = "hello";
notSure = true;

// any 💩
let anything: any = 0;
anything = "hello";
anything = true;

// void
// 어떤 함수가 아무런 값도 리턴하지 않을때 사용
// void 는 생략 가능
// 변수에 타입으로 지정할 경우 undefined 밖에 할당 못하기때문에 쓰는 경우 없음
function print(): void {
  console.log("hello");
}

// never
// 의도적으로 절대 return 값이 없을때 사용
// throw 로 에러를 던지던지 while 문으로 끝나지않는 함수를 작성할때 등 사용
function throwError(message: string): never {
  throw new Error(message);
}

// object 💩
// 원시타입을 제외한 모든 타입을 받을수있음
// 가능하면 사용하지 않는게 좋음
let obj: object;
function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: "kim" });
acceptSomeObject([1, 4]);
