import React from 'react';
import './Bakery.css';
import logo from './Images/what.jpg';
import { Link, useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();

    const hideOrderSectionRoutes = ['/order', '/speciality'];
    const shouldHideOrderSection = hideOrderSectionRoutes.includes(location.pathname);

    return (
        <>
            {!shouldHideOrderSection && (
                <section className="want-order order-now" id="Order">
                    <h1>Like Our Products ?</h1>
                    <p>Treat yourself to your favourite Delight products or surprise your loved ones with an edible gift.</p>
                    <button className="card-btn rounded-pill my-2">
                        <Link to='/order'>Order Online</Link>
                    </button>
                </section>
            )}

            <footer id="footer">
                <div className="footer">
                    <div>
                        <img src={logo} height="150px" alt="Product" />
                    </div>
                    <div className='about-web'>
                        <p><Link to='/about'>OUR STORY</Link></p>
                        <p><Link to='/product'>OUR PRODUCTS</Link></p>
                        <p><Link to="/speciality">SPECIALITY CAKES</Link></p>
                        <p><Link>BLOGS</Link></p>
                        <p><Link>CSR</Link></p>
                        <p><Link>HTML SITEMAP</Link></p>
                    </div>
                    <div className='about-web'>
                        <p><Link>PRIVACY POLICY</Link></p>
                        <p><Link>COOKIE POLICY</Link></p>
                        <p><Link>REFUND POLICY</Link></p>
                        <p><Link>FAQs</Link></p>
                        <p><Link>NUTRITIONAL INFORMATION</Link></p>
                        <p><Link to="/product">OUR PRODUCTS</Link></p>
                    </div>
                    <div>
                        <p><i className="fa fa-phone px-2"></i> +91 12345-67890</p>
                        <p><i className="fa fa-envelope px-2"></i> example@1234567890.in</p>
                        <div className='footer-icons'>
                            <Link className="info-icon m-1 card-btn"><i className="fa-brands fa-facebook-f m-3"></i></Link>
                            <Link className="info-icon m-1 card-btn"><i className="fa-brands fa-square-instagram m-3"></i></Link>
                            <Link className="info-icon m-1 card-btn"><i className="fa-brands fa-linkedin-in m-3"></i></Link>
                            <Link className="info-icon m-1 card-btn"><i className="fa-brands fa-twitter m-3"></i></Link>
                        </div>
                    </div>
                    <div>
                        <p>Sign up for updates</p>
                        <p>
                            <input className="card-btn rounded-pill" type="text" placeholder="Enter your email" />
                            <button className="card-btn rounded-pill ms-1">Sign up</button>
                        </p>
                        <p>
                            OUR STORES - Mumbai | Navi Mumbai | Thane | Delhi |<br />
                            Noida | Ghaziabad | Gurgaon | Faridabad | Anand |<br />
                            Bengaluru | Hyderabad | Pune | Chandigarh-Mohali |<br />
                            Nashik | Surat | Mysore | Nagpur | Jaipur | Ambala |<br />
                            Agra | Lucknow | Vadodara | Dehradun | Meerut | Ahmedabad |<br />
                            Indore | Ludhiana | Jalandhar | Patiala | Rajkot | Rohtak |<br />
                            Karnal | Kanpur | Prayagraj | Raipur | Vijaywada | Chennai |<br />
                        </p>
                        <p className="footer-text mt-3">
                            © 2024 Bakery Delight | Designed by Tehzeeb Jahan, Shikha Yadav & Shradha Chawda
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
