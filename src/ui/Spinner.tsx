import { LoaderIcon } from "./Icons";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <LoaderIcon className="animate-spin-fast" />
    </div>
  );
};

export default Spinner;
