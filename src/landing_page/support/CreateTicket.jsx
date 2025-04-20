import React from 'react';
import './CreateTicket.css'
function CreateTicket() {
    return (
       <>
       <div className="container mt-4">
      <h5 className="mb-4 text-muted">To create a ticket, select a relevant topic</h5>
      <div className="row create-ticket">
        {/* Account Opening */}
        <div className="col-md-4">
          <a className="">
            <i className="fas fa-user-plus me-2"></i> Account Opening
          </a>
          <ul className="list-unstyled">
            <li>Resident Individual</li>
            <li>Minor</li>
            <li>Non Resident Indian (NRI)</li>
            <li>Company, Partnership, HUF and LLP</li>
            <li>Glossary</li>
          </ul>
        </div>

        {/* Your OpenStock  Account */}
        <div className="col-md-4">
          <a className="">
            <i className="fas fa-user me-2"></i> Your OpenStock  Account
          </a>
          <ul className="list-unstyled fs-6">
            <li>Your Profile</li>
            <li>Account Modification</li>
            <li>Client Master Report (CMR) & Depository</li>
            <li>Nomination</li>
            <li>Transfer & Conversion of Securities</li>
          </ul>
        </div>

        {/* Kite */}
        <div className="col-md-4">
          <a className="">
            <i className="fas fa-chart-line me-2"></i> Kite
          </a>
          <ul className="list-unstyled fs-6">
            <li>IPO</li>
            <li>Trading FAQs</li>
            <li>Margin Trading Facility (MTF) & Margins</li>
            <li>Charts & Orders</li>
            <li>Alerts & Nudges</li>
          </ul>
        </div>

        {/* Funds */}
        <div className="col-md-4 mt-3">
          <a className="">
            <i className="fas fa-wallet me-2"></i> Funds
          </a>
          <ul className="list-unstyled fs-6">
            <li>Add Money</li>
            <li>Withdraw Money</li>
            <li>Add Bank Accounts</li>
            <li>eMandates</li>
          </ul>
        </div>

        {/* Console */}
        <div className="col-md-4 mt-3">
          <a className="">
            <i className="fas fa-desktop me-2"></i> Console
          </a>
          <ul className="list-unstyled fs-6">
            <li>Portfolio</li>
            <li>Corporate Actions</li>
            <li>Funds Statement</li>
            <li>Reports</li>
            <li>Segments</li>
          </ul>
        </div>

        {/* Coin */}
        <div className="col-md-4 mt-3">
          <a className="">
            <i className="fas fa-coins me-2"></i> Coin
          </a>
          <ul className="list-unstyled fs-6">
            <li>Understanding Mutual Funds and Coin</li>
            <li>Coin App</li>
            <li>Coin Web</li>
            <li>Transactions and Reports</li>
            <li>National Pension Scheme (NPS)</li>
          </ul>
        </div>
      </div>
    </div>
            </>
          );
        };

export default CreateTicket;