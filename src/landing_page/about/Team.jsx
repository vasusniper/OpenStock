import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row">
        <div className="col text-center">
          <img
            src="../public/images/Vasu-Sniper.png"
            alt=""
            className="Vasu-Sniper"
          />
          <p className="fs-5">Vasu Sniper</p>
          <p>Founder, CEO</p>
        </div>
        <div className="col p-3">
          <p>
            Vasu Sniper and Alex founded OpenStock in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
           OpenStock has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage / TradingQnA / Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
