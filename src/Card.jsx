import React from "react";
import Foto from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">
          {props.name} {props.id}
        </h2>
        <Foto url={props.url} />
      </div>
      <div className="bottom">
        <Details tel={props.tel} email={props.email} bday={props.bday} />
      </div>
    </div>
  );
}

export default Card;
