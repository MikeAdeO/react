import { Link } from "react-router-dom";
import '../Styles/Header2.css'; 
import facebook_logo from "../images/fblogo.png";


import { BiConversation } from "react-icons/bi";

import { AiFillHome } from "react-icons/ai";
const Header2 = () => {
  return (
    <nav>
            <ul>
            <li>
                    <Link to='/' className="item">
                        <img src={facebook_logo}  alt="facebooklogo"  className="facebook__logo"/>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="item"> <AiFillHome /> Home </Link>

                   
                </li>
                <li>
                    <Link to='/contact' className="item"> <BiConversation /> Contact</Link>
                </li>
                <li>
                    <Link to='/about' className="item">ABOUT</Link>
                </li>
                <li>
                    <Link to='/service' className="item">SERVICE</Link>
                </li>
            </ul>
        </nav>
  )
}

export default Header2