import React from 'react'

export default function Team() {
    return (
        <div>
            {/* <!-- Team section start --> */}
            <section className="team-section spad">
                <div className="container">
                    <div className="section-title mb100">
                        <h1>The Team</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-member">
                                <img src="img/team/1.jpg" alt="" />
                                <div className="member-info">
                                    <h2>Jack Smith</h2>
                                    <p>Senior Architect</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-member">
                                <img src="img/team/2.jpg" alt="" />
                                <div className="member-info">
                                    <h2>Lili Jameson</h2>
                                    <p>Senior Architect</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-member">
                                <img src="img/team/3.jpg" alt="" />
                                <div className="member-info">
                                    <h2>Michael Dow</h2>
                                    <p>Senior Architect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Team section end --> */}
        </div>
    )
}
