import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Container } from '../../../UCFVW201808FSF2/class-content/20-react/20.2/08-Stu_Recipes/Solved/client/src/components/Grid';
import Stack from "./imgArray"

class App extends Component {
	state = {
		now: 0,
		top: 0,
		imgArray: []
	};

	componentDidMount(){
		this.setState({
			imgArray: [...Stack]//...used to have working copy vs a modifyable one
		})
	}

	resetCurrent = event => {
		//playertop stays same
		//player now score is set to zero
		//actionFrames are set to not pressed
		//pictures are randomed
		//actionFrames are rendered
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
				<Nav />
				<Jumbotron />
				<Container imgArray={this.state.imgArray}/>
				<Footer />
			</div>
    	);
  	}
}

export default App;
