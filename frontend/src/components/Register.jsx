import React, { useRef, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const Register = () => {

  // states
  const [showPassword, setshowPassword] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setmail] = useState("");

  const logoWrapperRef = useRef(null);
  const passwordRegex = /^.{6}$/;

  const submitRef = useRef(null);

// ..states
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!mail.endsWith("@gmail.com")) {
      toast.error("Invalid gmail id");
      return;
    }

    if (password.length !== 6) {
      toast.error("Password must be exactly of 6 characters");
      return;
    }

const promise = new Promise((resolve, reject) => {
  if (logoWrapperRef.current && submitRef.current) {
    logoWrapperRef.current.classList.add("rocket-launch");

    // First add base class
    submitRef.current.classList.add('submit-btn');

    // Then force reflow to restart animation
    void submitRef.current.offsetWidth;

    // Add animation class to trigger width transition
    submitRef.current.classList.add('animate');
    submitRef.current.setAttribute('disabled', 'true');

    setTimeout(() => {
      logoWrapperRef.current.classList.remove("rocket-launch"); // Remove animate to allow re-trigger
      resolve('Registered successfully!');
    }, 1300);
  }
})
.then(msg => new Promise((resolve) => setTimeout(() => {      
  submitRef.current.classList.remove('animate');
  resolve(msg)
    // submitRef.current.removeAttribute('disabled');
    submitRef.current.innerHTML = 'wait ...'
    submitRef.current.style.color = 'skyblue'
}, 1000)))
.then(msg => {
  toast.success(msg);
});



  };

  return (
    <div
      className="Register-Container"
      data-scroll
      data-scroll-speed="1.5 "
      data-scroll-direction="horizontal"
    >
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
          <p className="FastChat-text">FastChat</p>
        </div>
        <div className="register">
          <p>Register</p>
        </div>
        <form onSubmit={(e) => handleSignUp(e)}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            required
            value={mail}
            onChange={(e) => setmail(e.target.value)}
            pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye-span register-eye"
            onClick={() => setshowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={!showPassword ? faEyeSlash : faEye} />
          </span>

          <button type="submit" ref={submitRef}>Sign up</button>
        </form>
        <div className="text">
          you do have an account? <Link to={"/Login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
