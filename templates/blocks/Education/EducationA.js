

export default function EducationA() {
  const { educations } = useEducationStore();
  return (
    <div>
      <h1>Education</h1>
      <div className="grid gap-4">
        {educations.map((education) => (
          <div key={education.id}>
            <h3>{education.name}</h3>
            <p>{education.details}</p>
            <p>
              {education.startDate} - {education.endDate}
            </p>
            <p>CGPA: {education.cgpa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


