import React, { useState } from "react";
import bg from "../assets/form-bg-1.png";
import bg2 from "../assets/form-bg-2.png";
import "./styles/form.scss";

import { RiScissorsCutFill } from "react-icons/ri";
import { FiCopy } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const notify = () =>
    toast.success("URL copied to clipboard!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const shortenURL = async (originalURL) => {
    const accessToken = "b91214ec6ea1bc636c8e09bc26a596b9d07dee3f";
    const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: originalURL,
        domain: "bit.ly",
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setShortenedURL(data.link);
    } else {
      throw new Error("Failed to shorten URL");
    }
  };

  // link shortner fn
  const handleShorten = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const shortened = await shortenURL(originalURL);
      console.log(shortenedURL);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // handle copy function
  const handleCopy = () => {
    navigator.clipboard
      .writeText(shortenedURL)
      .then(() => {
        notify();
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
      });
  };

  return (
    <section className="form" id="shortenURL">
      <img src={bg} alt="" className="absolute-top" />
      <img src={bg2} alt="" className="absolute-bottom" />
      <div className="container">
        <form onSubmit={handleShorten}>
          <input
            type="url"
            placeholder="Paste URL here..."
            onChange={(e) => setOriginalURL(e.target.value)}
            value={originalURL}
            required
          />
          <div className="row">
            <select name="domain" id="domain">
              <option value="Choose Domain">Choose Domain</option>
            </select>
            <input type="text" placeholder="Type Alias here" />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? <RiScissorsCutFill /> : " Trim URL"}
          </button>
          {shortenedURL && (
            <aside className="short__link">
              <input type="url" value={shortenedURL} readOnly />
              <FiCopy className="icon" onClick={handleCopy} />
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </aside>
          )}
          <p>
            By clicking TrimURL, I agree to the{" "}
            <b>Terms of Service, Privacy Policy</b> and Use of Cookies.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Form;
