import React from "react";
import './About.css';
import card1 from './Images/Bakery32.jpg';
import card2 from './Images/Bakery16.jpg';
import card3 from './Images/Bakery17.jpg';
import card4 from './Images/Bakery18.jpg';
import card13 from './Images/Truffle-cake.webp';
import card14 from './Images/NewYork.webp';
import card15 from './Images/Eggless.webp';
import card16 from './Images/HazelnutPralineMousseCake.webp';
import card5 from './Images/Bakery20.jpg';
import card6 from './Images/Bakery5.jpg';
import card7 from './Images/Bakery6.jpg';
import card8 from './Images/Bakery7.jpg';
import card9 from './Images/Bakery23.jpg';
import card10 from './Images/Bakery21.jpg';
import card17 from './Images/HazelnutPralineMoussePastry.webp';
import card18 from './Images/DarkChocolateMoussePastry.webp';
import card19 from './Images/Bakery30.jpg';
import card20 from './Images/Bakery33.jpg';
import card21 from './Images/CookieBrownie.webp';
import card22 from './Images/EgglessMillionaireBrownie.webp';
import card23 from './Images/AssortedBrownieBox12.webp';
import card24 from './Images/AssortedEgglessBrownieBox12.webp';
import card25 from './Images/AssortedBrownieBox6.webp';
import card26 from './Images/HIGHRESBrowniewBoxof9.webp';
import card27 from './Images/Bakery24.jpg';
import card28 from './Images/Bakery9.webp';
import card29 from './Images/Bakery10.webp';
import card30 from './Images/Bakery11.webp';
import card31 from './Images/Bakery37.jpg';
import card32 from './Images/Bakery25.webp';
import card33 from './Images/Bakery38.jpg';
import card34 from './Images/Bakery26.webp';
import card35 from './Images/Bakery12.webp';
import card36 from './Images/Bakery13.webp';
import card37 from './Images/Bakery14.webp';
import card38 from './Images/Bakery27.webp';
import card39 from './Images/Bakery36.jpg';
import card40 from './Images/Bakery22.webp';
import card41 from './Images/Bakery28.webp';
import card42 from './Images/Bakery29.webp';
import card43 from './Images/Bakery35.jpg';
import card44 from './Images/PaneerFrankyRoll.webp';
import card45 from './Images/ChickenKheemaRoll.webp';
import card46 from './Images/QuicheVeg.webp';
import card47 from './Images/HIGH-RES_Spinach_Corn_Cheese_Sandwich.webp';
import card48 from './Images/ChickenMayoSandwich.webp';
import card49 from './Images/JungleePaneerSandwich.webp';
import card50 from './Images/ButterChickenBun.webp';
import { Link } from "react-router-dom";





function Product(){
    return(
    <>
		<section className="pro-content">
			<div className="pro-head">
				<center>
				<h1>Delight Products</h1>
				<p className="my-3">At Delight, we offer a wide range of products, both sweet & savoury. Our offerings include<br/> 
				indulgent brownies, cakes & desserts, artisanal breads, puffs & quiches, wholesome sandwiches,<br/> 
				wraps & rolls, beverages and more.</p>
				</center>
			</div>

		<div className="card-head">
		<h2>Cakes <i class="fa-solid fa-chevron-right"></i></h2>
		<article className="mb-5">
			<div className="shadow">
				<img src={card1} alt="Product" />
				<h3 className="my-2">Pineapple Cake</h3>
				<h6> Rs 400</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow"> 
				<img src={card2} alt="Product" />
				<h3 className="my-2">Strawberry Cake</h3>
				<h6> Rs 500</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card3} alt="Product" />
				<h3 className="my-2">Butterscotch Cake</h3>
				<h6>Rs 550</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card4} alt="Product" />
				<h3 className="my-2">Chocolate Cake</h3>
				<h6>Rs 450</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card13} alt="Product" />
				<h3 className="my-2">Dutch Truffle Cake 1kg</h3>
				<h6> Rs 1,250</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow"> 
				<img src={card14} alt="Product" />
				<h3 className="my-2">New York Style Baked Cheesecake</h3>
				<h6> Rs 700</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card15} alt="Product" />
				<h3 className="my-2">Eggless Chocolate Mousse Cake</h3>
				<h6>Rs 895</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card16} alt="Product" />
				<h3 className="my-2">Hazelnut Praline Mousse Cake</h3>
				<h6>Rs 800</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
		</article>
		<h2>Pastries <i class="fa-solid fa-chevron-right"></i></h2>
		<article className="mb-5">
			<div className="shadow">
				<img src={card5} alt="Product" />
				<h3 className="my-2">Butterscotch Delight</h3>
				<h6>Rs 650</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card6} alt="Product" />
				<h3 className="my-2">Pineapple Pastry</h3>
				<h6>Rs 140</h6><span>per pastry</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card7} alt="Product" />
				<h3 className="my-2">Butterscotch Special</h3>
				<h6>Rs 160</h6><span>per pastry</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card8} alt="Product" />
				<h3 className="my-2">Strawberry Delight</h3>
				<h6>Rs 160</h6><span>per pastry</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card9} alt="Product" />
				<h3 className="my-2">Chocolate Pastry</h3>
				<h6>Rs 145</h6><span>per pastry</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card10} alt="Product" />
				<h3 className="my-2">Strawberry Pastry</h3>
				<h6>Rs 170</h6><span>per pastry</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card17} alt="Product" />
				<h3 className="my-2">Hazelnut Praline Mousse Pastry</h3>
				<h6>Rs 170</h6><span>per pastry</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card18} alt="Product" />
				<h3 className="my-2">Eggless Chocolate Mousse Pastry</h3>
				<h6>Rs 175</h6><span>per pastry</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
		</article>
		<h2>Brownies <i class="fa-solid fa-chevron-right"></i></h2>
		<article className="mb-5">
			<div className="shadow">
				<img src={card19} alt="Product" />
				<h3 className="my-2">Eggless Walnut Brownie</h3>
				<h6>Rs 110</h6><span>per brownie</span>
				<button className="rounded-pill car-but ms-4"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card20} alt="Product" />
				<h3 className="my-2">Overload Brownie</h3>
				<h6>Rs 120</h6><span>per brownie</span>
				<button className="rounded-pill car-but ms-4"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card21} alt="Product" />
				<h3 className="my-2">Cookie Brownie</h3>
				<h6>Rs 110</h6><span>per brownie</span>
				<button className="rounded-pill car-but ms-4"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card22} alt="Product" />
				<h3 className="my-2">Eggless Millionaire Brownie</h3>
				<h6>Rs 120</h6><span>per brownie</span>
				<button className="rounded-pill car-but ms-4"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card23} alt="Product" />
				<h3 className="my-2">Assorted Brownie Box-12 Pcs</h3>
				<h6>Rs 1,320</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card24} alt="Product" />
				<h3 className="my-2 mx-1">Assorted Eggless Box-12 Pcs</h3>
				<h6>Rs 1,320</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card25} alt="Product" />
				<h3 className="my-2">Assorted Brownie Box-6</h3>
				<h6>Rs 660</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card26} alt="Product" />
				<h3 className="my-2">Assorted Brownie Box-9</h3>
				<h6>Rs 1,020</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
		</article>
		<h2>Breads <i class="fa-solid fa-chevron-right"></i></h2>
		<article className="mb-5">
			<div className="shadow">
				<img src={card27} alt="Product" />
				<h3 className="my-2">Wheat Sourdough Loaf</h3>
				<h6>Rs 120</h6><span>per bread</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card28} alt="Product" />
				<h3 className="my-2">French Baguette</h3>
				<h6>Rs 100</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card29} alt="Product" />
				<h3 className="my-2">Wheat Bread Loaf</h3>
				<h6>Rs 90</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card30} alt="Product" />
				<h3 className="my-2">Multigrain Loaf</h3>
				<h6>Rs 110</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
		</article>
		<h2>Cookies <i class="fa-solid fa-chevron-right"></i></h2>
		<article className="mb-5">
			<div className="shadow">
				<img src={card31} alt="Product" />
				<h3 className="my-2">Chocolate Chip Cookies</h3>
				<h6>Rs 250</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card32} alt="Product" />
				<h3 className="my-2">Double Chocolate Chip Cookies</h3>
				<h6>Rs 260</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card33} alt="Product" />
				<h3 className="my-2">Butter Palmiers</h3>
				<h6>Rs 85</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card34} alt="Product" />
				<h3 className="my-2">Orange Cookies</h3>
				<h6>Rs 175</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card35} alt="Product" />
				<h3 className="my-2">Butter Cookies</h3>
				<h6>Rs 290</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card36} alt="Product" />
				<h3 className="my-2">Chocolate Coated Biscuits</h3>
				<h6>Rs 295</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card37} alt="Product" />
				<h3 className="my-2">Hazelnut Cookies</h3>
				<h6>Rs 375</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card38} alt="Product" />
				<h3 className="my-2">Coconut Macaroons</h3>
				<h6>Rs 150</h6><span>per pake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
		</article>
		<h2>Cup Cakes <i class="fa-solid fa-chevron-right"></i></h2>
		<article className="mb-5">
			<div className="shadow">
				<img src={card39} alt="Product" />
				<h3 className="my-2">Blueberry Cheesecake Cup</h3>
				<h6>Rs 195</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card41} alt="Product" />
				<h3 className="my-2">Chocolate Cupcake</h3>
				<h6>Rs 120</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card40} alt="Product" />
				<h3 className="my-2">Chocolate Mousse Cup</h3>
				<h6>Rs 155</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card42} alt="Product" />
				<h3 className="my-2">Strawberry Cupcake</h3>
				<h6>Rs 120</h6><span>per cake</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
		</article>
		<h2>Sandwiches <i class="fa-solid fa-chevron-right"></i></h2>
		<article className="mb-5">
			<div className="shadow">
				<img src={card43} alt="Product" />
				<h3 className="my-2">Baked Wada Pao (1 Pc)</h3>
				<h6>Rs 50</h6><span>per pc</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card44} alt="Product" />
				<h3 className="my-2">Spicy Paneer Roll (1 pc)</h3>
				<h6>Rs 60</h6><span>per pc</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card45} alt="Product" />
				<h3 className="my-2">Chicken Keema Roll (1 pc)</h3>
				<h6>Rs 60</h6><span>per pc</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card46} alt="Product" />
				<h3 className="my-2">Quiche Veg</h3>
				<h6>Rs 150</h6><span>per pc</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card47} alt="Product" />
				<h3 className="my-2">Spinach Corn & Cheese Sandwich</h3>
				<h6>Rs 120</h6><span>per pc</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card48} alt="Product" />
				<h3 className="my-2">Chicken Mayonnaise Sandwich</h3>
				<h6>Rs 120</h6><span>per pc</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card49} alt="Product" />
				<h3 className="my-2">Paneer Junglee Sandwich</h3>
				<h6>Rs 100</h6><span>per pc</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
			<div className="shadow">
				<img src={card50} alt="Product" />
				<h3 className="my-2">Butter Chicken Bun (1 pc)</h3>
				<h6>Rs 70</h6><span>per pc</span>
				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			</div>
		</article>
		</div>

		</section>

    </>

    );
}

export default Product;