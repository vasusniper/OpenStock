import React from 'react';
function Hero() {
    return (
      <div className='container p-5'>
        <div className='row text-center'>
                <img className='mb-5' src="/images/homeHero.png" alt="Hero_Img" />
                <h1 className='fs-2 mt-5'>Invest in everything</h1>
               <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

              <button className='hero_btn btn btn-primary p-3 fs-5'>Sign up for free</button> 
            </div>
        </div>
    );
}

export default Hero;