import React from "react";

const Main = () => {
	return (
		<main>
			<section class="main-exchange-container">
				<div class="backgroundImg"></div>
				<div class="main-exchange-container--title">
					<h2>Visibilizamos todas las tasas de cambio.</h2>
					<p>
						Traemos información en tiempo real de las casas de cambio y las
						monedas más importantes del mundo.
					</p>
				</div>
				<section class="main--table-container">
					<div class="main--table-slide">
						<section class="table-slide">
							<p class="main--table-title">Monedas</p>
							<div class="main--grid-container">
								<div class="main--grid-child">Bitcoin</div>
								<div class="main--grid-child value">
									$ 1.96 <span class="down"></span>
								</div>
								<div class="main--grid-child">Ethereum</div>
								<div class="main--grid-child value">
									$ 0.07 <span class="up"></span>
								</div>
								<div class="main--grid-child">Ripple</div>
								<div class="main--grid-child value">
									$ 2.15 <span class="down"></span>
								</div>
								<div class="main--grid-child">Stellar</div>
								<div class="main--grid-child value">
									$ 4.96 <span class="down"></span>
								</div>
							</div>
							<p class="main--table-update">
								<strong>Actualizado:</strong>23 Feb 23:23
							</p>
						</section>
						<section class="table-slide">
							<p class="main--table-title-second">Comisiones</p>
							<div class="main--grid-container">
								<div class="main--grid-child">Bitcoin</div>
								<div class="main--grid-child value">$ 12.96</div>
								<div class="main--grid-child">Ethereum</div>
								<div class="main--grid-child value">$ 13.07</div>
								<div class="main--grid-child">Ripple</div>
								<div class="main--grid-child value">$ 13.15</div>
								<div class="main--grid-child">Stellar</div>
								<div class="main--grid-child value">$ 14.96</div>
							</div>
							<p class="main--table-update-second">
								<strong>Actualizado:</strong>23 Feb 23:23
							</p>
						</section>
					</div>
				</section>
			</section>
			<section class="main-product-detail">
				<span class="product-detail--batata-logo"></span>
				<div class="product-detail--title">
					<h2>Creamos un producto sin comparación.</h2>
					<p>Confiable y diseñado para su uso diario.</p>
				</div>
				<section class="product-cards-container">
					<article class="product-detail-card">
						<span class="icon-card clock"></span>
						<h3 class="product-card-title">Tiempo real</h3>
						<p class="product-card-body">
							Nuestra API toma información minuto a minuto sobre las tareas que
							determinan el comportamiento.
						</p>
					</article>
					<article class="product-detail-card">
						<span class="icon-card eye"></span>
						<h3 class="product-card-title">No hay tasas escondidas</h3>
						<p class="product-card-body">
							Ni en la compra o al momento de exit. Barabit siempre te muestra
							el costo real de lo estás alquilando.
						</p>
					</article>
					<article class="product-detail-card">
						<span class="icon-card dollar"></span>
						<h3 class="product-card-title">Compara monedas</h3>
						<p class="product-card-body">
							No más rumores, con Batabit sabrás el valor real de cada moneda en
							el mercado actual.
						</p>
					</article>
					<article class="product-detail-card">
						<span class="icon-card circle"></span>
						<h3 class="product-card-title">Información confiable</h3>
						<p class="product-card-body">
							Nuestras fuentes están 100% verificadas y continuamos auditando su
							contenido mientras se actualizan.
						</p>
					</article>
				</section>
			</section>
			<section class="bitcoin-img-container">
				<h2>Conócelo hoy.</h2>
			</section>
			<section id="plans" class="main-plans-container">
				<di class="plans--title">
					<h2>Escoger el plan que mejor se ajuste a ti.</h2>
					<p>Cualquier plan te da acceso a nuestra plataforma</p>
				</di>
				<section class="plans-container--slider">
					<article class="plans-container--card">
						<p class="recomendado">Recomendado</p>
						<div class="plan-info-container">
							<h3 class="plan-card--title">Pago Anual</h3>
							<p class="plan-card--price">
								<span>$</span>99
							</p>
							<p class="plan-card--saving">
								* Ahorras $129 comparado al plan mensual.
							</p>
							<button class="plan-card--ca">
								Escoger este <span></span>
							</button>
						</div>
					</article>
					<article class="plans-container--card">
						<p class="recomendado-second">Básico</p>
						<div class="plan-info-container">
							<h3 class="plan-card--title">Pago Mensual</h3>
							<p class="plan-card--price">
								<span>$</span>19
							</p>
							<p class="plan-card--saving">
								Plan basico con todas las ventajas
							</p>
							<button class="plan-card--ca">
								Escoger este <span></span>
							</button>
						</div>
					</article>
					<article class="plans-container--card ">
						<p class="recomendado-third">limitado</p>
						<div class="plan-info-container">
							<h3 class="plan-card--title">De por vida</h3>
							<p class="plan-card--price">
								<span>$</span>199
							</p>
							<p class="plan-card--saving">
								Exclusivo para los primeros 420 clientes
							</p>
							<button class="plan-card--ca">
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
