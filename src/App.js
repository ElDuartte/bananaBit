import Header from "./components/Header";
import MainExchangeContainer from "./components/MainExchangeContainer.jsx";
import MainProductDetail from "./components/MainProductDetail.jsx";
import SearchCoin from "./components/SearchCoin";
import MainBitcoinImg from "./components/MainBitcoinImg";
import MainPlansContainer from "./components/MainPlansContainer";
import Footer from "./components/Footer";

import "./index.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<MainExchangeContainer />
			<SearchCoin />
			<MainProductDetail />
			<MainBitcoinImg />
			<MainPlansContainer />
			<Footer />
		</div>
	);
}

export default App;
