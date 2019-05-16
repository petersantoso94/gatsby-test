import React from 'react'

export default function Header(props) {
	return (
		<div>
			{/* <!-- Page Preloder --> */}
			<div id="preloder">
				<div className="loader"></div>
			</div>
			{/* <!-- Header section start -->    */}
			<header className="header-area">
				<a href="/" className="logo-area">
					<img src="img/logo.png" alt="" />
				</a>
				<div className="nav-switch">
					<i className="fa fa-bars"></i>
				</div>
				<div className="phone-number">+675 334 567 223</div>
				<nav className="nav-menu">
					<ul>
						<li className={props.location.pathname === '/' ? 'active' : ''} ><a href="/">Home</a></li>
						<li className={props.location.pathname === '/about' ? 'active' : ''} ><a href="about">About us</a></li>
						<li className={props.location.pathname === '/services' ? 'active' : ''}><a href="services">Services</a></li>
						<li className={props.location.pathname === '/portfolio' ? 'active' : ''} ><a href="portfolio">Portfolio</a></li>
						<li className={props.location.pathname === '/contact' ? 'active' : ''} ><a href="contact">Contact</a></li>
					</ul>
				</nav>
			</header>
			{/* <!-- Header section end -->  */}
		</div>
	)
}
