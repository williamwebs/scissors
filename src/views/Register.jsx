import React, { useState } from "react";
import "./styles/login.scss";
import { Footer, Nav } from "../components/Index";
import {
  AiFillApple,
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [err, setErr] = useState(false);

  // navigate hook to navigate user to dashboard when logged in
  const navigate = useNavigate();

  // function to create user account
  const createUserAccount = async (e) => {
    e.preventDefault();

    if (password != retypePassword || password.length < 6) {
      setErr(true);
      console.log("password incorrect");
    } else {
      console.log("password correct");
      setErr(false);

      try {
        // create user
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // add the user to the db
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          username,
          email,
        });
        console.log("user stored!");
        navigate("/dashboard");
      } catch (error) {
        console.log(error.message);
      }
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
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="email"
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
            {err && (
              <span className="error">
                password does not match / password less than 6 characters.
              </span>
            )}
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
