export default function Example() {
  const data = [
    { id: 123, name: "fjdkjf" },
    { id: 3904, name: "fjdkjf" },
    { id: 45548, name: "fjdkjf" },
  ];

  return (
    <div>
      {data.find((v) => v.id === 89374389) ? "hello" : null}
      
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
