import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>The OpenStock  Universe</h1>
          <p className="font-12">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row">
          <div className="col mt-5">
            <img
              src="/images/zerodhafundhouse.png"
              alt=""
              style={{ height: "55px" }}
            />
            <p className="font-12">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col mt-5">
            <img
              src="/images/sensibull-logo.svg"
              alt=""
              style={{ height: "40px" }}
            />
            <p className="font-12">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col mt-5">
            <img
              src="/images/tijori.svg"
              alt=""
              style={{ height: "55px" }}
            />
            <p className="font-12">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col mt-5">
            <img
              src="/images/streak-logo.png"
              alt=""
              style={{ height: "55px" }}
            />
            <p className="font-12">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col mt-5">
            <img
              src="/images/smallcase-logo.png"
              alt=""
              style={{ height: "40px" }}
            />
            <p className="font-12">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col mt-5">
            <img
              src="/images/dittoLogo.png"
              alt=""
              style={{ height: "55px" }}
            />
            <p className="font-12">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign
            </p>
          </div>
        </div>
        <div className="row text-center">
          <button
            className="btn mb-5"
            style={{
              width: "200px",
              margin: "0 auto",
              backgroundColor: "#387ED1",
              color: "white",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
