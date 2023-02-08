import React from "react";
import './ClearBoton.css'

const ClearBoton = (props) => {
	return(
		<div className="clear-boton" onClick={props.manejarClear}>
			{props.children}
		</div>
	)
}

export default ClearBoton;