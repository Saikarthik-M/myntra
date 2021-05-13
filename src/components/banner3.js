import React from "react";
import Bannerimg1 from "../images/banner3/banner1.png";
import Bannerimg2 from "../images/banner3/banner2.png";
function Banner3() {
  return (
    <a
      href="https://myntra.giveindia.org/"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="row mt-2">
        <div className="col-4">
          <img src={Bannerimg2} alt="..." className="w-100" />
        </div>
        <div className="col-4 text-center py-md-5 py-lg-5 py-xl-5 py-0 banner-title">
          <img src={Bannerimg1} alt="..." width="50%" />
          <h1 style={{ fontSize: "1.3vw", opacity: "0.7" }} className="px-3">
            Help Critical Patients In The Fight Against Covid-19
          </h1>
        </div>
        <div className="col-4 text-center py-md-5 py-lg-5 py-xl-5 py-0">
          <h3
            className="alert"
            style={{
              fontSize: "1.4vw",
              backgroundColor: "#FE5150",
              color: "white",
              display: "inline-block"
            }}
          >
            + Donate Now
          </h3>
        </div>
      </div>
    </a>
  );
}

export default Banner3;
