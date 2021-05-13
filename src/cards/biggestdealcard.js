import React from "react";

function BiggestDealCard(props) {
  return (
    <div className="col-11 col-md-5 col-lg-3 col-xl-2 mx-5 mx-md-3 mx-lg-3 mx-xl-3  my-4">
      <a href={props.url} style={{ textDecoration: "none" }}>
        <div
          className="card"
          style={{
            width: "15rem",
            border: "none",
            backgroundColor: props.color
          }}
        >
          <img
            src={props.src1}
            alt="..."
            width="80%"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "25px",
              borderRadius: "10px"
            }}
            className="shadow"
          />
          <img
            src={props.src2}
            alt="..."
            width={props.width}
            className="mx-auto pt-3"
          />
          <div className="card-body">
            <h4
              className="card-text text-center mt-n3 pb-4"
              style={{ color: "rgba(0,0,0,0.7)" }}
            >
              {props.offer}
            </h4>
          </div>
        </div>
      </a>
    </div>
  );
}
export default BiggestDealCard;
