import React from "react";
import './ClearBoton.css'

const ClearBoton = (props) => {
	return(
		<div className="clear-boton">
			{props.children}
		</div>
	)
}

export default ClearBoton;