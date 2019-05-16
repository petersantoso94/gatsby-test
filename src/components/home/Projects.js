import React from 'react'

export default function Projects() {
    return (
        <div>
            {/* <!-- Projects section start --> */}
            <div className="projects-section pb50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="section-title">
                                <h1>Projects</h1>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <ul className="projects-filter-nav">
                                <li className="btn-filter" data-filter="*">All</li>
                                <li className="btn-filter" data-filter=".rest">Restaurations</li>
                                <li className="btn-filter" data-filter=".build">Buildings</li>
                                <li className="btn-filter" data-filter=".apart">Apartments</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="projects-carousel" className="projects-slider">
                    <div className="single-project set-bg rest" data-setbg="img/projects/1.jpg">
                        <div className="project-content">
                            <h2>Biggest <br /> Restaurations</h2>
                            <p>Jan 19, 2018</p>
                            <a href="a" className="seemore">See Project </a>
                        </div>
                    </div>
                    <div className="single-project set-bg build" data-setbg="img/projects/2.jpg">
                        <div className="project-content">
                            <h2>Office <br /> Building</h2>
                            <p>Jan 19, 2018</p>
                            <a href="a" className="seemore">See Project </a>
                        </div>
                    </div>
                    <div className="single-project set-bg apart" data-setbg="img/projects/3.jpg">
                        <div className="project-content">
                            <h2>Nice <br /> Apartments</h2>
                            <p>Jan 19, 2018</p>
                            <a href="a" className="seemore">See Project </a>
                        </div>
                    </div>
                    <div className="single-project set-bg rest" data-setbg="img/projects/4.jpg">
                        <div className="project-content">
                            <h2>Biggest <br /> Restaurations</h2>
                            <p>Jan 19, 2018</p>
                            <a href="a" className="seemore">See Project </a>
                        </div>
                    </div>
                    <div className="single-project set-bg apart" data-setbg="img/projects/2.jpg">
                        <div className="project-content">
                            <h2>Office <br /> Building</h2>
                            <p>Jan 19, 2018</p>
                            <a href="a" className="seemore">See Project </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Projects section end --> */}
        </div>
    )
}
