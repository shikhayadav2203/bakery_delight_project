import React from "react";
import gift1 from './Images/gift1.webp';
import gift2 from './Images/gift2.webp';
import gift3 from './Images/gift3.webp';
import gift4 from './Images/gift4.webp';
import gift5 from './Images/gift5.webp';
import gift6 from './Images/gift6.webp';
import gift7 from './Images/gift7.webp';
import gift8 from './Images/gift8.webp';
import { Link } from "react-router-dom";


function Gift(){
    return(
        <>

        <section className="gift">

            <div className="gift-head">
                <center>
                    <h1>Gifting</h1>
                    <p className="my-3">
                    Your search for the perfect gift ends here! Choose from our range of hampers, gift bags & gift boxes<br/>
                    each of them a carefully curated assortment of our bestsellers.
                    </p>
                </center>
            </div>
            <div className="gift-content">
                <h2>
                    Products&nbsp; 
                    <i class="fa-solid fa-chevron-right"></i>&nbsp;
                    Gifts&nbsp; 
                    <i class="fa-solid fa-chevron-right"></i>
                </h2>
                <article className="mb-5">
			    <div className="shadow">
				    <img src={gift1} alt="Product" />
    				<h3 className="my-2">Almond Rocks 250g</h3>
	    			<h6> Rs 650</h6>
		    		<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link> </button>
			    </div>
    			<div className="shadow"> 
	    			<img src={gift2} alt="Product" />
		    		<h3 className="my-2">Premium Hamper</h3>
			    	<h6> Rs 1,700</h6>
				    <button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link> </button>
    			</div>
	    		<div className="shadow">
		    		<img src={gift3} alt="Product" />
			    	<h3 className="my-2">Eggless Indulgence Hamper</h3>
				    <h6>Rs 3,200</h6>
				    <button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link> </button>
    			</div>
	    		<div className="shadow">
		    		<img src={gift4} alt="Product" />
			    	<h3 className="my-2">Cookies Collection Gift Set (3)</h3>
				    <h6>Rs 675</h6>
    				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link> </button>
	    		</div>
		    	<div className="shadow">
			    	<img src={gift5} alt="Product" />
				    <h3 className="my-2">Gift Bag (Premium)</h3>
				    <h6> Rs 1,250</h6>
    				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link> </button>
	    		</div>
		    	<div className="shadow"> 
			    	<img src={gift6} alt="Product" />
				    <h3 className="my-2">Almond Rocks 500g</h3>
    				<h6> Rs 935</h6>
	    			<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link> </button>
		    	</div>
			    <div className="shadow">
				    <img src={gift7} alt="Product" />
    				<h3 className="my-2">Cookies Collection Gift Set (4)</h3>
	    			<h6>Rs 2,300</h6>
		    		<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link> </button>
    			</div>
	    		<div className="shadow">
		    		<img src={gift8} alt="Product" />
			    	<h3 className="my-2">Eggless Luxury Hamper</h3>
    				<h6>Rs 800</h6>
	    			<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link> </button>
		    	</div>
		    </article>
            </div>

        </section>

        </>
    );
}

export default Gift;