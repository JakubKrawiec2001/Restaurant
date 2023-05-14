import React from "react";
import "../../App.scss";
import "./Menu.scss";
import burger1 from "../../assets/images/burger-1.jpg";
import burger2 from "../../assets/images/burger-2.jpg";
import burger3 from "../../assets/images/burger-3.jpg";
import pizza1 from "../../assets/images/pizza-1.jpg";
import pizza2 from "../../assets/images/pizza-2.jpg";
import pizza3 from "../../assets/images/pizza-3.jpg";
import salad1 from "../../assets/images/salad-1.jpg";
import salad2 from "../../assets/images/salad-2.jpg";
import salad3 from "../../assets/images/salad-3.jpg";
import additives1 from "../../assets/images/Additives-1.jpg";
import additives2 from "../../assets/images/Additives-2.jpg";
import additives3 from "../../assets/images/Additives-3.jpg";
import desserts1 from "../../assets/images/Desserts-1.jpg";
import desserts2 from "../../assets/images/Desserts-2.jpg";
import desserts3 from "../../assets/images/Desserts-3.jpg";
import drink1 from "../../assets/images/drink-1.jpg";
import drink2 from "../../assets/images/drink-2.jpg";
import drink3 from "../../assets/images/drink-3.jpg";
import shape1 from "../../assets/images/shape-1.png";
import shape2 from "../../assets/images/shape-2.png";
import shape3 from "../../assets/images/shape-3.png";
import shape4 from "../../assets/images/shape-4.png";
import shape5 from "../../assets/images/shape-5.png";

const Menu = () => {
	return (
		<section className="menu" id="menu">
			<img className="shape shape-1" src={shape1}></img>
			<img className="shape shape-2" src={shape2}></img>
			<img className="shape shape-3" src={shape3}></img>
			<img className="shape shape-4" src={shape4}></img>
			<img className="shape shape-5" src={shape5}></img>

			<div className="wrapper">
				<h2 className="section-title">
					Our<span className="gold-text"> Menu.</span>
				</h2>

				<div className="menu-container">
					<div className="menu-box">
						<div className="menu-l">
							<img
								className="menu-img"
								src={pizza1}
								alt="Photo of the pizza"></img>
							<img
								className="menu-img"
								src={pizza2}
								alt="Photo of the pizza"></img>
							<img
								className="menu-img"
								src={pizza3}
								alt="Photo of the pizza"></img>
						</div>
						<div className="menu-r">
							<h3 className="menu-title">Pizza</h3>
							<p className="menu-item">
								Margherita
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 22</span>
								<span className="menu-description">
									dough, tomato sauce, cheese, oregano
								</span>
							</p>

							<p className="menu-item">
								Capriciosa
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 25</span>
								<span className="menu-description">
									dough, tomato sauce, cheese, ham, mushrooms, and oregano
								</span>
							</p>

							<p className="menu-item">
								Pepperoni
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 28</span>
								<span className="menu-description">
									dough, tomato sauce, cheese, pepperoni salami, and oregano
								</span>
							</p>

							<p className="menu-item">
								Campione
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 32</span>
								<span className="menu-description">
									dough, tomato sauce, cheese, ham, sausages, smoked bacon,
									salami, oregano
								</span>
							</p>
							<p className="menu-item">
								Prosciutto
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 29</span>
								<span className="menu-description">
									dough, tomato sauce, cheese, Italian ham, cherry tomatoes,
									arugula, and oregano
								</span>
							</p>
						</div>
					</div>
					<div className="menu-box">
						<div className="menu-l">
							<img
								className="menu-img"
								src={burger1}
								alt="Photo of the burger"></img>
							<img
								className="menu-img"
								src={burger2}
								alt="Photo of the burger"></img>
							<img
								className="menu-img"
								src={burger3}
								alt="Photo of the burger"></img>
						</div>
						<div className="menu-r">
							<h3 className="menu-title">Burgers</h3>
							<p className="menu-item">
								Big Burger
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _
								</span>
								<span className="gold-text"> $ 30</span>
								<span className="menu-description">
									Butter roll, 200 grams of beef, cheese, vegetables, and sauce
								</span>
							</p>

							<p className="menu-item">
								Country Burger
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _
								</span>
								<span className="gold-text"> $ 32</span>
								<span className="menu-description">
									Butter roll, 200 grams of beef, cheese, fried egg, vegetables,
									and sauce
								</span>
							</p>

							<p className="menu-item">
								Fish Burger
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _
								</span>
								<span className="gold-text"> $ 35</span>
								<span className="menu-description">
									Butter roll, fish, cheese, vegetables, and sauce
								</span>
							</p>

							<p className="menu-item">
								Chicken Burger
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _
								</span>
								<span className="gold-text"> $ 29</span>
								<span className="menu-description">
									Butter roll, chicken fillet, cheese, vegetables, and sauce
								</span>
							</p>
							<p className="menu-item">
								Veggie Burger
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _
								</span>
								<span className="gold-text"> $ 38</span>
								<span className="menu-description">
									Butter roll, Philadelphia cheese, vegetables, and sauce
								</span>
							</p>
						</div>
					</div>
					<div className="menu-box">
						<div className="menu-l">
							<img
								className="menu-img"
								src={salad1}
								alt="Photo of the salad"></img>
							<img
								className="menu-img"
								src={salad2}
								alt="Photo of the salad"></img>
							<img
								className="menu-img"
								src={salad3}
								alt="Photo of the salad"></img>
						</div>
						<div className="menu-r">
							<h3 className="menu-title">Salads</h3>
							<p className="menu-item">
								Greek Salad
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 18</span>
								<span className="menu-description">
									Cherry tomatoes, cucumber, salad cheese, black olives, pepper,
									and red onion served on a mix of salads with vinaigrette sauce
									420 g.
								</span>
							</p>

							<p className="menu-item">
								Chicken Salad
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 20</span>
								<span className="menu-description">
									Chicken kebab, cherry tomatoes, cucumber, corn, red onion, and
									a mix of seeds served on a mix of lettuces with garlic sauce
									390 g.
								</span>
							</p>

							<p className="menu-item">
								Royal Salad
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 25</span>
								<span className="menu-description">
									Roasted chicken breast, cherry tomatoes, cucumber, Parmesan
									cheese, and a mix of grains served on a mix of salads with
									vinaigrette sauce 400 g.
								</span>
							</p>
						</div>
					</div>
					<div className="menu-box">
						<div className="menu-l">
							<img
								className="menu-img"
								src={additives1}
								alt="Photo of the fries"></img>
							<img
								className="menu-img"
								src={additives2}
								alt="Photo of the onion rings"></img>
							<img
								className="menu-img"
								src={additives3}
								alt="Photo of the fries"></img>
						</div>
						<div className="menu-r">
							<h3 className="menu-title">Additives</h3>
							<p className="menu-item">
								Fries
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 10</span>
							</p>

							<p className="menu-item">
								Belgian Fries
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 15</span>
							</p>

							<p className="menu-item">
								Onion Rings
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 13</span>
							</p>
						</div>
					</div>
					<div className="menu-box">
						<div className="menu-l">
							<img
								className="menu-img"
								src={desserts1}
								alt="Photo of the cake"></img>
							<img
								className="menu-img"
								src={desserts2}
								alt="Photo of the cake"></img>
							<img
								className="menu-img"
								src={desserts3}
								alt="Photo of the cake"></img>
						</div>
						<div className="menu-r">
							<h3 className="menu-title">Desserts</h3>

							<p className="menu-item">
								Chocolate fondant
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 15</span>
								<span className="menu-description">
									Chocolate cake with liquid chocolate inside, decorated with
									mandarin puree, powdered sugar and mint leaf.
								</span>
							</p>

							<p className="menu-item">
								Cheesecake
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 13</span>
								<span className="menu-description">
									Tradycyjny sernik z nutą cytryny na chrupiącym spodzie,
									udekorowany puree mandarynkowym, cukrem pudrem i liściem
									mięty.
								</span>
							</p>
							<p className="menu-item">
								Ice Cream
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 11</span>
								<span className="menu-description">
									Ice cream with cocoa-cookie sauce, pieces of white chocolate,
									cookies, in a crunchy white chocolate coating 440 ml.
								</span>
							</p>
						</div>
					</div>
					<div className="menu-box">
						<div className="menu-l">
							<img
								className="menu-img"
								src={drink1}
								alt="Photo of the drink"></img>
							<img
								className="menu-img"
								src={drink2}
								alt="Photo of the drink"></img>
							<img
								className="menu-img"
								src={drink3}
								alt="Photo of the drink"></img>
						</div>
						<div className="menu-r">
							<h3 className="menu-title">Drinks</h3>
							<p className="menu-item">
								Pepsi
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 6</span>
							</p>

							<p className="menu-item">
								Pepsi Max
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 6</span>
							</p>

							<p className="menu-item">
								Water
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 3</span>
							</p>

							<p className="menu-item">
								Mojito
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 12</span>
							</p>
							<p className="menu-item">
								Margarita
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 15</span>
							</p>
							<p className="menu-item">
								Daiquiri
								<span className="menu-line">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_
								</span>
								<span className="gold-text"> $ 13</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
