import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import InfoSlider from "./components/InfoSlider";

import "./index.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<InfoSlider name="bitcoin" />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
