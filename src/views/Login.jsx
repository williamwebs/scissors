import React, { useState } from "react";
import { Footer, Form, Nav } from "../components/Index";
import {
  AiFillApple,
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import "./styles/login.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main id="login__section">
      <Nav />
      <section className="container">
        <article className="top__section">
          <small>Log in with:</small>
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
            <input
              type="email"
              name=""
              id=""
              placeholder="Email address or username"
            />
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
            <p>Forgot your password?</p>
            <button type="submit">Log in</button>
          </form>
          <div className="bottom__section">
            <p>
              Don’t have an account?{" "}
              <NavLink to="/sign-up" className="cta">
                Sign up
              </NavLink>
            </p>
            <small>By signing in with an account, you agree to </small>
            <small>
              Sciccor's Terms of Service, Privacy Policy and Acceptable Use
              Policy.
            </small>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Login;
