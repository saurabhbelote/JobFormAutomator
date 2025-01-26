
export default function Skills () {
  return(
    <div>
      <h1>{data.skills.heading}</h1>
      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
        {data.skills.items.map((x) => isItemVisible(x) && SkillItem(x))}
      </div>
    </div>
  );
};

