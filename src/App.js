import Header from "./components/Header";
import MainExchangeContainer from "./components/MainExchangeContainer.jsx";
import MainProductDetail from "./components/MainProductDetail.jsx";
import Footer from "./components/Footer";
import InfoCard from "./components/InfoCard";
import MainBitcoinImg from "./components/MainBitcoinImg";
import MainPlansContainer from "./components/MainPlansContainer";

import "./index.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<InfoCard name="bitcoin" />
			<MainExchangeContainer />
			<MainProductDetail />
			<MainBitcoinImg />
			<MainPlansContainer />
			<Footer />
		</div>
	);
}

export default App;
