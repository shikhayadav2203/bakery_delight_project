import React from 'react';
import './Bakery.css';
import home from './Images/home-first.png';
import home1 from './Images/home-second.png';
import home2 from './Images/Aboutus.png';
import home3 from './Images/Bakery16.jpg';
import home4 from './Images/Bakery15.jpg';
import home5 from './Images/Bakery30.jpg';
import home6 from './Images/Bakery24.jpg';
import home7 from './Images/Bakery32.jpg';
import home8 from './Images/Bakery33.jpg';
import home9 from './Images/tea-time1.jpg';
import home10 from './Images/Bakery35.jpg';
import home11 from './Images/Bakery36.jpg';
import home12 from './Images/Bakery23.jpg';
import home13 from './Images/Bakery37.jpg';
import home14 from './Images/Bakery38.jpg';
import Gift from './Images/gift.jpg';
import Tea from './Images/Tea-Cakes.gif';
import Testinomial from './Images/quote.png';
import { Link } from "react-router-dom";



const Bakery = () =>{

    return(
        <>
		<div class="carousel slide" id="demo1" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#demo1" data-bs-slide-to="0" class="active"></button>
				<button type="button" data-bs-target="#demo1" data-bs-slide-to="1"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src={home} alt='Cake' class='w-100 d-block'/>
				</div>
				<div class="carousel-item">
					<img src={home1} alt='Pastry'  class='w-100 d-block'/>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
				<span class="carousel-control-prev-icon"></span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="prev">
				<span class="carousel-control-next-icon"></span>
			</button>
		</div>

		<section class="Aboutus mt-5 pt-5">
			<h1 class="third">The secret Ingredient in Baking is <br/>always Love</h1>
			<div class="text-center pt-4 pb-4 ">
				Since 2004, we've been serving our guests the best quality treats,<br/> traditionally made and presented with care. 
			</div>
			<div class="about-content">
				<div>
					<h3 class="pt-5">AUTHENTIC RECIPES</h3>		
					<p>Our products are based on <br/>ontraditional home-style recipes<br/>using fresh ingredients.</p>
					<h3 class="pt-5">BAKED WITH LOVE</h3>		
					<p>Our passion for baking is poured into <br/>every recipe, serving smiles on a <br/>plate everyday.</p>
				</div>	
		  		<div class="mt-2" >		
					<img src={home2} alt="Product" class="mx-auto d-block col me-5"/>
				</div>
				<div>
					<h3 class="pt-5">COMMITTED TO QUALITY</h3>		
					<p>
						From our ingredients to our<br/>kitchen operations & guest<br/> services,we always prioritize qualit
					</p>
					<h3 class="pt-5">HONESTLY PRICED</h3>		
					<p>We constantly strive to offer the best <br/>products at the right prices.</p>
				</div>
			</div>
			<div class="about-btn">
				<center><button class="card-btn rounded-pill bttn"><Link to='/about'>View More</Link></button></center>
			</div>			
		</section>

		<div class="pro" id="Product">
			<h1>Our Product</h1>
			<p>Fresh Bakery with the Finest Ingredients</p>
			<div class="cards">
				<div class="item">
					<Link to='/cakes'>
						<div class="card_image">
							<img src={home3} alt="Cake" class="d-block" />
							<h1>Cakes</h1>
						</div>
					</Link>
				</div>
				<div class="item">
					<Link to='/pastry'>
						<div class="card_image">
							<img src={home4} alt="Pastry" class="d-block" />
							<h1>Pastries</h1>
						</div>
					</Link>
				</div>
				<div class="item">
					<Link to='/browny'>
						<div class="card_image">
							<img src={home5} alt="BROWNIES" class="d-block" />
							<h1>Brownies</h1>
						</div>
					</Link>
				</div>
				<div class="item">
					<Link to='/bread'>
						<div class="card_image">
							<img src={home6} alt="Bread" class="d-block" />
							<h1>Breads</h1>
						</div>
					</Link>
				</div>
			</div>
			<button class="card-btn rounded-pill"><Link to='/product'>View more</Link></button>
		</div>

	<section>
    <div class="container">
        <div class="text">
           <h1>Packed with love &
           <br /> all your favourites!</h1>
            <p  class="pt-3">Now gift your loved ones our special hampers curated with<br/>our signature products.</p>
            <button class="card-btn rounded-pill bttn my-2"><Link to="/gift">Know More</Link></button>
           
        </div>
        <img src={Gift} alt="Product" width="600px" height="500px" />
    </div>        
   </section>

   <section >
    
    <div class="container1" >   
        <img src={Tea} alt="Product" width="600px" height="500px" />  
    <div class="text">
      <h1>Tea-Time Delights</h1>
      <p class="mt-3"> Pick the perfect companion for your tea (or coffee!) from a <br/>range of tea cakes & more. </p>
      <button class="card-btn rounded-pill bttn my-2"><Link to="/tea">Know More</Link></button>
    </div>  
    </div>
   </section>

   <section>
    <div >
        <div class="testimonial">
		<h1>Testinomial</h1>
		<img src={Testinomial} alt='testinomial' width={60} />
		<div class="para-caro">
			<center>
		<div class="carousel slide" id="demo2" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#demo2" data-bs-slide-to="0" class="active"></button>
				<button type="button" data-bs-target="#demo2" data-bs-slide-to="1"></button>
				<button type="button" data-bs-target="#demo2" data-bs-slide-to="2"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class='my-5 text-center'>
						<p>Always a delight coming here for pastries. This Theobrama outlet may not be very spacious but their pastries are lip<br/>
						smacking good. Loved hazelnut pastry among the ones i tried. Value for money and a must visit place!</p>
						<h4>Saurabh Mehra, Mumbai</h4>	
					</div>
				</div>
				<div class="carousel-item">
					<div class='my-5 text-center'>
						<p>Theobroma is an outlet which will always top our priority list. Scrumptious warm brownies that melt in your mouth<br/> 
						leaving you a heavenly sensation - exactly what visiting theobroma feels like.</p>
						<h4>Anmol Gaba, Gurgaon</h4>
					</div>
				</div>
				<div class="carousel-item">
					<div class='my-5 text-center'>
						<p>I love all Theobroma products but the chocolate overload brownie has been my all-time favourite and truly justifies its<br/> 
						name with its rich chocolate gooeyness. Theobroma is truly one of our favourite places!</p>
						<h4>Meenakshi Verma, Pune</h4>
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev">
				<span class="carousel-control-prev-icon rounded"></span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
				<span class="carousel-control-next-icon rounded"></span>
			</button>
		</div>
		</center>
		</div>
        </div>	

    </div>
   </section>

	<section class="special" id="Specialities">
		<div class="special-head">
			<h1>Our Specialities</h1>
		</div>
		<div class="cards">
			<div class="item">
			<Link to='/cakes'>
				<div class="card_image">
					<img src={home7} alt="Cake" class="d-block" />
					<h1 class="special-one">Fresh Pineapple Cake</h1>
				</div>
				</Link>
			</div>
			<div class="item">
			<Link to='/browny'>
				<div class="card_image">
					<img src={home8} alt="Pastry" class="d-block" />
					<h1 class="special-one">Overload Brownie</h1>
				</div>
				</Link>
			</div>
			<div class="item">
			<Link to='/tea'>
				<div class="card_image">
					<img src={home9} alt="BROWNIES" class="d-block" />
					<h1 class="special-one">Danse Loaf</h1>
				</div>
				</Link>
			</div>
			<div class="item">
			<Link to='/sandwich'>
				<div class="card_image">
					<img src={home10} alt="Bread" class="d-block" />
					<h1 class="special-one">Baked Wada Pao (1 Pc)</h1>
				</div>
				</Link>
			</div>
		</div>
		<div class="cards mt-4">
			<div class="item">
			<Link to='/cupcake'>
				<div class="card_image">
					<img src={home11} alt="Cake" class="d-block" />
					<h1 class="special-one">Blueberry Cheesecake</h1>
				</div>
				</Link>
			</div>
			<div class="item">
			<Link to='/pastry'>
				<div class="card_image">
					<img src={home12} alt="Pastry" class="d-block" />
					<h1 class="special-one">Chocolate Pastry</h1>
				</div>
				</Link>
			</div>
			<div class="item">
			<Link to='/cooky'>
				<div class="card_image">
					<img src={home13} alt="BROWNIES" class="d-block" />
					<h1 class="special-one">Chocolate Chip Cookies</h1>
				</div>
				</Link>
			</div>
			<div class="item">
			<Link to='/cooky'>
				<div class="card_image">
					<img src={home14} alt="Bread" class="d-block" />
					<h1 class="special-one">Butter Palmiers</h1>
				</div>
				</Link>
			</div>
		</div>
		<center><button class="card-btn rounded-pill bttn my-5"><Link to='/speciality'>View more</Link></button></center>
	</section>
        </>
    );
}

export default Bakery;