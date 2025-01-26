
export default function PersonalDetails() {
  const { personalData } = usePersonalDataStore();
  return (
    <div className="text-xs grid gap-2">
      <p><strong>Name:</strong> {personalData.name}</p>
      <p><strong>Summary:</strong> {personalData.summary}</p>
      <p><strong>Phone:</strong> {personalData.phone}</p>
      <p><strong>Address:</strong> {personalData.address}</p>
      <p><strong>Email:</strong> {personalData.email}</p>
    </div>
  );
};


