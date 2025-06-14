import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

export default function Classes() {
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
      <div className="classes" id="classes">
        <div className="container-fluid">
          <div className="classesInsider row">
            <div className="CHeader col-12">
              <h2>our famous classes</h2>
            </div>
            <div className="C-content col-12 row">
              <div className="classCard fromBottom  row col-lg-3 col-10">
                <div className="img col-12">
                  <img src="/images/cardio.jpg" loading="lazy" />
                </div>
                <div className="content col-12">
                  <h4>cardio</h4>
                  <h5>
                    wanna lose some weight ? we give professional training with
                    the elite to reach your goal
                  </h5>
                  <button className="classBtn">check the class</button>
                </div>
              </div>
              <div className="classCard fromBottom row col-lg-3 col-10">
                <div className="img col-12">
                  <img src="/images/powerlifting.jpg" loading="lazy" />
                </div>
                <div className="content col-12">
                  <h4>powerlifting</h4>
                  <h5>
                    we know you want to burn memories not calories.. we got it
                  </h5>
                  <button className="classBtn">check the class</button>
                </div>
              </div>
              <div className="classCard fromBottom row col-lg-3 col-10">
                <div className="img col-12">
                  <img src="/images/boxing.jpg" loading="lazy" />
                </div>
                <div className="content col-12">
                  <h4>boxing</h4>
                  <h5>
                    we have ex professional players to help you take big steps
                    in your boxing career
                  </h5>
                  <button className="classBtn">check the class</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
