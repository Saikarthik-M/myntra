import React from "react";

function DealsOfTheDayCard(props) {
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
            <h5 class="card-title dealsborder">
              <span class="material-icons" style={{ color: "black" }}>
                {props.alt1}
              </span>
              <span>{props.alt2}</span>
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

export default DealsOfTheDayCard;
