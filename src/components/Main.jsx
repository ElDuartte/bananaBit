import React from "react";

import miniLogo from "../media/logo/banana.webp";

const Main = () => {
	return (
		<main>
			<section className="main-exchange-container">
				<div className="backgroundImg"></div>
				<div className="main-exchange-container--title">
					<h2>Visibilizamos todas las tasas de cambio.</h2>
					<p>
						Traemos información en tiempo real de las casas de cambio y las
						monedas más importantes del mundo.
					</p>
				</div>
				<section className="main--table-container">
					<div className="main--table-slide">
						<section className="table-slide">
							<p className="main--table-title">Monedas</p>
							<div className="main--grid-container">
								<div className="main--grid-child">Bitcoin</div>
								<div className="main--grid-child value">
									$ 1.96 <span className="down"></span>
								</div>
								<div className="main--grid-child">Ethereum</div>
								<div className="main--grid-child value">
									$ 0.07 <span className="up"></span>
								</div>
								<div className="main--grid-child">Ripple</div>
								<div className="main--grid-child value">
									$ 2.15 <span className="down"></span>
								</div>
								<div className="main--grid-child">Stellar</div>
								<div className="main--grid-child value">
									$ 4.96 <span className="down"></span>
								</div>
							</div>
							<p className="main--table-update">
								<strong>Actualizado:</strong>23 Feb 23:23
							</p>
						</section>
						<section className="table-slide">
							<p className="main--table-title-second">Comisiones</p>
							<div className="main--grid-container">
								<div className="main--grid-child">Bitcoin</div>
								<div className="main--grid-child value">$ 12.96</div>
								<div className="main--grid-child">Ethereum</div>
								<div className="main--grid-child value">$ 13.07</div>
								<div className="main--grid-child">Ripple</div>
								<div className="main--grid-child value">$ 13.15</div>
								<div className="main--grid-child">Stellar</div>
								<div className="main--grid-child value">$ 14.96</div>
							</div>
							<p className="main--table-update-second">
								<strong>Actualizado:</strong>23 Feb 23:23
							</p>
						</section>
					</div>
				</section>
			</section>
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
							No más rumores, con BananaBit sabrás el valor real de cada moneda
							en el mercado actual.
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
			<section className="bitcoin-img-container">
				<h2>Conócelo hoy.</h2>
			</section>
			<section id="plans" className="main-plans-container">
				<div className="plans--title">
					<h2>Escoger el plan que mejor se ajuste a ti.</h2>
					<p>Cualquier plan te da acceso a nuestra plataforma</p>
				</div>
				<section className="plans-container--slider">
					<article className="plans-container--card">
						<p className="recomendado">Recomendado</p>
						<div className="plan-info-container">
							<h3 className="plan-card--title">Pago Anual</h3>
							<p className="plan-card--price">
								<span>$</span>99
							</p>
							<p className="plan-card--saving">
								* Ahorras $129 comparado <br /> al plan mensual.
							</p>
							<button className="plan-card--ca">
								Escoger este <span></span>
							</button>
						</div>
					</article>
					<article className="plans-container--card">
						<p className="recomendado-second">Básico</p>
						<div className="plan-info-container">
							<h3 className="plan-card--title">Pago Mensual</h3>
							<p className="plan-card--price">
								<span>$</span>19
							</p>
							<p className="plan-card--saving">
								Plan basico con todas <br />
								las ventajas
							</p>
							<button className="plan-card--ca">
								Escoger este <span></span>
							</button>
						</div>
					</article>
					<article className="plans-container--card ">
						<p className="recomendado-third">limitado</p>
						<div className="plan-info-container">
							<h3 className="plan-card--title">De por vida</h3>
							<p className="plan-card--price">
								<span>$</span>199
							</p>
							<p className="plan-card--saving">
								Exclusivo para los primeros
								<br /> 420 clientes
							</p>
							<button className="plan-card--ca">
								Escoger este <span></span>
							</button>
						</div>
					</article>
				</section>
			</section>
		</main>
	);
};

export default Main;
