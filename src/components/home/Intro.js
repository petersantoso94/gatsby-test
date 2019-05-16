import React from 'react'

export default function Intro() {
    return (
        <div>
            {/* <!-- Intro section start --> */}
            <section className="intro-section pt100 pb50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 intro-text mb-5 mb-lg-0">
                            <h2 className="sp-title">We are a creative Architecture<span>Studio</span></h2>
                            <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. Morbi rhoncus feugiat imperdiet. Curabitur non maximus leo. Nulla in ipsum sed magna egestas bibendum. Integer in sem sagittis, commodo mi sit amet, commodo nibh. Suspendisse potenti. Aliquam erat volutpat. </p>
                            <a href="a" className="site-btn sb-dark">See Project</a>
                        </div>
                        <div className="col-lg-5 pt-4">
                            <img src="img/intro.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Intro section end --> */}
        </div>
    )
}
