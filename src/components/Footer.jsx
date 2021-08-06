import React from "react";
import logo from "../media/logo/banana.webp";

const Footer = () => {
	return (
		<footer>
			<section className="left">
				<a
					href="https://www.linkedin.com/in/juan-felipe-duarte-monta%C3%B1ez-22505b197/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="material-icons btn_social">person_outline</i>
				</a>
				<a href="https://github.com/ElDuartte" target="_blank" rel="noreferrer">
					<i className="material-icons btn_social">code</i>
				</a>
			</section>
			<section className="rigth">
				<img src={logo} alt="Logo de BananaBit 2021" className="logoImg" />
			</section>
		</footer>
	);
};

export default Footer;
