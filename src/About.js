import React from 'react';
import './About.css';
import './Bakery.css';
import about1 from './Images/Bakery3.jpg';
import about2 from './Images/bakery.jpg';
import about3 from './Images/Bakery4.jpg';
import pastry from './Images/download.png';
import heart from './Images/icons8-heart-32.png';
import honesty from './Images/trustworthiness.png';
import cupcake from './Images/icons8-cup-cake-64.png';


function About(){

    return(
        <>
           <section class="aboutus1" id="aboutus1">
	        <div class=" about" ></div>
            <div class="about1">	
		        <p class="mt-5">Theobroma means 'Food of the Gods' in Greek, befitting our exclusive and indulgent range of<br/> offerings that include brownies, cakes, desserts, chocolates, breads, and savouries.</p>
		        <p class="mt-4">From our humble beginnings in 2004, when the first Theobroma pastry store opened its doors at <br/>the iconic Cusrow Baug at Colaba Causeway (Mumbai), we've grown to become a Pan-India<br/> chain of patisseries with stores in over 30 cities.</p>
		        <p class="mt-4">Our mission is to spread happiness by serving smiles on a plate, and this journey continues as we <br/>open Theobroma patisseries across the country.</p>
	        </div>
	  
			<div className='caro-head'>
				<center>
				<div class="carousel slide" id="demo" data-bs-ride="carousel">
				    <div class="carousel-indicators indicator" >
					    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    					<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
	    				<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
		    		</div>
			    	<div class="carousel-inner">
				    	<div class="carousel-item active">
					    	<img src={about1} alt="Cake" class="d-block db" />
    					</div>
	    				<div class="carousel-item">
		    				<img src={about2} alt="Butterscotch" class="d-block db" />
			    		</div>
				    	<div class="carousel-item">
					    	<img src={about3} alt="Butterscotch" class="d-block db" />
    					</div>
	    			</div>
		    		<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
			    		<span class="carousel-control-prev-icon rounded"></span>
				    </button>
    				<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="prev">
	    				<span class="carousel-control-next-icon rounded"></span>
		    		</button>
			    </div>
				</center>
			</div>

    		<div class="ourpromise my-4 py-4">
	    		<h1 class="my-5">Our Promise</h1>
        
    		</div>
	    	<div  class="ourpromise1 pb-5">
		    	<div class="promise">
					<img src={pastry} alt='pastry' />
			    	<h3>AUTHENTIC RECIPES</h3>		
				    <p >Our products are based on <br/>ontraditional home-style recipes<br/>using fresh ingredients.</p>
		    	</div>
			    <div class="promise">
					<img src={heart} alt='pastry' />
				    <h3>BAKED WITH LOVE</h3>		
				    <p>Our passion for baking is poured into <br/>every recipe, serving smiles on a <br/>plate everyday.</p>
    			</div>
	    		<div class="promise">
					<img src={honesty} alt='pastry' />
		    		<h3>HONESTLY PRICED</h3>		
			    	<p >We constantly strive to offer <br/>the bestproducts at the<br/> right prices.</p>
			    </div>
			    <div class="promise">
					<img src={cupcake} alt='pastry' />
				    <h3>COMMITTED TO QUALITY</h3>		
				    <p >From our ingredients to our<br/>kitchen operations & guest services,<br/>we always prioritize quality.</p>
			    </div>	
            </div>
	
           </section>
        </>
    );
}

export default About;