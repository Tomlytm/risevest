import React from "react";
import "./App.css";
// impor
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Supporters from "./Sections/Supporter";
import MainContent from "./Sections/MainContent";
import AssetClassesSection from "./Sections/AssetClassesSection";
import SaveYourFutureSection from "./Sections/SaveYourFutureSection";
import RegulationSection from "./Sections/RegulationSection";
import Testimonial from "./Sections/Testimonial";
import JoinCommunity from "./Sections/JoinCommunity";
import DownloadApp from "./Sections/DownloadApp";
import Footer from "./Sections/Footer";

const App = () => {
  return (
    <div className="">
      <div>
        <Header />
        <Hero />
        <Supporters />
        <MainContent />
        <AssetClassesSection />
        <SaveYourFutureSection />
        <RegulationSection />
        <Testimonial />
        <JoinCommunity />
        <DownloadApp />
        <Footer />
      </div>
    </div>
  );
};

export default App;
