// import React from 'react'
import React, { useEffect, useRef, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import AuthStore from "../Stores/AuthStore";
import { delay, motion, scale } from "motion/react";
const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  // const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setmail] = useState("");
  const logoWrapperRef = useRef(null);
  const submitRef = useRef(null);
  const { handleLogin } = AuthStore();
  const navigate = useNavigate();

  const fireRef1 = useRef();
  const fireRef2 = useRef();

  useEffect(() => {
    fireRef1.current.classList.add("fireRef");
    fireRef2.current.classList.add("fireRef");
  }, []);

  setTimeout(() => {
    fireRef1.current.classList.remove("fireRef");
    fireRef2.current.classList.remove("fireRef");
  }, 850);

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
      if (logoWrapperRef.current && submitRef.current) {
        logoWrapperRef.current.classList.add("rocket-launch");

        // First add base class
        submitRef.current.classList.add("submit-btn");

        // Then force reflow to restart animation
        void submitRef.current.offsetWidth;

        // Add animation class to trigger width transition
        submitRef.current.classList.add("animate");
        submitRef.current.setAttribute("disabled", "true");

        setTimeout(() => {
          logoWrapperRef.current.classList.remove("rocket-launch"); // Remove animate to allow re-trigger
          resolve("Logged in successfully!");
        }, 1300);
      }
    })
      .then(
        (msg) =>
          new Promise((resolve) =>
            setTimeout(() => {
              submitRef.current.classList.remove("animate");
              resolve(msg);
              submitRef.current.innerHTML = "wait ...";
              submitRef.current.style.color = "skyblue";
            }, 1500)
          )
      )
      .then((msg) => {
        toast.success(msg);
      });
    const verify = handleLogin(mail, password);
    if(verify){
      navigate('/Home')
    }

  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, height: 0, y: 100, perspective: 200 }}
        animate={{
          opacity: 1,
          // rotate:360,
          y: 0,
          x: 0,
          height: 378,
        }}

        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="Register-Container"
      >
        <div className="FormWrapper">
          <div className="registerHead">
            <div className="icon-wrapper" ref={logoWrapperRef}>
              <motion.img
                src="/Rocket.png"
                initial={{opacity:0,y:500,scale:8}}
                animate={{opacity:1,y:0,scale:1}}
                transition={{delay:0.1,duration:0.3}}
                className="fastchat-icon"
              />
              <div ref={fireRef1} className="rocket-fire"></div>
              <div ref={fireRef2} className="rocket-fire small"></div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -500, scale: 8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
              className="FastChat-text"
            >
              FastChat
            </motion.p>
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
              autoComplete="true"
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
            <button type="submit" style={{ marginTop: "3rem" }} ref={submitRef}>
              sign in
            </button>
          </form>
          <p className="text">
            don't have an account?{" "}
            <span>
              <Link to={"/"}>Register</Link>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
