import React from "react";

const Supporters = () => {
  return (
    <section className="support">
      <div className="support-large">
        <img src="/images/supporter.svg" alt="supporters" />
      </div>
      <div className="support-small">
        <p style={{ color: "#7B8DA8", fontWeight: 500 }}>We are supported by</p>
        <img src="/images/supporter1.svg" alt="supportsers" />
      </div>
    </section>
  );
};

export default Supporters;
