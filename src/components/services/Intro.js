import React from 'react'

export default function Intro() {
    return (
        <div>
            {/* <!-- Intro section start --> */}
            <section className="intro-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="service-slider">
                                <div className="ss-single">
                                    <img src="img/service/1.jpg" alt="" />
                                </div>
                                <div className="ss-single">
                                    <img src="img/service/2.jpg" alt="" />
                                </div>
                                <div className="ss-single">
                                    <img src="img/service/3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 service-text">
                            <h1>We offer top quality project <span>services</span></h1>
                            <h2>01.Super-fast support.</h2>
                            <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. </p>
                            <ol>
                                <li>02.Detailed documentation. </li>
                                <li>03.Clean code.</li>
                                <li>04.Great themes.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Intro section end --> */}
        </div>
    )
}
