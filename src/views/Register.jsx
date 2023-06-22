import React, { useState } from "react";
import "./styles/login.scss";
import { Footer, Nav } from "../components/Index";
import {
  AiFillApple,
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [err, setErr] = useState(false);

  // function to create user account
  const createUserAccount = (e) => {
    e.preventDefault();
    console.log("user created!");
    console.log(username, email, password, retypePassword);

    if (password != retypePassword) {
      setErr(true);
      console.log("password incorrect");
    } else {
      console.log("password correct");

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user created!");
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      setErr(false);
    }
  };

  return (
    <main id="login__section" className="register__section">
      <Nav />
      <section className="container">
        <article className="top__section">
          <small>Sign up with:</small>
          <aside className="cta">
            <button className="btn">
              <AiOutlineGoogle className="icon" /> Google
            </button>
            <button className="btn">
              <AiFillApple className="icon" /> Apple
            </button>
          </aside>
        </article>
        <p>or</p>
        <article className="form">
          <form id="form" onSubmit={createUserAccount}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password__div">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiFillEye
                  className="icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className="password__div retype__password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Retype Password"
                className="password"
                onChange={(e) => setRetypePassword(e.target.value)}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiFillEye
                  className="icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {err && <span className="error">password does not match.</span>}
            <p className="left__text">
              6 or more characters, one number, one uppercase & one lower case.
            </p>
            <button type="submit">Sign up with Email</button>
          </form>
          <div className="bottom__section">
            <p>
              Already have an account?{" "}
              <NavLink to="/login" className="cta">
                Log in
              </NavLink>
            </p>
            <small>By signing in with an account, you agree to </small>
            <small>
              Sciccor's <span>Terms of Service, Privacy Policy</span> and
              <span> Acceptable Use Policy.</span>
            </small>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Register;
