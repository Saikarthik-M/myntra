import React from "react";

function MainCard(props) {
  return (
    <div className="col-11 col-md-5 col-lg-3 col-xl-2 mx-5 mx-md-3 mx-lg-3 mx-xl-3  my-4">
      <a href={props.url} style={{ textDecoration: "none" }}>
        <div className="card h-100" style={{ width: "15rem", border: "none" }}>
          <img src={props.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title banner-title" style={{ color: "black" }}>
              {props.heading}
            </h6>
            <p
              className="card-text mt-n1"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "10px" }}
            >
              {props.description}
            </p>
            <p
              style={{ color: "rgba(0,0,0,0.2)", fontSize: "10px" }}
              className="mt-n2"
            >
              +EXPLORE
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default MainCard;
