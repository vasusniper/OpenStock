import React from "react";
import "./Hero.css"; // Ensure this file exists

function Hero() {
  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#387ed1" }}>
      <div className="hero-row" style={{ display: "flex",width:"57%", marginLeft:"15rem",justifyContent:"space-between"}}>
        <div>
          <a href="#" className="hero-link"><b>Support Portal</b></a>
        </div>
        <div>
          <a href="#" className="hero-featured hero-link">Track tickets</a>
        </div>
      </div>
      <div style={{ display: "flex",justifyContent:"space-between",width:"70%", margin:"0 auto"}}>
        <div className="col hero-col">
          <p className="hero-text">
            Search for an answer or browse help topics to create a ticket
          </p>
          <div>
            <input
              type="text"
              placeholder="How do I activate F&O, Why is my order getting rejected"
              className="hero-input"
            />
          </div>
          <div className="support-links">
            <a className="hero-link" href="#">Track account opening</a>
            <a className="hero-link" href="#">Track segment activation</a>
            <a className="hero-link" href="#">Intraday margins</a>
            <br />
            <a href="#" className="hero-link">Kite user manual</a>
          </div>
        </div>
        <div className="col">
          <div className="hero-col-2"></div>
          <div>
            <p className="hero-link"><b>Featured</b></p>
            <ol>
              <li>
                <a href="#" className="hero-link">
                  MCX Crude option contract expiry - March 2025
                </a>
              </li>
              <li>
                <a href="#" className="hero-link">
                  Current Takeovers and Delisting – March 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
