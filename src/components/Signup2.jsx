export default function Signup2() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input type="text" placeholder="페이지 리로딩 x" />
      <button>Send2</button>
    </form>
  );
}
