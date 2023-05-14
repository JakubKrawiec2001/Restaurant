import React from "react";
import "./Hero.scss";
import { BsArrowRight } from "react-icons/bs";
import hero1 from "../../../assets/images/hero-1.jpg";
import hero2 from "../../../assets/images/hero-2.jpg";
import hero3 from "../../../assets/images/hero-3.jpg";
import hero4 from "../../../assets/images/hero-4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Hero = () => {
	const settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 2000,
		autoplaySpeed: 4000,
		arrows: false,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	};
	return (
		<main>
			<div className="hero-section wrapper">
				<div className="fade"></div>
				<div className="hero-left">
					<p className="little-text">Choose your flavor</p>
					<div className="line"></div>
					<motion.h1
						initial={{ y: "2rem", opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 2,
							type: "spring",
						}}>
						It's Not Just Food,<br></br> It's An Experience.
					</motion.h1>
					<motion.p
						className="description"
						initial={{ y: "2rem", opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 2,
							type: "spring",
						}}>
						Take a seat and enjoy the best and fresh food with your loved ones
					</motion.p>

					<a href="#menu">
						<button className="btn btn-hero">
							Explore Menu <BsArrowRight></BsArrowRight>
						</button>
					</a>
				</div>
				<motion.div
					className="hero-right"
					initial={{ x: "7rem", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						duration: 2,
						type: "spring",
					}}>
					<Slider {...settings}>
						<div>
							<img src={hero1} alt="Photo of the sandwich with eggs"></img>
						</div>
						<div>
							<img src={hero2} alt="Photo of the sandwich"></img>
						</div>
						<div>
							<img src={hero3} alt="Photo of the burger"></img>
						</div>
						<div>
							<img src={hero4} alt="Photo of the pizza"></img>
						</div>
					</Slider>
				</motion.div>
			</div>
		</main>
	);
};

export default Hero;
