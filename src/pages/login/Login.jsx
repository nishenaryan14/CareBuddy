import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
function Login() {
  const { login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (!enteredEmail || !enteredPassword) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "//aspark-care-buddy.ap-south-1.elasticbeanstalk.com/api/user/login",
        {
          email: enteredEmail,
          password: enteredPassword,
        }
      );
      const userData = {
        id: response.data.id,
        firstName: response.data.firstName,
      };
      const token = response.data.token;
      login(userData, token);
      console.log("Login successful:", response.data);

      setError("");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginContainerWrapper">
        <div className="welcomeTextLogin">
          <h2>Welcome Back!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eaque iusto cupiditate earum ipsum nesciunt?
          </p>
        </div>
        <main className="form-signin w-100 m-auto loginForm">
          <form onSubmit={handleLogin}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                ref={emailRef}
                value={email}
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                ref={passwordRef}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <p>
              New User?<Link to="/signup">SignUp</Link>
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
export default Login;
