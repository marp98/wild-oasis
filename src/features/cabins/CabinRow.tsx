import { deleteCabin } from "@/services/apiCabins";
import { formatCurrency } from "@/utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

interface Cabin {
  id: string;
  name: string;
  max_capacity: number;
  image: string;
  regular_price: number;
  discount: number;
}

interface Props {
  cabin: Cabin;
}

const CabinRow = ({ cabin }: Props) => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => toast.error("Cabin could not be deleted"),
  });

  return (
    <tr key={cabin.id}>
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
        <button
          disabled={isDeleting}
          onClick={() => mutate(cabin.id)}
          className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CabinRow;
