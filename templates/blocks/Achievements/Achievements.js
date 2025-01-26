
export default function Achievement() {
  const { achievements } = useAchievementStore();
  return (
    <div>
      <h1>Awards</h1>
      <div className="grid gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.id}>
            <h3>{achievement.name}</h3>
            <p>{achievement.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
};


