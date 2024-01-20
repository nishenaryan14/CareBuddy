import { useEffect } from "react";
import "./homeparallax.css";
export const HomeCarousel = () => {
  useEffect(() => {
    const parallaxImage = document.getElementById("parallaxImage");

    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;

      parallaxImage.style.transform =
        "translate3d(0, " + -scrollPosition * 0.4 + "px, 0)";
    });
  }, []);
  return (
    <div className="parallaxContainer">
      <img src="" alt="" id="parallaxImage" className="parallaxImg" />
      <div className="overlay"></div>
      <div className="parallaxText">
        <p className="parallaxTextHeading">
          Empowering Health
          <span className="parallaxTextDark">, Elevating Care</span>
        </p>
        <p className="parallaxTextContent">
          Bringing Nurses to Your Doorstep for Compassionate and Personalized
          Home Healthcare
        </p>
      </div>
    </div>
  );
};
