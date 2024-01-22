import Carousel from "../../components/carousel/Carousel";
import Navbar from "../../components/navbar/Navbar";
import image2 from "../../assets/images/nurse3.jpeg";
import image1 from "../../assets/images/nurse2.jpeg";
import { SiAccenture } from "react-icons/si";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import TopNurses from "../../components/topNurses/TopNurses";
import { HomeCarousel } from "../../components/homeParallax/HomeParallax";
import GetNews from "../../components/getNews/GetNews";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
import { Element, scroller } from "react-scroll";
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

            <Element name="section1" className="element">
              <section className="poster">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="posterText"
                >
                  <h2>CareBuddy</h2>
                  <p>
                    Welcome to CareBuddy, where compassionate care meets
                    convenience. Whether you're returning or new to our family,
                    we're here to make your experience seamless.
                  </p>
                  <div className="buttons">
                    <button
                      className="btn"
                      onClick={() => handleClick("login")}
                    >
                      Login
                    </button>
                    <button
                      className="btn SignUp"
                      onClick={() => handleClick("signup")}
                    >
                      SignUp
                    </button>
                  </div>
                </motion.div>
                <div className="imageDiv">
                  <img src={image1} alt="" />
                </div>
              </section>
            </Element>
            <Element name="section2">
              <section className="poster blue">
                <div className="imageDiv">
                  <img src={image2} alt="" />
                </div>
                <motion.div
                  className="posterText"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h2>
                    Promoting health & wellness at the comfort of your home
                  </h2>
                  <p>
                    At CareBuddy, we understand the importance of personalized
                    and compassionate care for your loved ones. We are dedicated
                    to providing top-notch home nursing services, ensuring the
                    comfort and well-being of your family members in the
                    familiar surroundings of their home
                  </p>
                  <div className="buttons">
                    <button className="btn">+91234523525</button>
                  </div>
                </motion.div>
              </section>
            </Element>
            <Element>
              <section className="poster">
                <motion.div
                  className="serviceListBox"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
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
                </motion.div>
              </section>
            </Element>
            <Carousel />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}
export default Home;
