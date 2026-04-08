const heroes = [
  "스파이더맨: 피터 파커",
  "아이언맨: 토니 스파크",
  "배트맨: 브루스 웨인",
  "슈퍼맨: 클라크 켄트",
  "헐크: 로버트 브루스 배너",
];

export default function MovieHeroes() {
  const listHeroes = heroes.map((hero) => <li>{hero}</li>);
  return (
    <section>
      <h1>영화 속 영웅들</h1>
      <ul>{listHeroes}</ul>
    </section>
  );
}
