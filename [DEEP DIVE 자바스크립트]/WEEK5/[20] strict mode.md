# 20장 strict mode

## 20.1 strict mode 란 ?

```jsx
**[ 예제 20-01 ]

function foo() {
	x = 10;
}
foo();

console.log(x); // ?** 
```

foo 함수 스코프에도 x 변수 선언이 없고 전역 스코프에도 없음에도 자바스크립트 엔진이 그놈의 암묵적 전역이란걸로 또 전역 객체에 x 프로퍼티를 동적으로 생성한다고 한다.

이런 거지같은 상황을 방지하기 위해 es5부터 strict mode(엄격 모드) 를 지원하게 되었다.

## 20.2 strict mode 적용

strict mode 를 적용하려면 전역의 선두에 ‘use strict’; 를 적는다

```jsx
'use strict';

function foo() {
	x = 10; // ReferenceError 
}
foo();
```

**strict mode 는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는것이 바람직하다**