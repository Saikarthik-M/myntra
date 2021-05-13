import React from "react";
import Bannerimg from "../images/banner1/banner.png";
function Banner1() {
  return (
    <div
      className="mx-4 mob-view-hide"
      style={{ overflow: "hidden", marginTop: "20px", marginBottom: "30px" }}
    >
      <a
        href="https://www.myntra.com/shop/ceo-msg"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="row" style={{ backgroundColor: "#FFF0E9" }}>
          <div className="col-4">
            <img src={Bannerimg} alt="..." className="w-100" />
          </div>
          <div className="col-7">
            <h1 className="pt-5 banner-title">A MESSAGE FROM OUR CEO</h1>
            <h5 className="banner-subs">
              As the country battles the pandemic, we are prioritising the
              health & safety of our employees & partners.Business has taken a
              backseat as everyone's well being is on top of our minds
            </h5>
            <h6
              className="alert "
              style={{
                backgroundColor: "black",
                color: "white",
                display: "inline-block",
                marginTop: "20px"
              }}
            >
              + READ THE FULL MESSAGE
            </h6>
          </div>
        </div>
      </a>
    </div>
  );
}
export default Banner1;
