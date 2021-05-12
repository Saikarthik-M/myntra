import React from "react";

function DealsOfTheDayCard2(props) {
  return (
    <div class="col-5 col-md-4 col-lg-2 col-xl-2 mx-3 my-4">
      <a
        href={props.url}
        style={{ textDecoration: "none", color: "grey" }}
        class="dealsfont"
      >
        <div class="card h-100" style={{ width: "15rem", border: "none" }}>
          <img src={props.src} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title" style={{ marginTop: props.margin }}>
              <span class="mr-3">
                <img src={props.src1} alt="..." width={props.width1} />
              </span>
              <span>
                <img src={props.src2} alt="..." width={props.width2} />
              </span>
            </h5>
            <h2 class="card-text">{props.description1}</h2>
            <h4 class="card-text mt-n3">{props.description2}</h4>
            <small class="dealsend">*T&C apply</small>
          </div>
        </div>
      </a>
    </div>
  );
}

export default DealsOfTheDayCard2;
