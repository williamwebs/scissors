import React from "react";
import "./styles/faq.scss";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "How does URL shortening work?",
      content: `URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.`,
    },
    {
      title:
        "Is it necessary to create an account to use the URL shortening service?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Are the shortened links permanent? Will they expire?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Are there any limitations on the number of URLs I can shorten?",
      content: "",
    },
    {
      title:
        "Can I customize the shortened URLs to reflect my brand or content?",
      content: "",
    },
    {
      title: "Can I track the performance of my shortened URLs?",
      content: "",
    },
    {
      title:
        "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      content: "",
    },
    {
      title: "What is a QR code and what can it do?",
      content: "",
    },
    {
      title:
        "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      content: "",
    },
  ],
};

const styles = {
  titleTextColor: "var(--dark)",
  rowTitleColor: "var(--dark)",
  rowTitleTextSize: 'medium',
};

const config = {
  animate: true,
};

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>FAQs</h2>
        <div className="faq__container">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
