import NameCard from "./NameCard";

export default function SpreadComp() {
  const userData = {
    id: 1,
    name: "Tom",
    age: 25,
    job: "developer",
    location: "seoul",
  };
  const title = "SpreadComp 컴포넌트";

  return (
    <>
      <NameCard title={title} {...userData} />
    </>
  );
}
