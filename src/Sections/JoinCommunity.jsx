import React from "react";
import { JoinCommunityText, JoinCommunityBtn, JoinCommunityText1 } from "../GroteskTexts/JoinCommunityText";
function JoinCommunity() {
  return (
    <div className="community">
      <div className="community-content">
        <p className="comm-text">
          <JoinCommunityText />
        </p>
        <p className="comm-text1">
          <JoinCommunityText1 />
        </p>
        <p className="go-far">
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <p className="go-far1">If you want to go far, go together.</p>
        <p>
          <JoinCommunityBtn />
        </p>
      </div>
      <div className="community-img">
        <img src="/images/community.svg" alt="image" />
      </div>
      <div className="community-img1">
        <img src="/images/community1.svg" alt="image" />
      </div>
    </div>
  );
}

export default JoinCommunity;
