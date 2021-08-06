import React from "react";

const MainExchangeContainer = () => {
	return (
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
	);
};

export default MainExchangeContainer;
