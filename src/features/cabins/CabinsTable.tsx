import { getCabins } from "@/services/apiCabins";
import Spinner from "@/ui/Spinner";
import TableSkeleton from "@/ui/TableSkeleton";
import { useQuery } from "@tanstack/react-query";

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

  return <div>CabinsTable</div>;
};

export default CabinsTable;
