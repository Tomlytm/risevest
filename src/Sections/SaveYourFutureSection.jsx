import React from "react";
import {
  RiseAppTitle,
  SaveForFutureText,
  StartSavingBtn,
} from "../GroteskTexts/SaveForFuture";

function SaveYourFutureSection() {
  return (
    <div className="future">
      <div className="rise-app-image">
        <img src="/images/savefuture.png" alt="img" />
      </div>
      <div className="rise-app-content">
        <p>
          <RiseAppTitle />
        </p>
        <SaveForFutureText />
        <p>
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future and more.
        </p>
        <StartSavingBtn />
      </div>
    </div>
  );
}

export default SaveYourFutureSection;
