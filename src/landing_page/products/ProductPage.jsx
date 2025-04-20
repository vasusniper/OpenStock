import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        img_Url={"../public/images/kite.png"}
        para="  Our ultra-fast flagship trading platform with
            streaming market data, advanced charts, an elegant UI, and
            more. Enjoy the Kite  experience seamlessly on your Android
            and iOS devices."
        title={"Kite"}
        link_1="Try demo"
        link_2="Learn more"
      />
      <RightSection
        img_Url={"../public/images/console.png"}
        para="The central dashboard for your OpenStock  account. Gain insights into your trades and investments with in-depth reports and visualisations."
        title={"Console"}
        link_name={"Learn more "}
      />
      <LeftSection
        img_Url={"../public/images/coin.png"}
        title={"Coin"}
        para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link_1={"Coin"}
      />
      <RightSection
        title={"Kite Connect API"}
        img_Url={"../public/images/kiteconnect.png"}
        para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link_name={"Kite coin"}
      />
      <LeftSection
        img_Url={"../public/images/varsity-products.png"}
        title={"Varsity mobile"}
        para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."

        />
        <p className="text-center mb-5">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</p>
        <Universe/>
    </>
  );
}

export default ProductPage;
