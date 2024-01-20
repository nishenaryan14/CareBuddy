import "./carousel.css";

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide carouselBox">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner carouselImgBox">
        <div className="carousel-item active ">
          <img
            src="https://images.pexels.com/photos/4046996/pexels-photo-4046996.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="d-block w-100 carouselImg"
            alt="..."
          />
        </div>
        <div className="carousel-item ">
          <img
            src="https://images.pexels.com/photos/7551614/pexels-photo-7551614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block w-100 carouselImg"
            alt="..."
          />
        </div>
        <div className="carousel-item ">
          <img
            src="https://images.pexels.com/photos/3875197/pexels-photo-3875197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block w-100 carouselImg"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
