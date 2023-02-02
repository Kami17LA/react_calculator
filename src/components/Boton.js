import React from "react";
import './Boton.css'

function Boton(props) {

	const isOperator = valor => {
		return isNaN(valor) && (valor !== '.') && (valor !== '=')
		/* no es un operador si contiene vacio,punto ó igual */
	}

	return(
		<div className={`container-boton ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
			{props.children}
		</div>
	)
}

export default Boton;