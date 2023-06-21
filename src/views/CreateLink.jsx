import React, { useEffect, useState } from "react";
import "./styles/createLink.scss";
import { FiCopy } from "react-icons/fi";
import QRCode from "react-qr-code";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateLink = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  // link shortner function
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

  // useEffect to fetch the QR Code based on the shortened URL
  useEffect(() => {
    setQRCodeValue(shortenedURL);
  }, [shortenedURL]);

  // handle shorten function on the onSubmit form
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

  // toastify notify function
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

  // function to copy url
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
    <main id="createLink__section">
      <div className="inner__container">
        <h3>Create new link</h3>
        <form className="create__form" onSubmit={handleShorten}>
          <label className="label" htmlFor="destination">
            Destination
          </label>
          <input
            className="input"
            type="url"
            placeholder="https://example.com/my-long-url"
            onChange={(e) => setOriginalURL(e.target.value)}
          />
          <label className="label" htmlFor="custom__backlink">
            Custom back-half (optional)
          </label>
          <input className="input" type="text" placeholder="CustomBackHalf" />
          <h3>QR Code (optional)</h3>
          <div className="qr__section">
            <input
              type="checkbox"
              name="qrCode"
              id="qrCode"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="qrCode">
              Generate a QR Code to share anywhere people can scan it
            </label>
          </div>
          <button className="cta" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
      <div className="display">
        <div className="link">
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
        </div>
        <div className="qr">
          {checked && (
            <div className="qr__container">
              {shortenedURL && <QRCode className="icon" value={qrCodeValue} />}
              <small>scan the bar code</small>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CreateLink;
