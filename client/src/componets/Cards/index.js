import React from "react";
import {Button} from 'react-native'

function Card(props) {//this is handed a picture and id
  return (
	 <Button style = {{background: 'URL(${props.imgArray})'}}>
	 </Button>
  );
}
export default Card;

