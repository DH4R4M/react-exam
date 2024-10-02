import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchapi } from "../Redux/Login/action";
import Swal from "sweetalert2";
import "../assets/Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.loginreducer);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.email || !state.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email and Password are required!",
      });
      return;
    }

    dispatch(fetchapi(state));
  };

  useEffect(() => {
    if (data && !isError && !isLoading) {
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "Login Successful!",
      });
      navigate("/home");
    } else if (isError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login failed, please check your credentials!",
      });
    }
  }, [data, isError, isLoading, navigate]);

  return (
    <div className="login-container">
      <div className="form">
        <div className="wrapper">
          <header>Login Form</header>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={state.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="forgot-password">
              <Link to="#">Forgot password?</Link>
            </div>

            <div className="submit-button">
              <input type="submit" value={isLoading ? "Logging in..." : "Login"} disabled={isLoading} />
            </div>
          </form>

          <div className="signup-link">
            <Link to="/signup" className="link">
              Create account!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
