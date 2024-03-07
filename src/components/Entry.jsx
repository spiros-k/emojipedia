import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.term}>
          {props.img}
        </span>
        <span>
          <h2>{props.term}</h2>
        </span>
      </dt>
      <dd>{props.desription}</dd>
    </div>
  );
}
export default Entry;
