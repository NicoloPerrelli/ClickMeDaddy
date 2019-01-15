import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
	 	<ul>
			 <li>
			 	Clicky Game
			 </li>
			 <li >
				Click Something to Start
			 </li>
			 
			 <li>
				 Score: {props.scores.now} | Top Score: {props.scores.top}
			 </li>
		</ul>
    </nav>
  );
}

export default Nav;
