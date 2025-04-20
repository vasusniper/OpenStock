import React from 'react';
function Awards() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 p-5">
                    <img src="../public/images/largestBroker.svg" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1 className='fs-2'>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ milion OpenStoc clients contribute to over 15% of alll retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                        <ul>
                            <li>Future and Options </li>
                            <li>Commodity derivatives</li>
                            <li>Current derivatives</li>
                        </ul>
                        </div>
                        <div className="col-6">
                        <ul>
                            <li>Stocks & IPOs </li>
                            <li>Direct mutua funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </ul>
                        </div>
                    </div>
                    <div className="row mp-2">
                        <img className='awards_press_logo' src="../public/images/pressLogos.png"/>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Awards;