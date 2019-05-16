import React from 'react'

export default function Content() {
    return (
        <div>
            {/* <!-- Page section start --> */}
            <div className="page-section spad">
                <div className="container">
                    {/* <!-- portfolio filter menu --> */}
                    <ul className="portfolio-filter">
                        <li className="filter" data-filter="*">All</li>
                        <li className="filter" data-filter=".photo">Photography</li>
                        <li className="filter" data-filter=".design">Design</li>
                        <li className="filter" data-filter=".iden">Identity</li>
                        <li className="filter" data-filter=".corp">Corporate</li>
                        <li className="filter" data-filter=".uxui">UI/UX</li>
                    </ul>
                </div>
                {/* <!-- portfolio items --> */}
                <div className="portfolio-warp spad">
                    <div id="portfolio">
                        <div className="grid-sizer"></div>
                        {/* <!-- portfolio item --> */}
                        <div className="grid-item set-bg grid-wide photo" data-setbg="img/portfolio/1.jpg"><a className="img-popup" href="img/portfolio/1.jpg"></a></div>
                        {/* <!-- portfolio item --> */}
                        <div className="grid-item set-bg design corp" data-setbg="img/portfolio/2.jpg"><a className="img-popup" href="img/portfolio/2.jpg"></a></div>
                        {/* <!-- portfolio item --> */}
                        <div className="grid-item set-bg iden photo uxui" data-setbg="img/portfolio/3.jpg"><a className="img-popup" href="img/portfolio/3.jpg"></a></div>
                        {/* <!-- portfolio item --> */}
                        <div className="grid-item set-bg corp design" data-setbg="img/portfolio/4.jpg"><a className="img-popup" href="img/portfolio/4.jpg"></a></div>
                        {/* <!-- portfolio item --> */}
                        <div className="grid-item set-bg uxui iden" data-setbg="img/portfolio/5.jpg"><a className="img-popup" href="img/portfolio/5.jpg"></a></div>
                        {/* <!-- portfolio item --> */}
                        <div className="grid-item set-bg grid-long design corp" data-setbg="img/portfolio/6.jpg"><a className="img-popup" href="img/portfolio/6.jpg"></a></div>
                    </div>
                </div>
                <div className="container">
                    <div className="pagination">
                        <a href="#">01</a>
                        <a href="" className="active">02</a>
                        <a href="">03</a>
                    </div>
                </div>
            </div>
            {/* <!-- Page section end --> */}
        </div>
    )
}
