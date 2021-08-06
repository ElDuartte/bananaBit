import React from "react";

const MainPlansContainer = () => {
	return (
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
							<span>$</span>152
						</p>
						<p className="plan-card--saving">
							* Ahorras $100 comparado <br /> al plan mensual.
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
							<span>$</span>21
						</p>
						<p className="plan-card--saving">
							Plan básico con todas <br />
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
	);
};

export default MainPlansContainer;
