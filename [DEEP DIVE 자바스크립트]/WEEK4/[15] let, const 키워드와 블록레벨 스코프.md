# 15장 let, const 키워드와 블록 레벨 스코프

# ✅ 15.1 var 키워드로 선언한 변수의 문제점

1. 변수 중복 선언 허용 

```jsx
**[ 예제 15-01 ]

var x = 1;
var y = 1;

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는것처럼 동작한다.
var x = 100;
var y; // 초기화문이 없는 변수 선언문은 무시된다.

console.log(x) // 100
consolelog(y) // 1**
```

1. 함수 레벨 스코프

 **var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.**

 따라서 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역변수가 된다.

```jsx
**[ 예제 15-02 ]

var x = 1;
// 함수가 아님 for문도 마찬가지
if(true) {
	// x는 전역변수, 이미 선언된 전역변수 x가 있으므로, x 변수는 중복 선언됨
	var x = 10;
}

console.log(x) // 10**
```

1. 변수 호이스팅

```jsx
**[ 예제 15-04 ]

console.log(foo); // undefined

foo = 123;

console.log(foo); // 123

var foo; // 이미 런타임 이전에 실행되어 있음.**
```

# ✅ 15.2  let 키워드

위와 같은 var 키워드의 단점을 보완하기 위해 es6부터 let 키워드가 추가 됨.

1. 변수 중복 선언 금지

var 키워드와 다르게 let키워드는 중복선언이 안된다.

1. 블록 레벨 스코프

 var키워드로 선언한 변수는 함수의 코드블록만을 지역 스코프로 인정하는 함수레벨 스코프를 따르지만 let 키워드로 선언한 변수는 모든 코드블록(if문,for문,while문,try/catch 문 등) 을 지역 스코프로 인정하는 블록레벨 스코프를 따른다.

```jsx
**[ 예제 15-06 ]**
```

1. 변수 호이스팅

 let 키워드로 선언한 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

```jsx
**[ 예제 15-07 ]
console.log(foo); // referenceError
let foo;**
```

선언은 똑같이 런타임 이전에 되지만, 초기화 단계는 변수 선언문에서 진행된다.

스코프 시작지점부터 초기화 시작지점까지 변수를 참조할수 없는 구간을 일시적 사각지대 (temporal dead zone) TDZ 라고 부른다.

1. 전역 객체와 let

 var 키워드로 선언한 번역변수와 함수,그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역객체 window의 프로퍼티가 된다. 전역 객체의 프로퍼티를 참조할때 window를 생략할수있다.

let 키워드로 선언한 전역변수는 전역객체의 프로퍼티가 아니다. let 전역 변수는 보이지않는 개념적인 블록 내에 존재한다. 23장 실행컨텍스트에서 알아보자.

# ✅ 15.3 const 키워드

const 키워드는 상수를 선언하기 위해 사용한다, 하지만 반드시 상수만을 위해 사용하지는 않는다.

const 키워드의 특징

1. 선언과 초기화
- const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야 한다.
- const 키워드로 선언한 변수는 let키워드와 마찬가지로 블록레벨 스코프를 가지며, 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
1. 재할당 금지
- var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.
1. 상수

const 키워드로 선언한 변수에 원시값을 할당한 경우 변수값을 변경할수없다.

변수의 상대개념인 상수는 재할당이 금지된 변수를 말한다.

상수의 이름은 대문자로 선언해 명확히하고, 여러 단어로 이뤄진 경우엔 스네이크케이스로 표현하는게 일반적

```jsx
**[ 예제 15-18 ]

const TAX_RATE = 0.1;

let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 110**
```

**const 키워드와 객체**

const 키워드로 선언된 변수에 원시 값을 할당한 경우 값을 변경할 수 없다.

하지만 const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.

변경 불가능한 값인 원시값은 재할당 없이 변경할수있는 방법이 없지만, 변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하기 때문이다.

**const 키워드는 재할당을 금지할 뿐 “불변”을 의미하지는 않는다.**

var vs let vs const

es6를 사용한다면 var는 사용하지 않는다.

재할당이 필요한 경우에 한정해 let 키워드를 사용한다.

일단 const를 사용하자.