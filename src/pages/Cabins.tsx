import { getCabins } from "@/services/apiCabins";
import { useEffect } from "react";

const Cabins = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <div>
      Cabins
      <img src="https://vuaaywhtormaxenfkvga.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" />
    </div>
  );
};

export default Cabins;
