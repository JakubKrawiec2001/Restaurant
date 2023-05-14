import React from "react";
import "./Footer.scss";
import "../../App.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
	return (
		<section className="footer" id="contact">
			
				<div className="footer-container">
					<div className="contact-box">
						<h2 className="footer-title">Contact Us</h2>
						<p className="street">9 W 53rd St, New York, NY 10019, USA</p>
						<div className="phone">
							<p>+1 647-748-9814</p>
							<p>+1 237-038-7340</p>
						</div>
					</div>
					<div className="main-box">
						<h2 className="footer-title">Pene e Vino</h2>
						<p>
							The Best Way to Find Yourself Is To Lose Yourself in The Service
							Of Others.
						</p>
						<div className="socials">
							<BsFacebook className="social-icon"></BsFacebook>
							<AiFillInstagram className="social-icon"></AiFillInstagram>
							<AiFillTwitterCircle className="social-icon"></AiFillTwitterCircle>
						</div>
						<p className="footer-date">
							&copy; 2023 | Pane e Vino Restaurant | Made By Jakub Krawiec
						</p>
					</div>
					<div className="hours-box">
						<h2 className="footer-title">Working Hours</h2>
						<div className="hours-box">
							<p className="hours-days">Monday-Friday</p>
							<p>08:00 Am - 10:00 Pm</p>
						</div>
						<div className="hours-box">
							<p className="hours-days">Saturday-Sunday</p>
							<p>07:00 Am - 08:00 Pm</p>
						</div>
					</div>
				</div>
			
		</section>
	);
};

export default Footer;
