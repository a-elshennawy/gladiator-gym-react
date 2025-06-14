import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}
      >
        <PuffLoader color="#fd0000" size={60} speedMultiplier={1} />
      </div>
    );
  }
  return (
    <>
      <div className="Header fadeIn">
        <div className="container-fluid HeaderInsider">
          <div className="BGLayer">
            <img src="/images/header.jpg" alt="" />
          </div>
          <div className="txtLayer">
            <h3>
              " it's a shame for a man to grow old without seeing the beauty and
              strength of which his body is cabaple "
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
