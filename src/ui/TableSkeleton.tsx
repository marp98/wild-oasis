const TableSkeleton = () => {
  return (
    <div className="animate-pulse flex space-x-4 mt-5">
      <div className="flex-1 space-y-3 py-1">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default TableSkeleton;
