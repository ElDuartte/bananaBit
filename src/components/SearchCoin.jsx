import React, { useEffect, useState } from "react";
import axios from "axios";
import { Coin } from "./Coin";

function SearchCoin() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false"
			)
			.then((res) => {
				setCoins(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filterCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="coin-app main--table-container">
			<h1 className="coin-text">Top 10 monedas</h1>
			<div className="main--table-slide">
				{filterCoins.map((coin) => {
					return (
						<Coin
							hey={coin.id}
							name={coin.name}
							image={coin.image}
							symbol={coin.symbol}
							marketcap={coin.market_cap}
							price={coin.current_price}
							priceChange={coin.price_change_percentage_24h}
							volume={coin.total_volume}
						/>
					);
				})}
			</div>
		</div>
	);
}
export default SearchCoin;
