
export default function Work() {
  const { experiences } = useExperienceStore();
  return (
    <div>
      <h1>Experience</h1>
      <div className="grid gap-4">
        {experiences.map((experience) => (
          <div key={experience.id}>
            <h3>{experience.name}</h3>
            <p>{experience.details}</p>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
            <button onClick={() => {
              setEditId(experience.id);
              setName(experience.name);
              setDetails(experience.details);
              setStartDate(experience.startDate);
              setEndDate(experience.endDate);
            }}>Edit</button>
            <button onClick={() => deleteExperience(experience.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};


