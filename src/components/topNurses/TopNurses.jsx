import { useEffect, useState } from "react";
import "./topNurses.css";
import axios from "axios";
import { NurseCard } from "../nurseCard/NurseCard";
function TopNurses() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isNurse, setIsNurse] = useState(false);
  const [topNurseDetails, setTopNursesDetails] = useState([]);
  useEffect(() => {
    const getTopNurses = async () => {
      try {
        const response = await axios.get(
          "http://aspark-care-buddy.ap-south-1.elasticbeanstalk.com/api/user/get-top-nurses/560037"
        );
        setIsLoading(false);
        setIsNurse(true);
        const fetchedTopNursesDetails = response.data;

        console.log(fetchedTopNursesDetails);
        setTopNursesDetails(fetchedTopNursesDetails);
      } catch (error) {
        console.error("Error fetching top nurses:", error.message);
        setError(error.message);
      }
    };

    getTopNurses();
  }, []);
  return (
    <>
      <h2 className="topNursesHeading">Top Nurses in your Area</h2>
      <div className="topNursesParent">
        <div className="topNursesDiv">
          {topNurseDetails?.map((nurse, index) => (
            <NurseCard
              nurse={nurse}
              isLoading={isLoading}
              isNurse={isNurse}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default TopNurses;
