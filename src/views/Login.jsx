import React from "react";
import { Footer, Form, Nav } from "../components/Index";
import {
  AiFillApple,
  AiFillGoogleCircle,
  AiOutlineGoogle,
} from "react-icons/ai";

const Login = () => {
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
            <input type="password" placeholder="Password" />
          </form>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Login;
