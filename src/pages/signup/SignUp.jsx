import { useNavigate, Link } from "react-router-dom";
import "../login/login.css";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const [error, setError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [topNurseDetails, setTopNursesDetails] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.age
    ) {
      setError("All fields are required");
      return;
    }
    if (formData.password.length <= 7) {
      setError("Password length should be atleast 8 ");
      return;
    }

    try {
      const response = await axios.post(
        "http://aspark-care-buddy.ap-south-1.elasticbeanstalk.com/api/user/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          age: formData.age,
        }
      );
      console.log("SignUp successful:", response);
      setSignUpSuccess(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
      });
    } catch (error) {
      console.log(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
      setSignUpSuccess(false);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginContainerWrapper">
        {/* {signUpSuccess ? (
          <p className="success">Signup successful!</p>
        ) : (
          <p className="success">Signup failed!</p>
        )} */}
        <div className="welcomeTextLogin">
          <h2>We are here for you!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eaque iusto cupiditate earum ipsum nesciunt?
          </p>
        </div>
        <main className="form-signin w-100 m-auto loginForm">
          <form onSubmit={handleSignUp}>
            <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

            <div className="form-floating">
              <input
                type="text"
                name="name"
                value={formData.name}
                className="form-control"
                placeholder="Name"
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInput">First Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                name="email"
                value={formData.email}
                className="form-control"
                placeholder="name@example.com"
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="password"
                value={formData.password}
                id="floatingPassword"
                className="form-control"
                placeholder="Password"
                onChange={handleInputChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                name="age"
                id="floatingAge"
                value={formData.age}
                className="form-control"
                placeholder="Age"
                onChange={handleInputChange}
              />
              <label htmlFor="floatingAge">Age</label>
            </div>
            <p>
              Already a User?<Link to="/login">Login</Link>
            </p>
            {/* Display error message if there's an error */}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign Up
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
export default SignUp;
