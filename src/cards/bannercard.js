import React from "react";

function BannerCard(props) {
  return (
    <div class="row">
      <div class="col-6">
        <img src={props.src} alt="..." class="w-100 h-100 mr-0 pr-0" />
      </div>
      <div
        class="col-6 ml-n3 banner-middle-parent"
        style={{
          backgroundColor: props.color
        }}
      >
        <div class="banner-middle-child">
          <h1 class="text-left" style={{ fontSize: "3vw" }}>
            {props.heading}
          </h1>
          <h3 class="text-left" style={{ fontSize: "2vw" }}>
            {props.description}
          </h3>
          <h3 class="text-left" style={{ fontSize: "1vw" }}>
            +EXPLORE
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
