import React from "react";

function BannerCard(props) {
  return (
    <div className="row">
      <div className="col-6">
        <img src={props.src} alt="..." className="w-100 h-100 mr-0 pr-0" />
      </div>
      <div
        className="col-6 ml-n3 banner-middle-parent"
        style={{
          backgroundColor: props.color
        }}
      >
        <div className="banner-middle-child banner-title">
          <h1 className="text-left" style={{ fontSize: "3vw" }}>
            {props.heading}
          </h1>
          <h3 className="text-left" style={{ fontSize: "2vw" }}>
            {props.description}
          </h3>
          <h3 className="text-left" style={{ fontSize: "1vw" }}>
            +EXPLORE
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
