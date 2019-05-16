import React from 'react'

export default function Promo() {
	return (
		<div>
			<section className="promo-section pt-0">
				<div className="promo-box set-bg" data-setbg="img/bg.jpg">
					<div className="container">
						<div className="row">
							<div className="col-lg-9 promo-text">
								<h1>In need of a <span>fabulouse</span> home?</h1>
								<p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus.</p>
							</div>
							<div className="col-lg-3 text-lg-right">
								<a href="#" className="site-btn sb-light mt-4">Get in Touch</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
