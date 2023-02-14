const DraggableIcon = () => {
  return (
    <div className="flex gap-1 hover:cursor-grab ">
      <div className="flex flex-col gap-1">
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default DraggableIcon;
