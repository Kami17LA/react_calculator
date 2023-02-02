import React from "react";

function Boton(props) {

	const isOperator = valor => {
		return isNaN(valor) && (valor !== '.') && (valor !== '=')
	}

	return(
		<div className={`container-boton ${isOperator(props.children) ? 'operador' : ''}`.trimEnd()}>
			{props.children}
		</div>
	)
}

export default Boton;