import "../Styles/Header.css";
import { menu } from "../Data/menu ";

const Header = (props) => {
    console.log(props.name)
    return (

            <header className="header">
                
                <div className="logo">Moives</div>
                <div className="nav">
                    <ul>
                        {menu.map((item) => (
                            <li key={item.id}>
                                <a href={item.path}>{item.item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        
    )}

export default Header;
