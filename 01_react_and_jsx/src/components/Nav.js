const Nav = () => {
    return (
        <nav class="side-menu">
            <ul>
                <li class="hidden active">
                    <a class="page-scroll" href="#page-top"></a>
                </li>
                <li>
                    <a href="#home" class="page-scroll">
                        <span class="menu-title">Home</span>
                        <span class="dot"></span>
                    </a>
                </li>
                <li>
                    <a href="#speakers" class="page-scroll">
                        <span class="menu-title">Speakers</span>
                        <span class="dot"></span>
                    </a>
                </li>
                <li>
                    <a href="#tickets" class="page-scroll">
                        <span class="menu-title">Buy Tickets</span>
                        <span class="dot"></span>
                    </a>
                </li>
                <li>
                    <a href="#schedule" class="page-scroll">
                        <span class="menu-title">Schedule</span>
                        <span class="dot"></span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;