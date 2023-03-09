const Header = () => {
    return (
        <div class="container-fluid">
            <div class="row hero-header" id="home">
                <div class="col-md-7">
                    <img src="img/meetup-logo.png" class="logo" />
                        <h1>Attend the most awaited Conference of 2015</h1>
                        <h3>to start you up with your business!</h3>
                        <h4>20<sup>th</sup> to 22<sup>nd</sup>  October, 2015</h4>
                        <a href="#" class="btn btn-lg btn-red">Buy Tickets Now <span class="ti-arrow-right"></span></a>

                </div>
                <div class="col-md-5 hidden-xs">
                    <img src="img/rocket.png" class="rocket animated bounce" />
                </div>
            </div>
        </div>
    )
}

export default Header;