import React, { useState, useEffect, useRef } from 'react';
import './Bakery.css';
import { Outlet, NavLink, Link } from "react-router-dom";
import logo from './Images/what.jpg';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [isProductHovered, setIsProductHover] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true); 
        } else {
            setIsVisible(false); 
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);  // Cleanup on component unmount
        };
    }, []);

    const navbarRef = useRef();

    const handleLinkClick = () => {
        navbarRef.current?.classList.remove('show');
    };


    return (
        <>
            <header className="header sticky-top" id="Bakeryhome">
                <nav className="na navbar navbar-expand-md">
                    <div className="container-fluid">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="logo" width="100px" height="100px" />
                            </Link>
                        </div>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarRef}>
                            <ul className="link navbar-nav ms-auto me-5">
                                <li className="list nav-item"><NavLink to="/" className={({isActive}) => `anchor1 active nav-link ${isActive ? "active-nav" : ""}`}  onClick={handleLinkClick}>HOME</NavLink></li>
                                <li className="list nav-item">
                                    <NavLink 
                                        to="/about" 
                                        className={({isActive}) => `anchor2 nav-link ${isActive ? "active-nav" : ""}`} 
                                        onClick={handleLinkClick}
                                    >
                                        ABOUT US
                                    </NavLink>
                                </li>
                                <li
                                    className="list nav-item"
                                    onMouseEnter={() => setIsProductHover(true)}
                                    onMouseLeave={() => setIsProductHover(false)}
                                    onClick={() => {setIsProductHover(!isProductHovered); handleLinkClick();}}
                                >
                                    <NavLink to="/product" className={({isActive}) => `anchor3 active nav-link ${isActive ? "active-nav" : ""}`}>PRODUCTS</NavLink>
                                    {isProductHovered && (
                                    <div className='dropdown-menu-head'>
                                        <div className="dropdown-menu row">
                                            <div className="col-6 col-md-4">
                                                <NavLink to="/cakes">CAKES</NavLink>
                                                <NavLink to="/pastry">PASTRIES</NavLink>
                                                <NavLink to="/browny">BROWNIES</NavLink>
                                                <NavLink to="/bread">BREADS</NavLink>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <NavLink to="/cupcake">DESSERTS & CUPCAKES</NavLink>
                                                <NavLink to="/sandwich">SANDWICH & SAVOURIES</NavLink>
                                                <NavLink to="/gift">GIFTING</NavLink>
                                                <NavLink to="/tea">TEA CAKES</NavLink>
                                            </div>
                                            <div className="col-12">
                                                <NavLink to="/cooky">BISCUITS, COOKIES & CRACKERS</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </li>
                                <li className="list nav-item"><NavLink to="/speciality" className={({isActive}) => `anchor3 active nav-link ${isActive ? "active-nav" : ""}`}  onClick={handleLinkClick}>SPECIALITIES</NavLink></li>
                                <li className="list nav-item"><NavLink to="/order" className={({isActive}) => `anchor4 active nav-link ${isActive ? "active-nav" : ""}`}  onClick={handleLinkClick}>ORDER</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Back-to-top button */}
            {isVisible && (
                <button onClick={scrollToTop} className="go-to-top">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </button>
            )}

            <Outlet />
        </>
    );
}

export default Home;
