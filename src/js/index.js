//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import { PropTypes } from "prop-types";

function SimpleCounter(props) {
	return (
		<div className="counter">
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div className="cuarto">{props.cuarto % 10}</div>;
			<div className="tercero">{props.tercero % 10}</div>;
			<div className="segundo">{props.segundo % 10}</div>;
			<div className="primero">{props.primero % 10}</div>;
		</div>
	);
}

SimpleCounter.propTypes = {
	primero: PropTypes.number,
	segundo: PropTypes.number,
	tercero: PropTypes.number,
	cuarto: PropTypes.number
};

let counter = 0;
//render your react application
setInterval(function() {
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			primero={uno}
			segundo={dos}
			tercero={tres}
			cuarto={cuatro}
		/>,
		document.querySelector("#app")
	);
}, 1000);
