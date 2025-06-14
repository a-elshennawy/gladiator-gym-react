import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

export default function Give() {
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
      <div className="give">
        <div className="container-fluid">
          <div className="giveInsider row">
            <div className="giveHeader col-12">
              <h2>what we are giving you ?</h2>
            </div>
            <div className="giveContent col-12 row">
              <div className="item fromleft col-lg-2 col-5">
                <img src="/images/247.jpg" loading="lazy" />
                <h3>
                  we are here for you <span>24/7</span> <br />
                  workout <span>whenever</span> you want
                </h3>
              </div>
              <div className="item fromleft col-lg-2 col-5">
                <img src="/images/area.jpg" loading="lazy" />
                <h3>
                  wide areas <br /> make your workout <span>comfortable</span>
                </h3>
              </div>
              <div className="item fromBottom col-lg-2 col-5">
                <img src="/images/programs.jpg" loading="lazy" />
                <h3>
                  many programs <br />
                  it will <span>suit</span> you
                </h3>
              </div>
              <div className="item fromRight col-lg-2 col-5">
                <img src="/images/space.jpg" loading="lazy" />
                <h3>
                  special <span>spaces</span> <br />
                  for you to <span>discover</span>
                </h3>
              </div>
              <div className="item fromRight col-lg-2 col-5">
                <img src="/images/support.jpg" loading="lazy" />
                <h3>
                  <span>support</span> <br />
                  makes it <span>easier</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
