import React from "react";
function LeftSection({ img_Url, para, title, link_1, link_2 }) {
  return (
    <div className="container">
      <div className="row border-top p-5">
        <div className="col mt-5 mb-5">
          <a href="">
            <img src={img_Url} alt="" style={{ width: "75%" }} />
          </a>
        </div>
        <div
          className="col  mt-5 mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>{title}</h1>
          <p>{para}</p>
          <div>
            <a href="#" style={{ textDecoration: "none" }}>
              {link_1} {link_1 ? <i class="fa-solid fa-arrow-right"></i> : null}
            </a>
            <a href="#" style={{ textDecoration: "none", marginLeft: "2rem" }}>
              {link_2} {link_2 ? <i class="fa-solid fa-arrow-right"></i> : null}
            </a>
          </div>
          <div className="mt-3">
            <a href="">
              <img
                src="../public/images/googlePlayBadge.svg"
                alt=""
                style={{ width: "20%" }}
              />
            </a>
            <a href="">
              <img
                src="../public/images/appstoreBadge.svg"
                alt=""
                style={{ width: "20%", marginLeft: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
