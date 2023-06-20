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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          <form id="form">
            <input type="text" name="" id="" placeholder="Username" />
            <input type="email" name="" id="" placeholder="Email" />
            <div className="password__div">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
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
