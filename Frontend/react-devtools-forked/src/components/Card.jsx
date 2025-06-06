import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
          <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        <Info infoDetails={props.tel} />
        <Info infoDetails={props.email} />
      </div>
    </div>
  );
}

export default Card;
