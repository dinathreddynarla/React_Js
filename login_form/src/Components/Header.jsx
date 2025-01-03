import "../Styles/Header.css";
import { menu } from "../Data/menu ";
import { Link } from 'react-router-dom';
const Header = () => {
    return (

            <header className="header">   
                <div className="logo">Movies</div>
                <div className="nav">
                    <ul>
                        {menu.map((item) => (
                            <li key={item.id}>
                                {item.item}
                            </li>
                        ))}
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
            </header>
        
    )}

export default Header;
