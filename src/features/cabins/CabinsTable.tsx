import { getCabins } from "@/services/apiCabins";
import TableSkeleton from "@/ui/TableSkeleton";
import { useQuery } from "@tanstack/react-query";
import { formatCurrency } from "@/utils/helpers";

const CabinsTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
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
            {cabins?.map((cabin, idx) => (
              <tr key={idx}>
                <td className="py-3 px-6 whitespace-nowrap">
                  <img
                    src={cabin.image}
                    className="block w-16 aspect-[3/2] object-cover object-center transform scale-150 translate-x-[-0.5rem]"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800 font-mono">
                  {cabin.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Fits up to {cabin.max_capacity} guests.
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-mono text-gray-800">
                  {formatCurrency(cabin.regular_price)}
                </td>
                {cabin.discount ? (
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-green-800">
                    {formatCurrency(cabin.discount)}
                  </td>
                ) : (
                  <span>&mdash;</span>
                )}
                <td className="text-right px-6 whitespace-nowrap">
                  <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CabinsTable;
