import React from "react";
function RightSection({ img_Url, title, para, link_name }) {
  return (
    <>
      <div className="container">
        <div className="row p-5 border-top">
          <div
            className="col-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1>{title}</h1>
            <p>{para}</p>
            <a href="#" style={{ textDecoration: "none" }}>
              {link_name}{" "}
              {link_name ? <i class="fa-solid fa-arrow-right"></i> : null}
            </a>
          </div>
          <div className="col-6 ">
            <a href="">
              <img src={img_Url} alt="" style={{ width: "75%" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
