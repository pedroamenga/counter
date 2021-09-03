//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="Contador">
			<div className={"clock"}></div>;<div className={"four"}>0</div>;
			<div className={"three"}>0</div>;<div className={"two"}>0</div>;
			<div className={"one"}>0</div>;
		</div>
	);
}

//render your react application
setInterval(function() {
	alert("Hello");
}, 3000);
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
