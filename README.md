# 진재원 202430131

👍 [리액트 공식 문서(한글)](ko.react.dev)

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

### UI를 트리 구조로 이해하기 - Render 트리

React를 비롯한 많은 UI 라이브러리는 UI를 트리의 형태로 모델링 함. <br>
애플리케이션을 트리로 생각하면 컴포넌트 간의 관계를 이해하는 데 도움이 됨. <br>
또한 향후 성능이나 상태 관리와 같은 개념을 파악하는 데도 많은 도움이 됨. <br>

트리는 요소 사이의 관계 모델이며, UI는 이 트리 구조를 사용하여 표현됨. <br>
==> 브라우저는 HTML(DOM)과 CSS(CSSOM)을 모델링하기 위해 트리 구조 사용 <br>
==> 모바일 플랫폼에서도 뷰의 계층 구조를 나타내는 데 트리를 사용. <br>

<img src="https://ko.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.dark.png&w=1920&q=75">

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
