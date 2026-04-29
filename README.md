# 진재원 202430131

👍 [리액트 공식 문서(한글)](https://ko.react.dev/)

## 2026/04/29 (Week 9)

### UI를 트리 구조로 이해하기 - Render 트리

React를 비롯한 많은 UI 라이브러리는 UI를 트리의 형태로 모델링 함. <br>
애플리케이션을 트리로 생각하면 컴포넌트 간의 관계를 이해하는 데 도움이 됨. <br>
또한 향후 성능이나 상태 관리와 같은 개념을 파악하는 데도 많은 도움이 됨. <br>

트리는 요소 사이의 관계 모델이며, UI는 이 트리 구조를 사용하여 표현됨. <br>
-> 브라우저는 HTML(DOM)과 CSS(CSSOM)을 모델링하기 위해 트리 구조 사용 <br>
-> 모바일 플랫폼에서도 뷰의 계층 구조를 나타내는 데 트리를 사용. <br>

<img src="https://ko.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.dark.png&w=1920&q=75">

브라우저와 모바일 플랫폼처럼 React도 React 앱을 구성하는 컴포넌트 간의 관계를 관리하고, 모델링하기 위해 트리 구조를 사용함. <br>

트리는 React 앱에서 데이터가 흐르는 방식과 렌더링 및 앱 크기를 최적화하는 방법을 이해하는 데 유용한 도구임. <br>

- 컴포넌트의 중요한 특징은 다른 컴포넌트들을 중첩해서 또다른 컴포넌트를 구성하는 것임.
- 컴포넌트를 중첩하면 부모 컴포넌트와 자식 컴포넌트의 개념이 생기게 됨.
- 이때 각 부모 컴포넌트도 또다른 컴포넌트의 자식이 될 수 있지만 자식 컴포넌트의 자식이 될 수는 없음.
- React 앱을 렌더링할 때, 이 관계를 Render 트리라고 하는 트리로 모델링할 수 있음.

<br>

트리는 노드로 구성되어 있으며, 각 노드는 컴포넌트를 나타냄. <br>
App, FancyText, Copyright 등은 모두 트리의 노드임. <br>
React Render 트리에서 루트 노드는 앱의 Root 컴포넌트임. <br>
이 경우 루트 컴포넌트는 App이며 React가 렌더링하는 첫 번째 컴포넌트임. <br>
트리의 각 화살표는 부모 컴포넌트에서 자식 컴포넌트를 가리킴. <br>
DOM 트리와는 달리 Render 트리는 HTML 태그 없이 React 컴포넌트로만 구성됨. <br>

<img src="https://ko.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Frender_tree.dark.png&w=1080&q=75">

## UI를 트리 구조로 이해하기 - 모듈 의존성 트리

모듈 의존성 트리는 React의 또다른 트리 구조 모델링 방법으로 모듈의 종속성을 나타냄. <br>
컴포넌트와 로직을 별도의 파일로 분리하면 컴포넌트 뿐만 아니라 함수 또는 상수를 export 할 수 있는 JS 모듈을 만들 수 있음. <br>
모듈 의존성 트리의 각 노드는 모듈이며, 가지는 해당 모듈의 import 문을 나타냄.

<br>

<img src="https://ko.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fmodule_dependency_tree.dark.png&w=1920&q=75"> <br>

## JSX에 스타일 적용하기

### 1. 일반 CSS

가장 간단하게 사용할 수 있는 방법. <br>
HTML에서 CSS를 사용하는 방법과 동일. <br>
style.css 파일을 만들어서 필요한 스타일을 정의한 후에 사용할 컴포넌트에서 import 한 후 사용함. <br>
단, 속성의 이름으로 class가 아닌 className을 사용함. <br>
익숙한 방법이기 때문에 프로젝트에 빠르게 적용할 수 있다는 장점을 가짐. <br>
컴포넌트 단위로 관리하기 어렵고, 전역 스코프 `(global)` 의 클래스 이름과 충돌 가능성이 있기 때문에 주의해야 함. <br>

```css
/* style.css */
.button {
  background: blue;
  color: white;
}
```

```jsx
import './style.css';

export default function Button() {
  return (
    <button className="button">
      Click
    <button>
  );
}
```

### 2. 인라인 스타일

HTML에서도 인라인 스타일은 유지보수의 어려움 등의 단점이 있어서 자주 사용하는 방법은 아님.
조건부 스타일에만 제한적으로 사용됨.
속성 이름은 kebab-case가 아닌 camelCase를 사용해야함.

```jsx
export default function Button() {
  return (
    <button style={{ backgroundColor: "blue", color: "white" }}>Click</button>
  );
}
```

### 3. CSS-In-JS

자바스크립트 코드 내에서 CSS를 직접 작성하여, 컴포넌트 단위로 스타일을 관리하는 방법. <br>
styled-components, emotion, JSS 등 외부 라이브러리를 사용함. <br><br>
[장점] <br>
스타일이 컴포넌트 내에 바인딩되기 때문에 관리와 유지보수가 용이함. <br>
props를 기반으로 한 동적(조건부) 스타일링 적용에 매우 편리함. <br>
고유한 클래스명을 자동으로 생성하여 스타일의 충돌을 방지함. <br>
Provider 컴포넌트를 통해 전역 테마 설정을 쉽게 적용할 수 있음. <br><br>
[단점] <br>
스타일을 문자열로 변환하여 삽입하는 과정에서 런타임 성능의 저하가 발생할 수 있음. <br>
라이브러리 추가로 인한 자바스크립트 번들 사이즈가 커짐. <br>
기존 CSS/SCSS와 다른 각 라이브러리 고유의 문법을 학습해야 함. <br>

스타일이 컴포넌트 내에 바인딩 되는 모습.
마치 Tag 선택자 처럼 사용하는 것처럼 느껴짐

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  color: white;
`;

export default function App() {
  return (
    <Button>Click<Button>
  )
}
```

### 4. CSS 프레임워크

일반적으로 프론트엔드 개발에 많이 사용하는 방법.
Tailwind CSS(클래스 단위), Bootstrap(컴포넌트 단위), bulma 등 유명한 CSS 프레임워크들이 많이 있음.
React에서 추천하는 Tailwind CSS는 클래스를 조합하여 스타일을 작성함.
빠른 개발과 디자인의 일관성을 유지할 수 있다는 장점
클래스를 조합하는 과정에서 클래스 선언이 길어지기 때문에 문서의 가독성이 떨어진다는 단점.

```jsx
export default function Button() {
  return <button className="bg-blue-500 text-white px-4 py-2">Click</button>;
}
```

### 5. CSS Module

CSS Module은 클래스명을 `_[클래스이름]_[해쉬값]` 의 형태로 자동 변환하여, 고유한 이름의 로컬 스코프(Local Scope)를 제공하는 기술. <br>
컴포넌트 기반의 프레임워크인 React나 Vue 등에서 채택하고 있는 이 기술은 스타일의 충돌을 완벽하게 방지할 뿐만 아니라 유지보수에도 유리함. <br>
컴포넌트 단위로 스타일링 한다는 것이 가장 큰 특징으로 컴포넌트의 재사용에도 유리하게 작용함. <br>

일반 CSS의 문제점 중 하나는 전역으로 선언되기 때문에 다른 컴포넌트와 충돌의 위험이 있다는 것임. <br>
그러나 CSS Module은 빌드 시 고유한 이름으로 변경되기 때문에 충돌의 위험이 전혀 없음. <br>

```
.toolBar { ... } -> [빌드] -> _toolBar_mv2tm_7
```

파일 이름의 규칙: 파일 이름은 `[컴포넌트 이름].module.css` 의 형태로 확장자는 반드시 .module.css <br><br>

#### CSS 작성:

- CSS의 내용은 일반 CSS의 작성법을 따름
- class 선택자로 스타일을 선언
- Tag 선택자를 사용하는 것은 특별한 경우가 아니라면 권장 x
- Tag 선택자는 CSS Module 빌드 시에 고유한 이름을 할당 받지 않고, 전역으로 사용되기 때문

#### class 선택자 네이밍 컨벤션:

- 일반적인 CSS는 kebab-case를 사용
- React에서는 camelCase

#### 클래스에 적용하는 법:

- Import의 변수명(로컬 식별자)은 관행적으로 style을 사용함
- JSX에서는 class 키워드 대신 className을 사용함
- class 이름은 객체를 사용할 때처럼 [변수명].[클래스명] 의 형태로 작성함.
- class 이름 전체를 중괄호로 감싸줌.

#### 관리 방법

CSS Module은 컴포넌트 단위로 CSS를 작성하여 재사용이 가능하도록 개발함. <br>
따라서 컴포넌트와 같은 디렉토리에 함께 저장하여 관리하는 것이 일반적임. <br>

---

### 이벤트에 응답하기

React에서는 JSX에 이벤트 핸들러를 추가할 수 있음. <br>
이벤트 핸들러는 클릭, 마우스 호버(hover), 폼 입력의 포커스 등 사용자와의 상호작용에 따라 유발되는 사용자 정의 함수. <br>
`<button>` 과 같은 내장 컴포넌트는 `onClick` 과 같은 내장 브라우저 이벤트만 지원함. <br>
반면 사용자 정의 컴포넌트의 경우, 이벤트 핸들러 속성에 원하는 애플리케이션별 이름을 지정할 수도 있음. <br>

### 이벤트 핸들러 함수 전달

이벤트 핸들러 함수는 "호출하는 것이 아니라 전달하는 것" <br>
함수를 전달한다는 것은 함수의 이름만 prop의 형태로 전달함. <br>

```
<button onClick={handleClick} />
```

함수를 호출한다는 것은 함수의 이름에 소괄호를 함께 사용함. <br>
호출은 함수를 직접 사용한다는 것을 의미하기 때문에 잘못된 사용법. <br>

```
<button onClick={handleClick()} />
```

첫번째 예시에서 핸들러 함수 이름만 prop으로 onClick 이벤트에 전달. <br>
React는 이 내용을 기억하고 사용자가 버튼을 클릭하였을 때만 함수를 호출하도록 함. <br>

반면, 두번째 예시에서는 함수를 직접 호출하고 있기 때문에 렌더링 과정 중 클릭이 없었어도 함수를 실행하게 됨. <br>
JSX는 중괄호 내의 자바스크립트를 즉시 실행하기 때문. <br>

인라인으로 코드를 작성할 때도 형태는 조금 차이가 있으나 동일한 문제 발생. <br>
다음과 같이 인라인으로 alert() 함수를 직접 호출하면 컴포넌트가 렌더링 될 때마다 실행. <br>

```
<button onClick={ alert('You Clicked me!')} />
```

만일 이벤트 핸들러를 인라인으로 정의하고 싶다면, 다음과 같이 익명 함수 사용. <br>

```
<button onClick={() => alert('You Clicked me!')} />
```

## 2026/04/15 (Week 7)

### 리스트 렌더링(이어서)

```jsx
// 배열 데이터 구조화
const heroes = [
  {
  id: 0,
  casting: '스파이더맨',
  name: '피터 파커',
  },
  {
    id: 1,
    casting: '아이언맨',
    name: '토니 스타크'
  },
  ...
];
```

만일 이름이 '클라크 켄트'인 배우가 어떤 역할을 했는지 표시하고 싶다고 가정. <br>
JavaScript의 `filter()` 함수를 사용하여 해당하는 배우의 정보만 반환할 수 있음. <br>
이 함수는 배열의 항목을 받아 조건을 테스트한 후 true 혹은 false를 반환함. <br>
테스트에 통과한 항목, 즉, true인 항목만 있는 새로운 배열을 반환함. <br>

```jsx
(hero) => heroes.name === "클라크 켄트";

const filterTests = heroes.filter((hero) => {
  hero.name === "클라크 켄트";
});

const listHeroes = filterTests.map((hero) => {
  <li>
    <p>
      {hero.name}의 배역은 {hero.casting} 입니다.
    </p>
  </li>;
});
```

화살표 함수는 묵시적으로 => 바로 뒤에 있는 식을 반환하기 때문에 return문이 필요하지 않음.

```jsx
const listItems = chemists.map((person) => {
  <li>...</li>; // 묵시적 변환
});
```

하지만 => 뒤에 `{}` 중괄호가 오는 경우 return문을 명시적으로 작성해야 함. 그렇지 않으면 아무것도 반환되지 않음. <br>

```jsx
const listItems = chemists.map((person) => {
  return <li>...</li>;
});
```

`=>{}` 를 표현하는 화살표 함수를 "block body"를 가지고 있다고 말함. <br>
이 함수를 사용하면 한 줄 이상의 코드를 작성할 수 있지만 return문을 반드시 작성해야함 <br>

key prop은 배열 중 어떤 자식 요소인지 확인할 수 있도록 함. <br>

key prop은 배열의 자식 요소가 정렬 등으로 인해 이동, 삽입, 혹은 삭제되어도 각 자식 요소를 구별하는데 중요하게 사용됨. <br>

key prop을 잘 선택하면 데이터에 무슨 일이 일어났는지 추론하고, DOM 트리를 올바르게 업데이트 하는데 도움이 됨. <br>

key prop은 즉석에서 생성하는 것이 아니고 배열 안에 포함 되어 있어야 함.

```jsx
export const heroes = [
  {
    id: 0, // jsx에서 key로 사용됨.
    casting: "스파이더맨",
    name: "피터 파커",
    power: 3,
  },
  ...
];
```

```jsx
export default function MovieHeroes() {
  const filterTests = heroes.filter((hero) => hero.power === 5);

  const listHeroes = filterTests.map((hero) => (
    <li key={hero.id}>
      <p>
        {hero.name}의 배역은 {hero.casting} 입니다.
      </p>
    </li>
  ));

  return (
    <section>
      <h1>영화 속 영웅들</h1>
      <ul>{listHeroes}</ul>
    </section>
  );
}
```

### 프래그먼트와 key prop

각 항목이 하나가 아닌 여러 개의 DOM 노드를 렌더링 해야 하는 경우? 즉, 반환해야 하는 태그가 여러 개가 있을 경우? <br>

`<>..</>` (프래그먼트) 구문 사용 or `<div></div>` 태그 등으로 묶어서 하나의 노드로 만들어 반환해야 함. <br>

하지만 프래그먼트 구문으로는 key를 전달할 수 없음. <br>
이런 경우 `<div></div>` 등의 태그로 그룹화하거나, React에서 제공하는 `<Fragment>` 컴포넌트를 사용해야 함. <br> 다만 `<Fragment>` 컴포넌트를 사용하는 경우는 잘 없음.

### 컴포넌트를 순수하게 유지하기

what is 순수함수? <br>
==> 같은 입력 값을 넣으면 항상 같은 결과를 반환하는 함수 <br>
==> 외부의 상태를 변경하지 않는 즉, 사이드 이펙트(side effect)가 없는 함수

```js
function add(a, b) {
  return a + b;
}
```

```js
let count = 0;

function increase() {
  count++;
}
```

컴포넌트를 만들 때도 순수 함수로 만들면 사이드 이펙트가 없는 순수한 컴포넌트가 완성됨. <br>
코드베이스의 규모가 점점 커지더라도 예상밖의 동작이나 당황스러운 버그를 피할 수 있음. <br>

컴퓨터 과학, 함수형 프로그래밍에서 순수 함수의 특징 <br>

1. 자신의 일에만 집중하고, 호출되기 전에 존재했던 어떤 객체나 변수도 변경하지 않음. <br>
2. 같은 입력이 주어졌다면 순수 함수는 항상 같은 결과를 반환함. <br>

```js
function double(number) {
  return 2 * number;
}
```

React에서 컴포넌트는 함수로 정의하기 때문에, 순수함수로 작성된 컴포넌트는 순수 컴포넌트라고 할 수 있음. <br>

### 지역 변경(local mutation)

```jsx
// 잘못된 예제
let guest = 0;

function Cup() {
  // 나쁜 지점: 이미 존재했던 변수를 변경하고 있습니다!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

```jsx
// 정상 예제
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

잘못된 예제의 문제점은 컴포넌트가 외부에 있는 기존 변수를 렌더링 중에 변경했다는 것임. <br>
이런 사이드 이펙트를 "변경(Mutation)"라고 부르기도 함. Mutation은 돌연변이라는 뜻도 가지고 있음. <br>
순수 함수는 함수 스코프 밖의 변수나 호출 전에 생성된 객체를 변경하지 않음. <br>
그러나, 렌더링하는 동안에 생성된 변수와 객체를 변경하는 것은 전혀 문제가 되지 않음. <br>

```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  const cups = [];
  for (let i = 0; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
```

## 2026/04/08 (Week 6)

### 조건부 렌더링

컴포넌트는 조건에 따라 다른 항목을 표시해야 하는 경우가 많음. <br><br>
React는 if문, 삼항 연산자와 같은 자바스크립트 문법을 사용하여 조건부로 JSX 렌더링 가능.

```jsx
return <li>{isPacked ? <del>{name + "✅"}</del> : name}</li>;
```

---

if문이나 삼항 연산자를 사용하는 방법 외에 일반적으로 사용하는 또 다른 방법은 자바스크립트 논리 연산자 AND("&&")를 사용하는 것임. <br><br>
React 컴포넌트에서는 조건이 참일 때 일부 JSX를 렌더링하고, 거짓이면 아무것도 렌더링하지 않는 경우가 많이 있음.

```html
<li>{name} {isPacked && "✅"}</li>
```

자바스크립트 && 표현식은 왼쪽(조건)이 true이면 오른쪽(체크 표시)의 값을 반환하지만<br>
조건이 false이면 전체 표현 식이 false가 됨. <br><br>
React는 false를 null 또는 undefined처럼 JSX 트리의 “구멍”으로 간주하고 그 자리에 아무것도 렌더링하지 않음.<br>

---

&&의 왼쪽에 숫자 X <br>
-> 자바스크립트는 조건을 테스트하기 위해 표현식 왼쪽을 자동으로 bool로 변환하는데 왼쪽이 숫자 0이면 전체 식이 (0)을 얻게 되고, React는 0을 렌더링하게 됨.

```jsx
// messageCount가 0이라면 0 자체를 렌더링
messageCount && <p>New messages</p>;
```

```jsx
// 정상 코드(&&의 왼쪽을 bool로 작성)
messageCount > 0 && <p>New messages</p>;

// 정상 코드(bool로 작성하지 않고 해결)
<p>New messages</p> && messageCount;
```

---

### 변수에 조건부로 JSX 할당하기

```jsx
let itemContent = name;

if (isPacked) {
  itemContent = name + " ✅";
}

return <li>{itemContent}</li>;
```

---

### 리스트 렌더링

컴포넌트에서 여러 개의 데이터를 같은 형식으로 출력해야 하는 경우가 있음. <br>
이럴 때는 자바스크립트의 배열관련 함수를 사용해서, 배열을 컴포넌트의 기능에 맞게 렌더링 할 수 있음. <br>

```jsx
filter();
map();
```

---

다음과 같은 리스트가 있다고 가정.

```html
<ul>
  <li>스파이더맨: 피터 파커</li>
  <li>아이언맨: 토니 스파크</li>
  <li>배트맨: 브루스 웨인</li>
  <li>슈퍼맨: 클라크 켄트</li>
  <li>헐크: 로버트 브루스 배너</li>
</ul>
```

이 리스트 항목의 특이한 점은 콘텐츠, 즉 데이터임. <br><br>
댓글 목록이나 이미지 갤러리 등의 인터페이스를 구축할 때 자주 사용되는 형태임. <br>
-> 이런 경우에는 컴포넌트의 목록에 있는 데이터를 각각의 객체로 표시해야 함. <br><br>
즉, 해당 데이터를 자바스크립트 배열에 저장해야, `map(), filter()` 같은 함수를 사용해서 리스트를 렌더링할 수 있음.

```jsx
const heroes = [
  "스파이더맨: 피터 파커",
  "아이언맨: 토니 스파크",
  "배트맨: 브루스 웨인",
  "슈퍼맨: 클라크 켄트",
  "헐크: 로버트 브루스 배너",
];

const listHeroes = heroes.map((hero) => <li>{hero}</li>);

return <ul>{listHeroes}</ul>;
```
