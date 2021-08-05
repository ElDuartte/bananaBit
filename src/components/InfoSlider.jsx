import React, { Component } from "react";

export default class InfoSlider extends Component {
	constructor() {
		super();
		this.state = {
			coin: {},
			error: false,
		};
	}

	getPrice = async (e) => {
		//botton prevenir default
		e.preventDefault();

		const coin = e.target.elements.coin.value;

		if (coin) {
			const api_call = await fetch(
				"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
			);
			const response = await api_call.json();

			this.setState({
				coin: `${response.name}`,
				error: false,
			});
		} else {
			this.setState({ error: true });
		}
	};
	render() {
		return <div>{this.coin}</div>;
	}
}
