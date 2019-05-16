import React from 'react'

export default function Hero() {
	return (
		<div>
			{/* <!-- Hero section start --> */}
			<section className="hero-section">
				{/* <!-- left social link ber --> */}
				<div className="left-bar">
					<div className="left-bar-content">
						<div className="social-links">
							<a href="a"><i className="fa fa-pinterest"></i></a>
							<a href="a"><i className="fa fa-linkedin"></i></a>
							<a href="a"><i className="fa fa-instagram"></i></a>
							<a href="a"><i className="fa fa-facebook"></i></a>
							<a href="a"><i className="fa fa-twitter"></i></a>
						</div>
					</div>
				</div>
				{/* <!-- hero slider area --> */}
				<div className="hero-slider">
					<div className="hero-slide-item set-bg" data-setbg="img/bg.jpg">
						<div className="slide-inner">
							<div className="slide-content">
								<h2>Minimalistic <br />Architecture <br /> and more</h2>
								<a href="a" className="site-btn sb-light">See Project</a>
							</div>
						</div>
					</div>
					<div className="hero-slide-item set-bg" data-setbg="img/bg.jpg">
						<div className="slide-inner">
							<div className="slide-content">
								<h2>Minimalistic <br />Architecture <br /> and more</h2>
								<a href="a" className="site-btn sb-light">See Project</a>
							</div>
						</div>
					</div>
				</div>
				<div className="slide-num-holder" id="snh-1"></div>
				<div className="hero-right-text">architecture</div>
			</section>
			{/* <!-- Hero section end --> */}
		</div>
	)
}
