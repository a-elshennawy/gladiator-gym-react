import { PuffLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <>
      <div className="spinner">
        <PuffLoader color="#fd0000" size={60} speedMultiplier={1} />
      </div>
    </>
  );
}
