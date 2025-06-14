import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

export default function Plans() {
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
      <div className="plans">
        <div className="container-fluid">
          <div className="plnasInsider row">
            <div className="PHeader col-12">
              <h3>many options 100% suits you</h3>
            </div>
            <div className="PContent col-12 row">
              <div className="PCard silver fromleft row col-lg-3 col-10">
                <div className="img col-6">
                  <img src="/images/silver.png" loading="lazy" />
                </div>
                <div className="CardContent col-12">
                  <h4>Silver membership</h4>
                  <h6>500EGP/ month</h6>
                  <ul>
                    <li>acess to hall A</li>
                    <li>ability to join tournaments</li>
                  </ul>
                </div>
              </div>
              <div className="PCard gold fromBottom row col-lg-3 col-10">
                <div className="img col-6">
                  <img src="/images/gold.png" loading="lazy" />
                </div>
                <div className="CardContent col-12">
                  <h4>golden membership</h4>
                  <h6>800EGP/ 2 months</h6>
                  <ul>
                    <li>acess to hall A+b</li>
                    <li>ability to join tournaments</li>
                    <li>nutrtion plan</li>
                  </ul>
                </div>
              </div>
              <div className="PCard diamond fromRight row col-lg-3 col-10">
                <div className="img col-6">
                  <img src="/images/diamond.png" loading="lazy" />
                </div>
                <div className="CardContent col-12">
                  <h4>Diamond membership</h4>
                  <h6>1000EGP/ 3 months</h6>
                  <ul>
                    <li>acess to all halls</li>
                    <li>ability to join tournaments</li>
                    <li>nutrtion plan</li>
                    <li>cardio coach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
