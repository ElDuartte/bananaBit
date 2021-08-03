import React from "react";

const Header = () => {
	return (
		<header>
			<img src="./media/logo/banana.webp" alt="Imagen logo pagina principal" />
			<div class="header--title-container">
				<h1>La próxima revolución en el intercambio de criptomonedas.</h1>
				<p>
					BananaBit te ayuda a navegar entre los diferentes precios y
					tendencias.
				</p>
				<a href="#plans" class="header--button">
					Conoce Nuestros Planes
				</a>
			</div>
		</header>
	);
};

export default Header;
