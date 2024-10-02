import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/Styles/Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { userName, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !userName) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`https://mock-server-app-ixch.onrender.com/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: "Signup Successful!",
      });

      setFormData({
        userName: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Signup failed, please try again!",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <section className="form-section">
        <header>Registration Form</header>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-box">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              value={userName}
              placeholder="Enter user name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email address"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-link">
            <Link to="/login" className="link">
              Already have an account? Login
            </Link>
          </div>

          <div className="submit-button">
            <input type="submit" value={loading ? "Submitting..." : "Submit"} disabled={loading} />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Signup;
