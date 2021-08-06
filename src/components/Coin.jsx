import React from "react";

export const Coin = ({
	name,
	image,
	symbol,
	price,
	volume,
	priceChange,
	marketcap,
}) => {
	return (
		<section className="coin-container">
			<div className="coin-slide">
				<div className="coin-item">
					<div className="coin">
						<img src={image} alt="logo crypto" className="coin-logo" />
						<h1 className="coin-name">{name}</h1>
						<p className="coin-symbol">{symbol}</p>
					</div>
					<div className="coin-data">
						<p className="coin-price">€{price}</p>
						<p className="coin-volume">€{volume.toLocaleString()}</p>
						{priceChange < 0 ? (
							<p className="coin-percent red">{priceChange.toFixed(2)}%</p>
						) : (
							<p className="coin-percent green">{priceChange.toFixed(2)}%</p>
						)}
						<p className="coin-marketcap">
							Mkt Cap: €{marketcap.toLocaleString()}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
