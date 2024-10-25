import React from "react";
import {JoinText, JoinText1} from "../GroteskTexts/JoinText";
function DownloadApp() {
  return (
    <div className="download-app">
      <div className="download-container">
        <div className="download-content">
          <p className="green" style={{ fontWeight: 500 }}>
            {" "}
            Download The Rise App
          </p>
          <p className="join-text">
            <JoinText />
          </p>
          <p className="join-text1">
            <JoinText1 />
          </p>
          <p style={{ color: "#4A5050", fontWeight: 500 }}>
            Dollar investments that help you grow.
          </p>
          <div className="app-buttons1">
            <button className="app-store">
              <img src="/images/appstore.svg" alt="appstore" />
            </button>
            <button className="google-play">
              <img src="/images/playstore.svg" alt="appstore" />
            </button>
          </div>
        </div>
        <div className="download-img">
          <img src="/images/phone.svg" alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
