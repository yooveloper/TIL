# DOM

```jsx
**[ 용어 정리 ]

1. DOM
- Document Object Model => 쉽게 말하면 문서 객체 모델
- html 문서의 <body> 같은 태그들을 JS가 이용할 수 있는 객체로 만든것. 뒤에 model 이 붙었으니
그 객체를 인식하는 방식을 의미, 즉 DOM이란 웹 브라우저가 HTML 페이지를 인식하는 방식

2. Tree 구조
- 이름에서 알 수 있듯이 나무를 형상화한 자료구조라고 생각하면 됨.
나무는 땅(뿌리부터) 하늘로 솟아나가지만 tree 자료구조는 역으로 위(뿌리)에서 아래(잎)으로 뻗어나가는 구조임
tree의 가장위쪽 시작점인 root node에서 아래로 퍼져나감

3. Node
- Node는 DOM 계층구조에 속한 객체의 어떤 타입이든 가리킬 수 있는 이름.
Document 노드
element 노드
attribute 노드
text 노드 등등이 있다.**

```

DOM은 HTML 문서의 계층적 구조와 정보를 표현하여 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조다.

## HTML 요소와 노드 객체

html 요소는 html 문서를 구성하는 개별적인 요소를 의미한다.

![다운로드.png](DOM%20b6d2e53473634c23a108221470c3cc4c/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png)

html 요소는 렌더링 엔진에 의해 파싱되어 DOM 을 구성하는 요소 노드 객체로 변환된다.

![다운로드 (1).png](<DOM%20b6d2e53473634c23a108221470c3cc4c/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3_(1).png>)

**노드 객체로 구성된 트리 자료구조를 DOM 이라 한다.**

### 노드 객체의 상속 구조

DOM 은 DOM을 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조이다.

DOM을 구성하는 노드 객체는 브라우저 환경에서 제공하는 호스트 객체다.

노드 객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖는다.

노드 객체의 상속 구조는 다음과 같다.

![다운로드 (2).png](<DOM%20b6d2e53473634c23a108221470c3cc4c/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3_(2).png>)

노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다.

예를들어 input 요소 노드 객체를 보자, input 요소 노드 객체는 HTMLInputElement, HTMLElement,

Element,Node,EventTarget, Object의 prototype에 바인딩되어 있는 프로토타입 객체를 상속받는다.

즉 input 요소 노드 객체는 프로토타입 체인에 있는 모든 프로토타입의 프로퍼티나 메서드를 상속 받아 사용할 수 있다.

![다운로드 (3).png](<DOM%20b6d2e53473634c23a108221470c3cc4c/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3_(3).png>)

배열이 객체인 동시에 배열인 것처럼 input 요소 노드 객체도 다음과 같이 다양한 특성을 갖는 객체이며,

이러한 특성을 나타내는 기능들을 상속을 통해 제공받는다.

| input 요소 노드 객체의 특성                                                | 프토토타입을 제공하는 객체 |
| -------------------------------------------------------------------------- | -------------------------- |
| 객체                                                                       | Object                     |
| 이벤트를 발생시키는 객체                                                   | EventTarget                |
| 트리 자료구조의 노드 객체                                                  | Node                       |
| 브라우저가 렌더링할 수 있는 웹 문서의 요소(HTML, XML, SVG)를 표현하는 객체 | Element                    |
| 웹 문서의 요소 중에서 HTML 요소를 표현하는 객체                            | HTMLElement                |
| HTML 요소 중에서 input 요소를 표현하는 객체                                | HTMLInputElement           |
|                                                                            |                            |

```
**정리하자면 DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론 노드 객체의 종류, 즉 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 DOM API로 제공한다. 이 DOM API를 통해 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.**
```

## 요소 노드 취득

html의 구조나 내용 또는 스타일 등을 동적으로 바꾸려면 먼저 요소 노드를 취득해야 한다.

### id를 통한 요소 노드 취득

Document.prototype.getElementById 메서드는 Document.prototype의 프로퍼티다.

인수로 전달한 id 어트리뷰트 값을 갖는 하나의 요소 노드를 탐색하여 반환하다.

id값은 html 문서 내에서 유일한 값이어야 하며, class 어트리뷰트와는 달리 공백 문자로 구분하여 여러개의 값을 가질수 없다.

단 html 문서 내에 중복된 id 값을 갖는 html 요소가 여러개 존재하더라도 에러를 발생하지 않으므로

중복해서 id값을 작성하지 않도록 주의, 만약 문서 전체에 id값을 갖는 요소가 없을 경우 null을 반환한다.

```jsx
<html>
  <body>
    <div id="nav">
      <div class="logo"></div>
      <div class="menu-wrapper">
        <div class="menu"></div>
        <div class="menu"></div>
        <div class="menu"></div>
        <div class="profile-photo"></div>
      </div>
    </div>
    <div id="news-contents">
      <div class="news-content-wrapper">
        <div class="news-picture"></div>
        <div class="news-title"></div>
        <div class="news-description"></div>
      </div>
    </div>
    <div id="footer"></div>
  </body>
</html>
```

- 문제1 : 위 코드에서 body 엘리먼트의 자식 엘리먼트는 총 몇개인가요?
  ```jsx
  정답: 3(nav, news - contents, footer);
  ```
- 문제2: 위 코드에서 id가 news-contents인 div 엘리먼트의 부모 엘리먼트는 ?

  정답 : body 엘리먼트

- 문제3: 같은 엘리먼트를 appendChild 하면 기존 엘리먼트를 복사할까?
  정답 : span은 복제되지 않고 새로운 div B로 이동한다.
  ![Untitled](DOM%20b6d2e53473634c23a108221470c3cc4c/Untitled.png)
  ```jsx
  Node.appendChild() 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 이어붙인다.
  만약 주어진 노드가 이미 문서에 존재하고 있다면 노드를 현재 위치에서 새로운 위치로 이동시킨다.
  ```

```jsx
<div class="a">
	<span></span>
</div>

<div class="b"></div>

---------------------------
const span = document.querySelector('span');
const divB = document.querySelector('.b');
divB.appendChild(span);
```

span 태그는 어떻게 될까?

- div A 안에 남는다.
- div B로 복제된다.
- div B로 이동한다.
- 노드가 복제되지 않고 이동한 이유는 ?
  - appendChild 한 엘리먼트에 매우 깊게 중첩된 하위 트리가 있는 경우 수행할 작업이 명확하지 않음.
    하위트리까지 전부 복제하는건 매우 비싼 비용임.
  - 노드를 복제하면 ID가 중복될 가능성이 존재함.
  - **DOM 은 Tree 구조이고 트리는 루트노드를 제외한 모든 노드는 단 하나의 부모만 가져야 함.**

# querySelector, querySelectorAll

배열은 index를, 객체는 key를 이용해 값을 조회할수있다. DOM은

선택자를 통해 HTML 엘리먼트의 정보를 조회할수있다.

```jsx
const oneGroup = document.querySelector(".group");
```

HTML 문서에 있는 클래스 이름이 group인 엘리먼트중 첫번째 엘리먼트를 조회 함.

만약 클래스 이름이 group인 엘리먼트가 여러개 있으면 querySelectAll 을 사용

```jsx
const allGroup = document.querySelectorAll(".group");
```

이렇게 반환된 HTML엘리먼트는 유사배열이다. 앞에서 배운거처럼 for…of 문으로 순회 가능하며

스프레드문법을 통해 간단하게 배열로 변환 가능.

# 공백 텍스트 노드

HTML 요소 안에 스페이스, 탭, 줄바꿈(개행) 등의 공백 문자는 텍스트노드를 생성한다. 이를 공백 텍스트노드라 한다.

# 자식노드 탐색

Node.prototype.childNodes

- 자식 노드를 모두 탐색하여 DOM 컬렉션 객체인 NodeList에 담아 반환. 요소노드 뿐만 아니라 텍스트 노드도 포함되어 있을수 있다.

Element.prototype.children

- 자식 노드중에서 요소(element)인 노드만 탐색하여 HTMLCollection에 담아 반환. 텍스트노드는 포함되지 않는다.

```jsx
<!DOCTYPE html>
<html lang="kr">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <ul id="animals">
            <li id="dog">Dog</li>
            <li id="cat">Cat</li>
        </ul>
    </body>
    <script>
        const $animals = document.querySelector("#animals");
        // node는 텍스트 노드도 포함되기 때문에 텍스트 노드도 포함되어 있다.
        const $nodeList = $animals.childNodes;
        // Element 프로퍼티라서 요소 노드만 포함된다.
        const $HTMLCollection = $animals.children;
        // 결과 : NodeList(5) [text, li#dog, text, li#cat, ...]
        console.log($nodeList);
        // 결과 : HTMLCollection(2) [li#dog, li#cat, ...]
        console.log($HTMLCollection);
    </script>
</html>
```

# 자식노드 존재 확인

Node.prototype.hasChildNodes 메서드를 사용.

자식 노드가 존재하면 true 아니면 false 반환, 텍스트노드를 포함하여 확인함.

```jsx
<!DOCTYPE html>
<html>
	<body>
		<ul id="fruits">
		</ul>
	</body>
	<script>
		// 노드 탐색의 기점이 되는 #fruits 요소 노드를 취득한다.
		const $fruits = document.getElementById('fruits');

		// 해당 요소에 자식노드가 존재하는지 확인한다.
		// hasChildNodes 메서드는 텍스트 노드를 포함하여 자식 노드의 존재를 확인한다.
		console.log($fruits.hasChildNodes()); // true
	</script>

</html>
```

자식 노드중에 텍스트노드가 아닌 요소노드가 존재하는지 확인하려면 children.length 또는 childElementCount 프로퍼티를 사용.

# 부모 노드 탐색

Node.prototype.parentNode

텍스트노드는 DOM 트리의 최종단 이기때문에 텍스트노드가 부모노드인 경우는 없다.

```jsx
<!DOCTYPE html>
<html lang="kr">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <ul id="animals">
            <li id="dog">Dog</li>
            <li id="cat">Cat</li>
        </ul>
    </body>
    <script>
        const $dog = document.querySelector("#dog");
        const $parent = $dog.parentNode;
        // 결과 : <ul id="animals">...</ul>
        console.log($parent);
    </script>
</html>
```

# 형제 노드 탐색

Element.prototype.previousElementSibling

Element.prototype.nextiousElementSibling

✔ previousElementSibling은 선택 노드 기준으로 이전 형제 노드이다.

✔ nextiousElementSibling은 선택 노드 기준으로 다음형제 노드이다.

```jsx
<!DOCTYPE html>
<html lang="kr">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <ul id="animals">
            <li id="pig">Pig</li>
            <li id="dog">Dog</li>
            <li id="cat">Cat</li>
        </ul>
    </body>
    <script>
        const $dog = document.querySelector("#dog");
        const $Sibling1 = $dog.previousElementSibling;
        const $Sibling2 = $dog.nextElementSibling;

        console.log($Sibling1);  // 결과 : <li id="pig>...</li>

        console.log($Sibling2);  // 결과 : <li id="cat>...</li>
    </script>
</html>
```

# 노드 정보 취득

Node.prototype.nodeType 프로퍼티 사용하면 노드 타입을 나타내는 상수를 반환.

```jsx
console.log(document.nodeType); // 9
```

![Untitled](DOM%20b6d2e53473634c23a108221470c3cc4c/Untitled%201.png)

# innerHTML

Element.prototype.innerHTML 프로퍼티는 요소 노드의 HTML마크업을 취득하거나 변경함.

```jsx
<!DOCTYPE hmtl>
<html>
	<body>
		<div id="foo">Hello<span>world!</span></div>
	</body>
	<script>
		// #foo 요소의 컨텐츠영역 내의 HTML 마크업을 문자열로 취득한다.
		console.log(document.getElementById('foo').innerHTML);
		// "Hello <span>world!</span>"
	</script>
</html>
```

요소 노드의 innerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거 되고

할당한 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.

```jsx
<!DOCTYPE hmtl>
<html>
	<body>
		<div id="foo">Hello<span>world!</span></div>
	</body>
	<script>
		// HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반환된다.
		document.getElementById('foo').innerHTML = 'Hi <span>there!</span>';
		// "Hi <span>there!</span>"
	</script>
</html>
```

innerHTML은 XSS 공격에 취약하다.

HTML5는 innerHTML 프로퍼티로 삽입된 script 요소 내의 자바스크립트 코드를 실행하지 않는다.

# 노드 생성과 추가

document.prototype.createElement 인수로 전달받은 태그명의 요소노드를 생성하여 반환한다.

```jsx
// 요소 노드 생성
const $li = document.createElement("li");
```

이렇게 생성한 요소 노드는 생성만 됐을뿐 DOM 에 추가되어있지 않은 상태이다.

```jsx
// 요소 노드 생성
const $li = document.createElement("li");

// $li 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
$fruits.appendChild($li);
```

이렇게 새롭게 생성한 요소 노드를 appendChild 를 통해 기존에 DOM에 추가.

주의할점은 기존 DOM에 새롭게 추가할때마다 리플로우와 리페인트가 발생하므로 렌더 비용을 줄이기 위해

요소들을 미리 생성하고 마지막에 기존 DOM에 append하면 리렌더 비용을 줄일수 있음

```jsx
<!DOCTYPE html>
<html>
	<body>
		<ul id="fruits"></ul>
	</body>
	<script>
		const $fruits = document.getElementById('fruits');

		// 컨테이너 요소 노드 생성
		const $container = document.createElement('div');

		['Apple', 'Banana', 'Orange'].forEach(text => {

			// 1. 요소 노드 생성
			const $li = document.createElement('li');

			// 2. 텍스트 노드 생성
			const textNode = document.createTextNode(text);

			// 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
			$li.appendChild(textNode);

			// 4. $li 요소 노드를 컨테이너 요소의 마지막 자식 노드로 추가
			$container.appendChild($li);
		});

		// 5. 컨테이너 요소 노드를 $fruits 요소 노드의 마지막 자식 노드로 추가
		$fruits.appendChild(#container);

	</script>
</html>
```

위 예제는 DOM을 한번만 변경해서 성능엔 유리하지만 불필요한 컨테이너가 DOM에 추가된다.

이러한 문제는 DocumentFragment노드를 통해 해결 가능하다.

DocumentFragment 노드는 부모 노드가 없어서 기존 DOM과는 별도로 존재한다는 특징이 있고.

DocumentFragment 노드에 자식 노드를 추가해도 DOM에는 변경이 발생하지 않고,

DocumentFragment 노드를 DOM에 추가하면 자신은 제거되고 자식 노드만 DOM에 남는다.

# 결론

```jsx
DOM은 무엇일까?

DOM  → HTML 문서를 자바스크립트가 읽을수 있게 구조화(자료구조 = TREE) 한것.

자바스크립트가 동적으로 HTML을 조작할수 있게 DOM API 형태로 각종 메서드 들을 제공함.

결국 본질로 돌아가면 브라우저와 HTML의 목적은 컨텐츠를 제공하는 문서 뷰어(viewer)로서의 역할.
```

# **끗 !!**
