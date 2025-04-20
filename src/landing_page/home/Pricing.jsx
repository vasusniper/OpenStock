import React from "react";
function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className='fs-2'>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="#">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>

        <div className="col-6">
          <div className="row">
            <div className="col">
            <img
            src="/images/pricing0.svg"
            alt=""
            style={{margin: "0 auto", height:"50%"}}
          />
              <p style={{display:"inline-block",fontSize:"7px"}}> Free equity delivery <br />and direct mutual funds</p>
            </div>
            <div className="col">
              <img src="/images/intradayTrades.svg" alt=""  style={{margin: "0 auto", height:"50%"}}/>
              <p style={{ display:"inline-block",fontSize:"7px"}}> Intraday and <br />F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
