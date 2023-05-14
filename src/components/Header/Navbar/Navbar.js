import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { GrRestaurant } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [sticky, setSticky] = useState(false);

	const handleStickyNav = () => {
		if (window.scrollY >= 50) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleStickyNav);
	});

	return (
		<div className={`nav ${sticky ? "sticky" : ""}`}>
			<motion.div
				className="nav-bar wrapper"
				initial={{ y: "-2rem", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 2,
					type: "spring",
				}}>
				<div className="restaurant-name">
					<GrRestaurant className="logo"></GrRestaurant>
					<p className="name">Pane e Vino</p>
				</div>
				<ul className="nav-links">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#about">About Us</a>
					</li>
					<li>
						<a href="#menu">Menu</a>
					</li>
					<li>
						<a href="#contact">Contact Us</a>
					</li>
				</ul>
				<button
					className="btn-burger"
					onClick={() => {
						setOpen((prev) => !prev);
					}}>
					
						<GiHamburgerMenu></GiHamburgerMenu>
					
				</button>

				<ul className={`burger-nav-links ${open ? "active" : ""}`}>
					<button
						className="btn-close"
						onClick={() => setOpen((prev) => !prev)}>
						<AiOutlineClose></AiOutlineClose>
					</button>
					<li>
						<a href="#" onClick={() => setOpen((prev) => !prev)}>
							Home
						</a>
					</li>
					<li>
						<a href="#about" onClick={() => setOpen((prev) => !prev)}>
							About Us
						</a>
					</li>
					<li>
						<a href="#menu" onClick={() => setOpen((prev) => !prev)}>
							Menu
						</a>
					</li>
					<li>
						<a href="#contact" onClick={() => setOpen((prev) => !prev)}>
							Contact Us
						</a>
					</li>

					<a href="tel:245-654-876">
						<button className=" btn-burger-book">Book Table</button>
					</a>
				</ul>

				<a href="tel:245-654-876" className="btn-book">
					<button className="btn">Book Table</button>
				</a>
			</motion.div>
		</div>
	);
};

export default Navbar;
