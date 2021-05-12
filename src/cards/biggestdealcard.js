import React from "react";

function BiggestDealCard(props) {
  return (
    <div class="col-5 col-md-2 col-xl-2 col-lg-2 mx-3 my-4">
      <a href={props.url} style={{ textDecoration: "none" }}>
        <div
          class="card"
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
            class="shadow"
          />
          <img
            src={props.src2}
            alt="..."
            width={props.width}
            class="mx-auto pt-3"
          />
          <div class="card-body">
            <h4
              class="card-text text-center mt-n3 pb-4"
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
