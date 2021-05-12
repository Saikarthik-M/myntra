import React from "react";
import Bannerimg from "../images/banner1/banner.png";
function Banner1() {
  return (
    <div class="mx-4 mob-view-hide my-4" style={{ overflowX: "hidden" }}>
      <a
        href="https://www.myntra.com/shop/ceo-msg"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div class="row" style={{ backgroundColor: "#FFF0E9" }}>
          <div class="col-4">
            <img src={Bannerimg} alt="..." class="w-100" />
          </div>
          <div class="col-7">
            <h1 class="pt-5">A MESSAGE FROM OUR CEO</h1>
            <h5>
              As the country battles the pandemic, we are prioritising the
              health & safety of our employees & partners.Business has taken a
              backseat as everyone's well being is on top of our minds
            </h5>
            <h6
              class="alert "
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
