import React from 'react';
import './Bakery.css';
import Tea1 from './Images/tea-time1.jpg';
import Tea2 from './Images/tea-time2.webp';
import Tea3 from './Images/tea-time3.webp';
import Tea4 from './Images/tea-time4.webp';
import Tea5 from './Images/tea-time5.webp';
import Tea6 from './Images/tea-time6.webp';
import Tea7 from './Images/tea-time7.webp';
import Tea8 from './Images/tea-time8.webp';
import { Link } from "react-router-dom";



function Tea(){
    return(
        <>
        <section className='tea'>
            <div className="tea-head">
				<center>
				<h1>Tea Cakes</h1>
				<p className="my-3">The perfect companions to your tea (or coffee!), our range of tea cakes include the classic Mawa<br/> 
                cake and Pound cake, the decadent Dense Loaf and the delicious Banana Cake.</p>
				</center>
			</div>
            <div className='tea-content'>
                <h2>
                    Products&nbsp; 
                    <i class="fa-solid fa-chevron-right"></i>&nbsp;
                    Gifts&nbsp; 
                    <i class="fa-solid fa-chevron-right"></i>
                </h2>
                <article className="mb-5">
			    <div className="shadow">
				    <img src={Tea1} alt="Product" />
    				<h3 className="my-2">Dense Loaf</h3>
	    			<h6> Rs 290</h6>
		    		<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			    </div>
    			<div className="shadow"> 
	    			<img src={Tea2} alt="Product" />
		    		<h3 className="my-2">Mava Cake</h3>
			    	<h6> Rs 310</h6>
				    <button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={Tea3} alt="Product" />
			    	<h3 className="my-2">Pound Cake</h3>
				    <h6>Rs 180</h6>
				    <button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={Tea4} alt="Product" />
			    	<h3 className="my-2">Banana Cake</h3>
				    <h6>Rs 150</h6>
    				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
	    		</div>
		    	<div className="shadow">
			    	<img src={Tea5} alt="Product" />
				    <h3 className="my-2">Eggless Mava Cake</h3>
				    <h6> Rs 270</h6>
    				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
	    		</div>
		    	<div className="shadow"> 
			    	<img src={Tea6} alt="Product" />
				    <h3 className="my-2">Eggless Dense Loaf</h3>
    				<h6> Rs 240</h6>
	    			<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
		    	</div>
			    <div className="shadow">
				    <img src={Tea7} alt="Product" />
    				<h3 className="my-2">Eggless Banana Cake</h3>
	    			<h6>Rs 150</h6>
		    		<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={Tea8} alt="Product" />
			    	<h3 className="my-2">Eggless Dense Loaf</h3>
    				<h6>Rs 240</h6>
	    			<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
		    	</div>
                </article>
            </div>
        </section>

        </>
    );
}


export default Tea;