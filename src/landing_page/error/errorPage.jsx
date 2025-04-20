import React, { useState, useEffect } from "react";
import "./error.css";

function ErrorPage() {
  const [digits, setDigits] = useState({ first: 0, second: 0, third: 0 });

  function randomNum() {
    return Math.floor(Math.random() * 9) + 1;
  }

  useEffect(() => {
    let i = 0;
    const time = 30;

    const loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        setDigits((prev) => ({ ...prev, third: 4 }));
      } else {
        setDigits((prev) => ({ ...prev, third: randomNum() }));
        i++;
      }
    }, time);

    const loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        setDigits((prev) => ({ ...prev, second: 0 }));
      } else {
        setDigits((prev) => ({ ...prev, second: randomNum() }));
        i++;
      }
    }, time);

    const loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        setDigits((prev) => ({ ...prev, first: 4 }));
      } else {
        setDigits((prev) => ({ ...prev, first: randomNum() }));
        i++;
      }
    }, time);

    return () => {
      clearInterval(loop1);
      clearInterval(loop2);
      clearInterval(loop3);
    };
  }, []);

  return (
    <div className="error">
      <div className="container-floud">
        <div className="col-xs-12 ground-color text-center">
          <div className="container-error-404">
            <div className="clip">
              <div className="shadow">
                <span className="digit">{digits.third}</span>
              </div>
            </div>
            <div className="clip">
              <div className="shadow">
                <span className="digit">{digits.second}</span>
              </div>
            </div>
            <div className="clip">
              <div className="shadow">
                <span className="digit">{digits.first}</span>
              </div>
            </div>
            <div className="msg">
              OH!<span className="triangle"></span>
            </div>
          </div>
          <h2 className="h1">Sorry! Page not found</h2>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
