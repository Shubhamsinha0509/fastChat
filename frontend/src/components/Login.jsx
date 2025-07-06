// import React from 'react'
import React, { useRef, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setmail] = useState("");
  const logoWrapperRef = useRef(null);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!mail.endsWith("@gmail.com")) {
      toast.error("Invalid email");
      return;
    }

    if (password.length !== 6) {
      toast.error("Invalid Password");
      return;
    }

    const promise = new Promise((resolve, reject) => {
      if (logoWrapperRef.current) {
        logoWrapperRef.current.classList.add("rocket-launch");

        setTimeout(() => {
          logoWrapperRef.current.classList.remove("rocket-launch");
          resolve("Registered successfully!");
        }, 950);
      }
    }).then((msg) => {
      toast.success(msg);
    });
  };
  return (
    <div>
      <div className="Register-Container">
        <div className="FormWrapper">
          <div className="registerHead">
            <div className="icon-wrapper" ref={logoWrapperRef}>
              <img
                src="/Rocket.png"
                className="fastchat-icon"
              />
              <div className="rocket-fire"></div>
              <div className="rocket-fire small"></div>
            </div>
            <p>FastChat</p>
          </div>
          <div
            className="register"
            style={{ marginTop: "1.5rem", fontSize: "1.2rem" }}
          >
            <p>Login</p>
          </div>
          <form onSubmit={(e) => handleSignUp(e)}>
            {/* <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
            <input
              type="email"
              placeholder="email"
              required
              value={mail}
              onChange={(e) => setmail(e.target.value)}
              pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
              style={{ marginTop: "1.5rem" }}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-span Login-eye"
              onClick={() => setshowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={!showPassword ? faEyeSlash : faEye} />
            </span>
            <button type="submit" style={{ marginTop: "3rem" }}>
              sign in
            </button>
          </form>
          <p className="text">
            don't have an account? <Link to={"/"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
