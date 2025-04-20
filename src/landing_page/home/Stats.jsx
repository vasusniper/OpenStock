import React from 'react';
function Stats() {
    return (
        <div className="container p-5">
            <div className="row mt-5">
                <div className="col-6">
                    <h1 className='fs-2'>Trust with confidence</h1>
                    <div className='mt-3'>
                        <h4>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.5+ crore customers trust OpenStock with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mt-3'>
                        <h4>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    </div>
                    <div className='mt-3'>
                        <h4> The   OpenStock  universe</h4>
                        <p className='text-muted'> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                        </p>
                    </div>
                    <div className='mt-3'>
                        <h4>Do better with money</h4>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6">
                    <img style={{width: "90%" }} className='awards_main_img' src="../public/images/ecosystem.png" alt="broker img" />
                    <div className="row">
                        <div className="col mt-2">
                            <a style={{textDecoration:"none"}} href="#">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            <a style={{marginLeft:"2rem", textDecoration:"none"}} href="#">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats;