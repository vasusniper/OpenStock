import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="font-28">Charges</h1>
        <p> List of all charges and taxes</p>
      </div>
      <div className="row mt-5 mb-5 p-5">
        <div className="col">
          <img src="/images/pricing0.svg" alt="" />
          <h1 className="font-28"> Free equity delivery</h1>
          <p>
            {" "}
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="/images/intradayTrades.svg" alt="" />
          <h1 className="font-28">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="/images/pricing0.svg" alt="" />
          <h1 className="font-28"> Free direct MF</h1>
         <p> All direct mutual fund investments are absolutely free — ₹ 0
          commissions & DP charges.</p>
        </div>
      </div>
      <p className="text-center"><a href="">Calculate your costs upfront </a> using our brokerage calculator</p>
    </div>
  );
}

export default Hero;
