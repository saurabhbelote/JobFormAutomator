const TemplateCard = ({ name, imgSrc }) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <img
        src={imgSrc}
        alt={`${name} Template`}
        className="w-full sm:w-80 sm:h-96 h-56 object-cover rounded"  // Image is responsive
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">{name}</h3>
    </div>
  );
};

export default TemplateCard;
