import React from "react";

function DealsOfTheDayCard2(props) {
  return (
    <div className="col-11 col-md-5 col-lg-3 col-xl-2 mx-5 mx-md-3 mx-lg-3 mx-xl-3  my-4">
      <a
        href={props.url}
        style={{ textDecoration: "none", color: "grey" }}
        className="dealsfont"
      >
        <div className="card h-100" style={{ width: "15rem", border: "none" }}>
          <img src={props.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ marginTop: props.margin }}>
              <span className="mr-3">
                <img src={props.src1} alt="..." width={props.width1} />
              </span>
              <span>
                <img src={props.src2} alt="..." width={props.width2} />
              </span>
            </h5>
            <h2 className="card-text">{props.description1}</h2>
            <h4 className="card-text mt-n3">{props.description2}</h4>
            <small className="dealsend">*T&C apply</small>
          </div>
        </div>
      </a>
    </div>
  );
}

export default DealsOfTheDayCard2;
