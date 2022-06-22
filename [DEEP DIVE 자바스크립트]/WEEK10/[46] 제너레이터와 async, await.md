# 제너레이터와 async, await

제너레이터를 왜 사용할까?

- 지\***\*연 평가(Lazy evaluation) 를 이용한 성능 개선\*\***
- ```jsx
  // 일반 배열 루프
  function newArr(n) {
    let i = 1;
    const res = [];
    while (i < n) res.push(i++);
    return res;
  }

  // 제너레이터 사용
  function* newArrGen(n) {
    let i = 1;
    while (i < n) yield i++;
  }

  // 짝수 제일 앞 2놈만
  function fiveArr(iter) {
    const res = [];
    for (const item of iter) {
      if (item % 5 == 0) res.push(item);
      else if (res.length == 2) break;
    }
    return res;
  }

  console.time("");
  console.log(fiveArr(newArrGen(100000)));
  console.timeEnd("");
  ```

- 비동기 프로그래밍을 동기적 코드로 사용할수있다.

```jsx
function* gen() {
  console.log("yield 1");
  yield 1;
  console.log("yield 2");
  yield 2;
  console.log("yield 3");
  yield 3;
}

const generator = gen();

generator.next();
generator.next();
generator.next();
```

문제1

```jsx
function* genFunc() {
  let first = yield 1;
  let second = yield first + 2;
  yield first + second;
}

let generator = genFunc();

console.log(generator.next());
console.log(generator.next(4));
console.log(generator.next(5));
console.log(generator.next());
```

- 정답
  ```jsx
  { value: 1, done: false }
  { value: 6, done: false }
  { value: 9, done: false }
  { value: undefined, done: true }
  ```

제너레이터의 첫번째 next()함수에 인자를 넘겨줄수 없는 이유는 무엇일까 …?

- 첫번째 next()는 제너레이터 함수를 실행하고 첫번째 yield키워드까지 실행하고 종료된다.
  예를들어 첫번째 next(1); 을 넘겨주어도
  ```jsx
  function* gen() {
    const x = yield 1; // 이 표현식을 완성시키는게 아니고 이 지점에서 중단되기 때문에
  }
  ```

제너레이터는 어떻게 중단되었다 다시 실행했을때 중단시점부터 시작할 수 있는 것일까?

- 제너레이터 객체는 [[prototype]]의 Generator.prototype 메서드임.
- 객체 내부에는 [[GeneratorState]]가 있고 이놈은 제너레이터의 현재 상태를 나타냄

       suspended,running,close

- 제너레이터 객체 내의 [[scopes]] 슬롯 이 있는데 제너레이터 함수가 호출될 당시의 스코프 체인에 해당하는 내용을 담아둠
  next()를 호출해서 제너레이터를 실행하면 generatorState가 running으로 바뀌면서 scopes슬롯에 저장되어 있는 실행컨텍스트를 콜스택에 push 하면서 함수를 실행함, 다음 마주치는 yiled까지 코드블럭을 실행시키고 그 시점까지의 실행컨텍스트를 다시 제너레이터 객체의 scopes 슬롯에 되돌리고 {value, done} 을 담은 이터레이터 객체를 return하고 콜스택에서 pop 됨, 이짓을 계속 반복하면서 실행할때마다
  scopes슬롯에 직전 지점까지의 실행컨텍스트가 담겨 있으므로 매번 중단지점부터 실행이 가능한것

최소 한번이상 실행한 제너레이터의 상태를 초기화 할 수 있을까?

- ```jsx
  function* dumpGen() {
    let count = 0;
    while (count < 3) {
      let reset = yield (count += 1);
      if (reset === 0) {
        count = 0;
      }
    }
  }

  let iterator2 = dumpGen();

  console.log(iterator2.next());
  console.log(iterator2.next());
  console.log(iterator2.next());
  console.log(iterator2.next(0));
  console.log(iterator2.next());
  ```

## async , await

es8에서 추가된 스펙이고, 프로미스를 기반으로 동작한다

async가 앞에 붙으면 프로미스 객체를 반환한다.

### async

```jsx
async function getName() {
  return "yoo";
}

getName.then((name) => {
  console.log(name); // "yoo"
});

// 프로미스 객체를 반환하기때문의 then으로 return값을 받아서 출력

// ---------------------------------------------------------------
async function getName() {
  throw new Error("error!!!");
}

getName().catch((err) => {
  console.log(err); // Error: error!!!
});

// 함수 구문내에서 예외가 발생하면 프로미스의 catch 메서드를 써서 핸들링 가능
```

### await

async 함수 내부에서만 사용 가능

프로미스가 settled(비동기 처리가 완료된 상태)가 될 때까지 대기하다가

완료되면 promise 가 resolve한 처리 결과를 반환.

```jsx
function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName("yoo");
  console.log(result);
}

console.log("---start---");
showName();
```

```jsx
async function foo() {
	const a = await new Promise(resolve => setTimeout(()=> resolve(1), 3000));
	const b = await new Promise(resolve => setTimeout(()=> resolve(1), 2000));
	const c = await new Promise(resolve => setTimeout(()=> resolve(1), 1000));

console.log([a,b,c]); // [1,2,3];

}

foo(); // 6초 소요

각각의 프로미스 객체에서 setTimeout 시간 만큼 기다린후 promise가 setteld 될때까지 await 하기 때문에
```

```jsx
async function foo() {
  const res = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  ]);

  console.log(res);
}

foo(); // 3초소요
```

두 변수의 정수 값을 서로 바꾸시오(단 새로운 변수 선언 없이)

```jsx
int a = 1;
int b = 2;

// result

let a = 1;
let b = 2;

a = a+b
b = a-b
a = a-b

```
