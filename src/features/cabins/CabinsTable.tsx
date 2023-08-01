import { getCabins } from "@/services/apiCabins";
import TableSkeleton from "@/ui/TableSkeleton";
import { useQuery } from "@tanstack/react-query";
import CabinRow from "./CabinRow";

const CabinsTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  console.log(isLoading, cabins, error);

  if (isLoading) return <TableSkeleton />;

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-100 text-gray-800 font-semibold border-b">
            <tr>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6">CABIN</th>
              <th className="py-3 px-6">CAPACITY</th>
              <th className="py-3 px-6">PRICE</th>
              <th className="py-3 px-6">DISCOUNT</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y bg-gray-50">
            {cabins?.map((cabin) => (
              <CabinRow cabin={cabin} key={cabin.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CabinsTable;
