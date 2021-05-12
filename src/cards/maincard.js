import React from "react";

function MainCard(props) {
  return (
    <div class="col-5 col-md-2 col-xl-2 col-lg-2 mx-3">
      <a href={props.url} style={{ textDecoration: "none" }}>
        <div class="card" style={{ width: "15rem", border: "none" }}>
          <img src={props.src} class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-title" style={{ color: "black" }}>
              {props.heading}
            </h6>
            <p
              class="card-text mt-n1"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "10px" }}
            >
              {props.description}
            </p>
            <p
              style={{ color: "rgba(0,0,0,0.2)", fontSize: "10px" }}
              class="mt-n2"
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
