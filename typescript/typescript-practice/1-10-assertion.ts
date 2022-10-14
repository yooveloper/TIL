/**
 * Type Assertions 💩
 */

function jsStrFunc(): any {
  return "hello";
}

const result = jsStrFunc();
result.length; // 함수에서 문자열을 return 하고 있지만 any타입이라 length를 사용 못함.
console.log((result as string).length); // as라는 키워드로 타입 캐스팅 해서 사용 가능
console.log((<string>result).length); // 제네릭으로 타입 캐스팅 해서 사용 가능

const wrong: any = 5;
console.log((wrong as Array<number>).push(1)); // error

function findNumbers(): number[] | undefined {
  return undefined;
}

const numbers = findNumbers();
numbers!.push(2); // ! 를 붙히면 무조건 null이 아니다 라는 뜻
