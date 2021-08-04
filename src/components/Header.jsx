import React from "react";

import logo from "../media/logo/banana.webp";
import arrowDown from "../media/assets/icons/down-arrow.png";

const Header = () => {
	return (
		<header>
			<img
				src={logo}
				alt="Imagen logo pagina principal"
				className="header--img-logo"
			/>
			<div className="header--title-container">
				<h1>La próxima revolución en el intercambio de criptomonedas.</h1>
				<p>
					BananaBit te ayuda a navegar entre los diferentes precios y
					tendencias.
				</p>
				<a href="#plans" className="header--button">
					Conoce Nuestros Planes
					{/* <img
						src={arrowDown}
						alt="flecha hacia abajo"
						className="arrow-down"
					/> */}
				</a>
			</div>
		</header>
	);
};

export default Header;
