import React from 'react'

export default function Testimonials() {
    return (
        <div>
            {/* <!-- Testimonials section start --> */}
            <section className="testimonials-section spad">
                <div className="testimonials-image-box"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
                            <h1>Clients <span>testimonials</span></h1>
                            <div className="qut">“</div>
                            <div className="testimonials-slider" id="test-slider">
                                <div className="ts-item">
                                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
                                    <h4>Maria Westminster</h4>
                                    <span>Client</span>
                                </div>
                                <div className="ts-item">
                                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
                                    <h4>Maria Westminster</h4>
                                    <span>Client</span>
                                </div>
                                <div className="ts-item">
                                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
                                    <h4>Maria Westminster</h4>
                                    <span>Client</span>
                                </div>
                            </div>
                            <div className="slide-num-holder test-slider" id="snh-2"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Testimonials section end --> */}
        </div>
    )
}
