import { Link } from "react-router-dom";


function Header() {
            
    return (
        <header className='header01'>
        <h1 className='hHeader01'>Mon Petit Poney, version revisitée.</h1> 
        <h2 className='hHeader01'>CSS inspiré par les réalisations de David.</h2>
        <nav className='navHeader01'>
            <ul className='ulHeader01'>
                <li className='liHeader01'><img src="full.png" alt="Logo du Poney canon" className="imgHeader"/></li>             
                <li className='liHeader01'><Link to="/">Home</Link></li>                
                <li className='liHeader01'><Link to="/poneys">Poneys</Link></li>
                <li className='liHeader01'><Link to="/contact">Contact</Link></li>
                <li className='liHeader01'><Link to="/apropos">A propos</Link></li>                  
            </ul>
        </nav>
        </header>
    )
}
export default Header;