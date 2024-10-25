import React from "react";
import  {InvestInDollars, InvestInDollars1 } from "../GroteskTexts/InvestInDollars";
import StartInvestingBtn from "../GroteskTexts/StartInvestingBtn";
import  {ChooseBest, ChooseBest1 } from "../GroteskTexts/ChooseBest";
import { SetGoals, SetGoals1 } from "../GroteskTexts/SetGoals";
import WeRemember from "../GroteskTexts/WeRemember";
function MainContent() {
  return (
    <div className="cont">
      <div className="main-content">
        <div className="content-block">
          <div className="investinusd">

          <InvestInDollars />
          </div>
          <div className="investinusd1">

          <InvestInDollars1 />
          </div>
          <p>
            You can invest towards a goal on Rise--retirement, higher education,
            save for your home or travel budgets. Or create a goal of your own
            and invest periodically to achieve them.
          </p>
          <div>

          <StartInvestingBtn />
          </div>
        </div>
        <div className="content-img">
          <img  className="invest" src="images/investimg.svg" alt="invest" />
          <img className="invest1" src="images/investimg1.svg" alt="invest" />
        </div>
      </div>
      <div className="main-content1 content-up">
        <div className="content-block">
          <div className="choosebest">

          <ChooseBest />
          </div>
          <div className="choosebest1">

          <ChooseBest1 />
          </div>
          <p>
            By holding your investments in a stable currency, your money grows
            more over time and retains its value better.
          </p>
          <StartInvestingBtn />
        </div>
        <div className="content-img">
          <img className="choosebest" src="images/choosebestimg.svg" alt="invest" />
          <img className="choosebest1" src="images/choosebestimg1.svg" alt="invest" />
        </div>
      </div>
      <div className="main-content content-up">
        <div className="content-block">
          <div className="setgoals">

          <SetGoals />
          </div>
          <div className="setgoals1">

          <SetGoals1 />
          </div>
          <p>
            You can invest towards a goal on Rise--retirement, higher education,
            save for your home or travel budgets. Or create a goal of your own
            and invest periodically to achieve them.
          </p>
          <StartInvestingBtn />
        </div>
        <div className="content-img">
          <img className="setgoals" src="images/setgoalsimage.svg" alt="invest" />
          <img className="setgoals1" src="images/setgoalsimage1.svg" alt="invest" />
        </div>
      </div>
      <div className="main-content1 content-up">
        <div className="content-block">
          <WeRemember />
          <p>
            By holding your investments in a stable currency, your money grows
            more over time and retains its value better.
          </p>
          <StartInvestingBtn />
        </div>
        <div className="content-img">
          <img src="images/werememberimage.svg" alt="invest" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
