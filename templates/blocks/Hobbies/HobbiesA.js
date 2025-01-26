
export default function Hobbies() {
  return (
    <div>
      <h1>{data.hobbies.heading}</h1>
      <div className="grid gap-2">
        {data.hobbies.items.map((x) => isItemVisible(x) && HobbyA(x))}
      </div>
    </div>
  );
};

