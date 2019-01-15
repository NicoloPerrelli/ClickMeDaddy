import React from "react";
import Cards from "../Cards"

function Container(props) {
  return (
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
	<Cards imgArray = {props.imgArray.map}/>
  </div>
  )
}

export default Container;


