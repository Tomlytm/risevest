import React from "react";
import { PeopleWhoUseRise, PeopleWhoUseRise1 } from "../GroteskTexts/PeopleWhoUseRise";
function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <div className="testimonial-title">
          <PeopleWhoUseRise />
        </div>
        <div className="testimonial-title1">
          <PeopleWhoUseRise1 />
        </div>
        <p>
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>
      </div>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p className="comment">
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </p>
          <p className="person">
            <img src="images/jesse.svg" alt="" /> Jesse
          </p>
        </div>
        <div className="testimonial-card">
          <p className="comment">
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </p>
          <p className="person">
            <img src="images/jesse.svg" alt="" /> Jesse
          </p>
        </div>
        <div className="testimonial-card">
          <p className="comment">
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </p>
          <p className="person">
            <img src="images/jesse.svg" alt="" /> Jesse
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
