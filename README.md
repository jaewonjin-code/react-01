# 진재원 202430131

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
```
