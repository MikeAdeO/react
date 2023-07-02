import { Link } from "react-router-dom";
import '../Styles/Header2.css'; 
const Header2 = () => {
  return (
    <nav>
            <ul>
                <li>
                    <Link to='/' className="item">HOME</Link>
                </li>
                <li>
                    <Link to='/contact' className="item">CONTACT</Link>
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