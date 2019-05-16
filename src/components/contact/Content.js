import React from 'react'

export default function Content() {
    return (
        <div>
            {/* <!-- Page section start --> */}
            <section className="page-section pt100">
                <div className="container pb100">
                    <div className="section-title pt-5">
                        <h1>Get in touch</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 contact-info mb-5 mb-lg-0">
                            <p>Address: 1481 Creekside Lane Avila Beach, CA 93424 </p>
                            <p>Phone: +53 345 7953 32453</p>
                            <p>Email: yourmail@gmail.com</p>
                            <div className="cf-social">
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form className="contact-form">
                                <input type="text" placeholder="Enter your name" />
                                <input type="text" placeholder="Enter your email address" />
                                <textarea placeholder="Message ..."></textarea>
                                <button className="site-btn sb-dark">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="map-area" id="map-canvas"></div>
            </section>
            {/* <!-- Page section end --> */}
        </div>
    )
}
