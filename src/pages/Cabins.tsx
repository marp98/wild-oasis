import CabinsTable from "@/features/cabins/CabinsTable";

const Cabins = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">All Cabins</h1>
        <p>Filter / Sort</p>
      </div>
      <CabinsTable />
    </div>
  );
};

export default Cabins;
