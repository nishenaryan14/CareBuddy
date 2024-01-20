import Carousel from "../../components/carousel/Carousel";
import Navbar from "../../components/navbar/Navbar";
import image1 from "../../assets/images/nurse1.jpeg";
import image2 from "../../assets/images/nurse2.jpeg";
import { SiAccenture } from "react-icons/si";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import TopNurses from "../../components/topNurses/TopNurses";
import { HomeCarousel } from "../../components/homeParallax/HomeParallax";
import GetNews from "../../components/getNews/GetNews";
import Footer from "../../components/footer/Footer";
function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <>
      <Navbar />
      <div className="homeContent">
        {user ? (
          <div className="userLoggedIn">
            <TopNurses />
            <GetNews />
          </div>
        ) : (
          <>
            <HomeCarousel />
            <div className="poster">
              <div className="posterText">
                <h2>CareBuddy</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum tempore temporibus tenetur labore vitae, nostrum
                  suscipit officia hic aliquam quam!
                </p>
                <div className="buttons">
                  <button className="btn" onClick={() => handleClick("login")}>
                    Login
                  </button>
                  <button
                    className="btn SignUp"
                    onClick={() => handleClick("signup")}
                  >
                    SignUp
                  </button>
                </div>
              </div>
              <img src={image1} alt="" />
            </div>
            <div className="poster blue">
              <img src={image2} alt="" />
              <div className="posterText">
                <h2>Promoting health & wellness at the comfort of your home</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum tempore temporibus tenetur labore vitae, nostrum
                  suscipit officia hic aliquam quam!
                </p>
                <div className="buttons">
                  <button className="btn">+91234523525</button>
                </div>
              </div>
            </div>
            <div className="poster">
              <div className="serviceListBox">
                <h2>Service We Offer:</h2>
                <div className="serviceList">
                  <ul>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Medical Care for Seniors at-home</li>
                    </div>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Nursing Attenders at-home</li>
                    </div>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Hospital Attenders - 5,10 & 24 Hours</li>
                    </div>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Patient Care for Elderly</li>
                    </div>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Dementia Care for Elders at-home</li>
                    </div>
                  </ul>
                  <ul>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Medical Care for Seniors at-home</li>
                    </div>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Nursing Attenders at-home</li>
                    </div>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Hospital Attenders - 5,10 & 24 Hours</li>
                    </div>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Patient Care for Elderly</li>
                    </div>
                    <div className="listDiv">
                      <SiAccenture />
                      <li>Dementia Care for Elders at-home</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <Carousel />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}
export default Home;
