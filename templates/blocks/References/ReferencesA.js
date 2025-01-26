

const ReferencesA = () => {
  
  return(
    <div>
      <h1>{data.references.heading}</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.references.items.map((x) => isItemVisible(x) && ReferenceItem(x))}
      </div>
    </div>
  ) ;
};

export default memo(ReferencesA);
