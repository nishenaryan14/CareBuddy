import "./nursecard.css";
import image1 from "../../assets/images/nurse1.jpeg";
import { Button, Skeleton } from "@mui/material";
import Divider from "@mui/material/Divider";

export const NurseCard = ({ nurse, isNurse }) => {
  return (
    <div>
      {isNurse ? (
        <div key={nurse.id} className="topNurse">
          <div className="topNurseTop">
            <div className="topNurseImg">
              {nurse.imageURL ? (
                <img src={nurse.imageURL} />
              ) : (
                <img src={image1} />
              )}
            </div>
            <div className="topNurseCardContent">
              <h4 className="topNurseName">
                {nurse.firstName}
                <span> {nurse.lastName}</span>
              </h4>
              <p className="biography">{nurse.biography}</p>
              <div className="qualification">
                <button className="qualificationBtn">Qualification</button>
              </div>
              <p className="qualifications">{nurse.qualifications}</p>
              <div className="specialities">
                {nurse.specialities.map((speciality, index) => (
                  <button key={index} className="speciality">
                    {speciality}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="topNurseBottom">
            <Button variant="contained">PhoneNo.</Button>
            <Button variant="outlined">Chat Now</Button>
            <Button variant="contained">Message</Button>
          </div>
        </div>
      ) : (
        <div className="topNurse">
          <div className="topNurseTop">
            <div className="topNurseImg">
              <Skeleton variant="rectangular" height={"100%"} width={"100%"} />
            </div>
            <div className="topNurseCardContent">
              <h4 className="topNurseName">
                {nurse.firstName}
                <span> {nurse.lastName}</span>
              </h4>
              <p className="biography">{nurse.biography}</p>
              <div className="qualification">
                <button className="qualificationBtn">Qualification</button>
              </div>
              <p className="qualifications">{nurse.qualifications}</p>
              <div className="specialities">
                {nurse.specialities.map((speciality, index) => (
                  <button key={index} className="speciality">
                    {speciality}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="topNurseBottom">
            <Button variant="contained">PhoneNo.</Button>
            <Button variant="outlined">Chat Now</Button>
            <Button variant="contained">Message</Button>
          </div>
        </div>
      )}
    </div>
  );
};
