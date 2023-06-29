import React, { useState } from "react";
import { Footer, Form, Nav } from "../components/Index";
import {
  AiFillApple,
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import "./styles/login.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // google sign in provider
  const provider = new GoogleAuthProvider();

  // signIn function
  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("log in successful!");
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  // sign in with google
  // sign in with google
  const googleSignIn = (e) => {
    e.preventDefault();

    try {
      signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {}
  };

  return (
    <main id="login__section">
      <Nav />
      <section className="container">
        <article className="top__section">
          <small>Log in with:</small>
          <aside className="cta">
            <button className="btn" onClick={googleSignIn}>
              <AiOutlineGoogle className="icon" /> Google
            </button>
            <button className="btn">
              <AiFillApple className="icon" /> Apple
            </button>
          </aside>
        </article>
        <p>or</p>
        <article className="form">
          <form id="form" onSubmit={handleSignIn}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="username"
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
            <p>Forgot your password?</p>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </button>
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
