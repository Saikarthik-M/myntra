import React from "react";
import Bannerimg1 from "../images/banner3/banner1.png";
import Bannerimg2 from "../images/banner3/banner2.png";
function Banner3() {
  return (
    <a
      href="https://myntra.giveindia.org/"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div class="row mt-2">
        <div class="col-4">
          <img src={Bannerimg2} alt="..." class="w-100" />
        </div>
        <div class="col-4 text-center">
          <img src={Bannerimg1} alt="..." width="50%" />
          <h1 style={{ fontSize: "1.3vw" }}>
            Help Critical Patients In The Fight Against Covid-19
          </h1>
        </div>
        <div class="col-4 text-center">
          <h3
            class="alert"
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
