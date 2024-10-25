import React from "react";
import AssetClasses from "../GroteskTexts/AssetClasses";
import { Stocks, RealEstate, FixedIncome } from "../GroteskTexts/Stocks";
import {
  LearnStocksBtn,
  LearnFixedIncomeBtn,
  LearnRealEstateBtn,
} from "../GroteskTexts/AssetsBtns";
const data = [
  {
    title: "stocks",
    title_icon: <Stocks />,
    imgUrl: "images/stocks-img.svg",
    content:
      "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
    level: "Medium",
    returns: "14% per annum",
    btn: <LearnStocksBtn />,
    top: "orange-bg",
  },
  {
    title: "realEstate",
    title_icon: <RealEstate />,
    imgUrl: "images/realestateimg.svg",
    content:
      "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
    level: "Medium",
    returns: "14% per annum",
    btn: <LearnRealEstateBtn />,
    top: "purple-bg",
    
  },
  {
    title: "stocks",
    title_icon: <FixedIncome />,
    imgUrl: "images/fixedincomeimg.svg",
    content:
      "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
    level: "Medium",
    returns: "14% per annum",
    btn: <LearnFixedIncomeBtn />,
    top: "green-bg",
  },
];
function AssetClassesSection() {
  return (
    <div className="asset-classes">
      <div className="asset-header">
        <AssetClasses />
        <p>It’s your money, choose where you invest it</p>
      </div>
      <div className="asset-body">
        {data?.map((asset, i) => (
          <div className="asset-card" key={i}>
            <div className={`asset-top ${asset.top}`}></div>
            <img
              className="asset-icon"
              src={asset.imgUrl}
              alt="icon"
            />
            <div className="asset-card-content">
              {asset.title_icon}
              <p>
               {asset.content}
              </p>
              <p>
                <span className="light-text">Historical returns:</span> {asset.returns} 
              </p>
              <p>
                <span className="light-text">Level:</span>{asset.level}
              </p>
            </div>
            <div className="asset-btn">
              {asset.btn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssetClassesSection;
