import { getCabins } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";

const CabinsTable = () => {
  const x = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  console.log(x);

  return <div>CabinsTable</div>;
};

export default CabinsTable;
