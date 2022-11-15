import React from "react";

function Details(props) {
  return (
    <div>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
      <p className="info">{props.bday}</p>
    </div>
  );
}

export default Details;
