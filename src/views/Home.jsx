import React from "react";
import { FAQ, Footer, Form, Nav } from "../components/Index";
import "./styles/home.scss";

import heroImg from "../assets/hero-img.png";
import vector from "../assets/vector2.png";
import ellipse from "../assets/Ellipse1.png";
import rectangle from "../assets/Rectangle9.png";

import { LuLink2 } from "react-icons/lu";
import { HiQrCode } from "react-icons/hi2";
import { TbWaveSawTool } from "react-icons/tb";
import { RxPencil2 } from "react-icons/rx";

import group2 from "../assets/Group2.png";
import group3 from "../assets/Group3.png";

const Home = () => (
  <main id="home__section">
    <Nav />
    <header className="hero__section container">
      <h1>
        Optimize Your Online Experience with Our Advanced{" "}
        <span>URL Shortening</span> Solution
      </h1>
      <p>
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>
      <div className="cta">
        <button className="sign__cta">Sign Up</button>
        <button className="learn__cta">Learn more</button>
      </div>
      <div className="image">
        <img src={heroImg} alt="scissors links" className="" />
        <img src={vector} alt="" className="vector" />
      </div>
      <div className="base">
        <img src={ellipse} alt="" className="ellipse" />
        <img src={rectangle} alt="" />
      </div>
    </header>
    <section className="stat">
      <div className="container">
        <div className="row">
          <h3>
            One Stop. <br />
            Four <span>Possibilities</span>.
          </h3>
          <div className="content">
            <div className="col">
              <h3>3M</h3>
              <p>Active users</p>
            </div>
            <div className="col">
              <h3>60M</h3>
              <p>Links & QR codes created</p>
            </div>
            <div className="col">
              <h3>1B</h3>
              <p>Clicked & Scanned connections</p>
            </div>
            <div className="col">
              <h3>300k</h3>
              <p>App Integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* qualities section */}
    <section className="qualities">
      <div className="container">
        <div className="row">
          <aside className="left">
            <h2>
              Why choose <span>Scissors</span>
            </h2>
            <p>
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.
            </p>
          </aside>
          <aside className="right">
            <div className="grid">
              <div className="col">
                <div className="icon">
                  <LuLink2 />
                </div>
                <h3>URL Shortening</h3>
                <p>
                  Scissor allows you to shorten URLs of your business, events.
                  Shorten your URL at scale, URL redirects.
                </p>
              </div>
              <div className="col">
                <div className="icon">
                  <RxPencil2 />
                </div>
                <h3>Custom URLs</h3>
                <p>
                  With Scissor, you can create custom URLs, with the length you
                  want! A solution for socials and businesses.
                </p>
              </div>
              <div className="col">
                <div className="icon">
                  <HiQrCode />
                </div>
                <h3>QR Codes</h3>
                <p>
                  Generate QR codes to your business, events. Bring your
                  audience and customers to your doorstep with this scan and go
                  solution.
                </p>
              </div>
              <div className="col">
                <div className="icon">
                  <TbWaveSawTool />
                </div>
                <h3>Data Analytics</h3>
                <p>
                  Receive data on the usage of either your shortened URL, custom
                  URLs or generated QR codes. Embedded to monitor progress.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
    {/* pricing */}
    <section className="pricing" id="pricing">
      <div className="container">
        <header>
          <h2>
            A <span>price perfect</span> for your needs.
          </h2>
          <p>
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </header>
        <div className="cards">
          <article className="card">
            <small>Basic</small>
            <h3>Free</h3>
            <small>Free plan for all users</small>
            <ul>
              <li>Unlimited URL Shortening</li>
              <li>Basic Link Analytics</li>
              <li>Customizable Short Links</li>
              <li>Standard Support</li>
              <li>Ad-supported</li>
            </ul>
          </article>
          <article className="card professional">
            <small>Professional</small>
            <h3>$15/month</h3>
            <small>Ideal for business creators</small>
            <ul>
              <li>Enhanced Link Analytics</li>
              <li>Custom Branded Domains</li>
              <li>Advanced Link Customization</li>
              <li>Priority Support</li>
              <li>Ad-free Experience</li>
            </ul>
          </article>
          <article className="card">
            <small>Teams</small>
            <h3>$25/month</h3>
            <small>Share with up to 10 users</small>
            <ul>
              <li>Team Collaboration</li>
              <li>User Roles and Permissions</li>
              <li>Enhanced Security</li>
              <li>API Access</li>
              <li>Dedicated Account Manager</li>
            </ul>
          </article>
        </div>
        <div className="cta__">
          <button className="cta">Get Custom Pricing</button>
          <button className="cta pricing">Select Pricing</button>
        </div>
      </div>
    </section>
    {/* form */}
    <Form />
    {/* faq */}
    <FAQ />
    {/* cta */}
    <section className="revolution">
      <img src={group3} alt="" className="absolute-top" />
      <img src={group2} alt="" className="absolute-bottom" />
      <div className="container">
        <h2>Revolutionizing Link Optimization</h2>
        <button className="cta">Get Started</button>
      </div>
    </section>
    {/* footer */}
    <Footer />
  </main>
);

export default Home;
