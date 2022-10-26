
// 1. default 로 export 하면 import 하는쪽에서 이름 아무렇게나 지정 가능
// 2. 하나의 파일 안에서 default를 두번 쓸 수는 없다
// 3. 함수 뿐 아니라 변수도 export 가능
export default function add(a,b) {
  return a + b;
}

export function print() { console.log('print')}

export const number = 10;