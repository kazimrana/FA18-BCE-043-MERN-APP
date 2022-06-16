import '../Header/navbar.css'
import { Link,Outlet } from "react-router-dom";

function Navbars() {
    return (
        <div className='container-fluid'>
            <div id='h1-r-1' className="row" style={{height:"60px"}}>
                <div id='h1-1' className="col-8">
                    <ul>
                        <li><i class="bi bi-telephone-fill"></i> +92-3460383497</li>
                        <li><i class="bi bi-envelope-fill"></i> kazimrana66@gmail.com</li>
                        <li><i class="bi bi-clock-fill"></i> Mon - Fri 9:00 - 18:30</li>
                    </ul>
                </div>
                <div id='h1-2' className="col-4">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>

            <div id='h2' className="row ">
                <div className="col-4">
                    <img id='logo' src={require('../images/Logo-removebg.png')} alt="" />
                </div>
                <div id='h2-2' className="col-6">
                    <nav>
                    <ul>
                        <Link id='L1' to="/"><li>HOME</li></Link>
                        <Link id='L1' to="/SHOP"><li>SHOP</li></Link>
                        <Link id='L1' to="/FAQs"><li>FAQs</li></Link>
                        <Link id='L1' to="/CONTACT"><li>CONTACT</li></Link>
                    </ul>
                    </nav>
                    <Outlet/>
                </div>
                <div className="col-1">
                    <Link to="/login"><button id='b-1'>Log In</button></Link>
                </div>
                <div className="col-1">
                    <Link to="/Shop"><button id='b-1'>BUY</button></Link>
                </div>
            </div>

        </div>
    );
}

export default Navbars;