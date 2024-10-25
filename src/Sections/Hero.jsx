import React from "react";
import { DollarInv, DollarInv1 } from "../GroteskTexts/DollarInv";

const Hero = () => {
  return (
    <section className="hero">
      {/* <div></div> */}
      {/* <h1>Dollar investments that help you grow</h1> */}
      <div className="hero-text">
        <div className="dollarinv1">
          <DollarInv />
        </div>
        <div className="dollarinv2">
          <DollarInv1 />
        </div>
        <p className="">
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>
        <div className="app-buttons">
          <button className="app-store">
            <img src="/images/appstore.svg" alt="appstore" />
          </button>
          <button className="google-play">
            <img src="/images/playstore.svg" alt="appstore" />
          </button>
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/heroimg.svg" alt="hero" />
      </div>
      <img className="ellipse1" src="/images/ellipse1.svg" alt="hero" />
      <img className="ellipse2" src="/images/ellipse2.svg" alt="hero" />
      <img className="ellipse3" src="/images/ellipse3.svg" alt="hero" />
      <img className="ellipse4" src="/images/ellipse4.svg" alt="hero" />
      <img className="ellipse5" src="/images/ellipse5.svg" alt="hero" />
    </section>
  );
};

export default Hero;
