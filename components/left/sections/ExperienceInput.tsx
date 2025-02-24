
export default function ExperienceInput() {
  return (
    
    <div id="eduForm-work" className="mb-2">
      <div className="my-2 flex flex-col">
        <input
          type="text"
          placeholder="Company Name"
          className="rounded-md w-72 h-8 mb-2"
        />
        <input
          type="text"
          placeholder="Role"
          className="rounded-md w-72 h-8 mb-2"
        />
        <span className="text-white">Start Date</span>
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          className="rounded-md w-72 h-8 mb-2"
        />
        <span className="text-white">End Date</span>
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          className="rounded-md w-72 h-8 mb-2"
        />
        <textarea
          placeholder="mention details comma separated"
          className="rounded-md w-72 h-16 mb-2"
        />
      </div>
    </div>
  );
}
