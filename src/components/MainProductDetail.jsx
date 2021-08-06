import React from "react";
import miniLogo from "../media/logo/banana.webp";

const MainProductDetail = () => {
	return (
		<section className="main-product-detail">
			<img
				className="product-detail--banana-logo"
				src={miniLogo}
				alt="imagen logo pequeño"
			></img>
			<div className="product-detail--title">
				<h2>Creamos un producto sin comparación.</h2>
				<p>Confiable y diseñado para su uso diario.</p>
			</div>
			<section className="product-cards-container">
				<article className="product-detail-card">
					<span className="icon-card clock"></span>
					<h3 className="product-card-title">Tiempo real</h3>
					<p className="product-card-body">
						Nuestra API toma información minuto a minuto sobre las tareas que
						determinan el comportamiento.
					</p>
				</article>
				<article className="product-detail-card">
					<span className="icon-card eye"></span>
					<h3 className="product-card-title">No hay tasas escondidas</h3>
					<p className="product-card-body">
						Ni en la compra o al momento de exit. BananaBit siempre te muestra
						el costo real de lo estás alquilando.
					</p>
				</article>
				<article className="product-detail-card">
					<span className="icon-card dollar"></span>
					<h3 className="product-card-title">Compara monedas</h3>
					<p className="product-card-body">
						No más rumores, con BananaBit sabrás el valor real de cada moneda en
						el mercado actual.
					</p>
				</article>
				<article className="product-detail-card">
					<span className="icon-card circle"></span>
					<h3 className="product-card-title">Información confiable</h3>
					<p className="product-card-body">
						Nuestras fuentes están 100% verificadas y continuamos auditando su
						contenido mientras se actualizan.
					</p>
				</article>
			</section>
		</section>
	);
};

export default MainProductDetail;
