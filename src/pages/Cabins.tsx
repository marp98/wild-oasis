import { Button } from "@/components/ui/button";
import CabinsTable from "@/features/cabins/CabinsTable";
import { CreateCabinForm } from "@/features/cabins/CreateCabinForm";
import { useState } from "react";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">All Cabins</h1>
        <p>Filter / Sort</p>
      </div>
      <CabinsTable />
      <div className="block my-3">
        <Button
          className="w-full bg-indigo-700 hover:bg-indigo-800"
          onClick={() => setShowForm((show) => !show)}
        >
          Add new cabin
        </Button>
      </div>
      {showForm && <CreateCabinForm />}
    </div>
  );
};

export default Cabins;
