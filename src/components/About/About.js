import React from "react";
import "./About.scss";
import "../../App.scss";
import about1 from "../../assets/images/about/about-1.jpg";
import about2 from "../../assets/images/about/about-2.jpg";
import about3 from "../../assets/images/about/about-3.jpg";
import about4 from "../../assets/images/about/about-4.jpg";
import about5 from "../../assets/images/about/about-5.jpg";
import about6 from "../../assets/images/about/about-6.jpg";
import about7 from "../../assets/images/about/about-7.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="wrapper">
				<h2 className="section-title">
					About <span className="gold-text">Us.</span>
				</h2>
				<div className="about-body">
					<p className="about-text">
						In our work, we follow the simple principle <br></br>
						<span className="gold-about-text">
							<RiDoubleQuotesL></RiDoubleQuotesL> Through the stomach to the
							heart <RiDoubleQuotesR></RiDoubleQuotesR>
						</span>
					</p>
					<div className="image-container-one">
						<img className="photo-one" src={about1} alt="Photo of restaurants"></img>
						<img className="photo-two" src={about2} alt="Photo of restaurants"></img>
						<img className="photo-three" src={about3} alt="Photo of restaurants"></img>
						<img className="photo-four" src={about4} alt="Photo of restaurants"></img>
					</div>
					<p className="about-text">
						We invite you to the best restaurant in town. Our ingredients are
						delivered from the best and proven suppliers. We will welcome you in
						our cozy home. Visit us and see for yourself.
					</p>

					<div className="image-container-two">
						<img className="photo-one" src={about5} alt="Photo of the cook"></img>
						<img className="photo-two" src={about6} alt="Photo of the cook"></img>
						<img className="photo-three" src={about7} alt="Photo of the kitchen"></img>
					</div>
					<p className="about-text">
						Enjouing each one moment, respect for quality and craftsmanship. A
						long meeting at the table with family and friends - this is where we
						are. Our chefs will make your palate never forget this moment of
						pleasure.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
