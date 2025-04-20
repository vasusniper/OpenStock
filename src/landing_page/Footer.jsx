import React from "react";
function Footer() {
  return (
    <div className="container border-top">
      <div className="row footer mt-5">
        <div className="col">
        <img src="./public/images/openStock.svg" alt="" style={{ width: "10%" }} /> <b>OpenStock</b>
          <p style={{ fontSize: "10px", marginTop: "1rem" }}>
            &copy; 2010 - 2025, OpenStock Broking Ltd. <br />
            All rights reserved.
          </p>
          <a className="ms-2 text-decoration-none" href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a className="ms-2 text-decoration-none" href="#">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a className="ms-2 text-decoration-none" href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="ms-2 text-decoration-none" href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="#">About </a>
          <br />
          <a href="#">Products </a>
          <br />
          <a href="#">Pricing </a>
          <br />
          <a href="#">Referral programme </a>
          <br />
          <a href="#">Careers</a>
          <br />
          <a href="#">Zerodha.tech</a>
          <br />
          <a href="#">Open source</a>
          <br />
          <a href="#">Press & media</a>
          <br />
          <a href="#">OpenStock Cares (CSR)</a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="">Contact us</a>
          <br />
          <a href="#">Support portal</a>
          <br />
          <a href="#">Z-Connect blog</a>
          <br />
          <a href="#">List of charges</a>
          <br />
          <a href="#">Downloads & resources</a>
          <br />
          <a href="#">Videos</a>
          <br />
          <a href="#">Market overview</a>
          <br />
          <a href="#">How to file a complaint?</a>
          <br />
          <a href="#">Status of your complaints</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="#">Open an account</a>
          <br />
          <a href="#">Fund transfer</a>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col mt-5">
          <p className="p_10px">
            OpenStock  Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through OpenStock
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through OpenStock Commodities Pvt. Ltd. MCX: 46025;
            NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address:
            OpenStock Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
            Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India. For any complaints pertaining to securities
            broking please write to complaints@zerodha.com, for DP related to
            dp@zerodha.com . Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p className="p_10px">
            Procedure to file a complaint on <a href=""> SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p className="p_10px">
            <a href="#">Smart Online Dispute Resolution</a>|{" "}
            <a href="">Grievances Redressal Mechanism</a>
          </p>
          <p className="p_10px">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="p_10px">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="p_10px">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="p_10px">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of OpenStock and offering such services, please
            create a <a href="">ticket here</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
