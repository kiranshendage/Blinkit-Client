import React from "react";
// import logo from "../image/images.png";
import logo from "../image/images.png";
// import paanMasala from "../image/paanCorner.png";
import paanMasala from "../image/paanCorner.png";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";           
const Navbar = () =>{
    const navigate = useNavigate();  

    const handleLocationChange = (event) => {
        const selectedLocation = event.target.value;
        if (selectedLocation) {
            navigate(`/SelectAds/${selectedLocation}`);
        }
    };
    return(
        <div>
        <div className="navbar">
        <div className="navbar-logo">
            <div className="logo">
            <Link to={'/'}><img src={logo} alt="" /></Link>  
            </div>
        </div>
        <div className="nav-add">
            <div className="delivery">Delivery in 8 min</div>
            <div className="delivery-location">
            <select className="delivery-locatio" onChange={handleLocationChange}>
                            <option value="">Select Address</option>
                            <option value="Karve Nagar">Karve Nagar</option>
                            <option value="Shivajinagar">Shivajinagar</option>
                            <option value="FC Road">FC Road</option>
                            <option value="JM Road">JM Road</option>
                            <option value="Katraj">Katraj</option>
                        </select>
            </div>
        </div>
        <div className="nav-search">
            <div className="nav-search-symbol">
            <i className="fa-solid fa-magnifying-glass"/>
            </div>
            <div className="nav-search-input">
                <input type="text" name="" id="" placeholder="Search items"/>
            </div>
        </div>
        <div className="nav-login">
           <Link to={'/register'}>Login</Link>
        </div>
        <div className="nav-my-cart">
            <i className="fa-solid fa-cart-shopping fa-beat"></i>
            My Cart
        </div>
    </div>
    {/* ************ */}
        <div className="under-nav">
            <ul>
            <li><Link to="/DairyProduct/">Dairy Product</Link></li>
                <li><Link to="/Rolling/">Snack</Link></li>
                <li><Link to="/Hookha/">Hookha</Link></li>
                <li><Link to="/Snack/">Rolling</Link></li>
                <li><Link to="/Gummies/">Mouth Freshner</Link></li>
                <li><Link to="/ColdDrink/">Cold Drink</Link></li>
                <li><Link to="/MouthFreshner/">Gummies</Link></li>
            </ul>
        </div>
    {/* ************ */}

    <div className="paan-masala-div">
        <div className="paan-masala">
            <img src={paanMasala} alt="" />
        </div>
    </div>
    </div>
    )
}
export default Navbar;