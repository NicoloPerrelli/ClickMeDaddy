import React, { Component } from 'react';
//import Jumbotron from "./components/Jumbotron";
//import Nav from "./components/Nav";
//import Footer from "./components/Footer";
import Container from "./componets/Container"
import Stack from "./imgArray"

class App extends Component {
	state = {
		now: 0,
		top: 0,
		imgArray: []
	};

	random = (imgArray) => {
		let array=(imgArray.length),
		temp,
		hold;
		
		while (array !== 0) {
			hold = Math.floor(Math.random() * array);
			array -= 1;
			temp = imgArray[array];
			imgArray[array] = imgArray[hold];
			imgArray[hold] = temp;
		 }
		 
		 return imgArray;
	  };

	componentDidMount(){
		this.setState({
			imgArray: [...Stack]//...used to have working copy vs a modifyable one
		})
		this.random(this.imgArray)
	}

	resetCurrent(){
		this.setState((state) =>{//player now score is set to zero
			return {now:0}
		})

		for(let i = 0; i < 12; i++){//actionFrames are set to not pressed
			this.setState((state) => {
				state.imgArray.i.isPressed = false;
			})
		}

		this.random(this.imgArray)//pictures are randomed
	}

	win = event => {//run win render

	}

	handlePlayerPress = event => {
		//prosses info of the button and do right thing
		if (this.pressed){//if button was pressed before then...
			//run game resetCurrent()
		}
		else{//not pressed yet
			//run add score
			//check win()
			//change the pressed actionFrame to pressed
			//random and run again
		}
	}
  	render() {
    	return (
			<div>
				<Container props={this.state.imgArray}/>
			</div>
    	);
  	}
}

export default App;
