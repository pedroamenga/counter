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
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div className="cuarto">0</div>;<div className="tercero">0</div>;
			<div className="segundo">0</div>;<div className="primero">0</div>;
		</div>
	);
}

//render your react application
setInterval(function() {
	alert("Hello");
}, 3000);
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
