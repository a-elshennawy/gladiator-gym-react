export default function Events() {
  return (
    <>
      <div className="events" id="events">
        <div className="container-fluid">
          <div id="carouselExampleCaptions" className="carousel slide fadeIn">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/forearmswrestling.jpg"
                  className="d-block w-100"
                  loading="lazy"
                />
                <div className="carousel-caption">
                  <h3>forearms-wrestling Competition</h3>
                  <h5>sunday / september the 1st</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/boxingfinal.jpg"
                  className="d-block w-100"
                  loading="lazy"
                />
                <div className="carousel-caption">
                  <h3>Deadlifting Competition</h3>
                  <h5>Friday / september the 6th</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/deadlift.jpg"
                  className="d-block w-100"
                  loading="lazy"
                />
                <div className="carousel-caption">
                  <h3>local championship final</h3>
                  <h5>Friday / september the 6th 9:00 PM</h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
