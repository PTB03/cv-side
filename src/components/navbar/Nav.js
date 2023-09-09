import { Link } from "react-router-dom";
import './Nav.css';




function Nav() {
  return (
    <nav className="Nav">
      <ul className="Links">
      
        <li><Link className="link"to="/">Velkomen</Link></li>
        <li><Link className="link"to="/about">Om meg</Link></li>
        <li><Link className="link"to="/prosjekt">Tidligere prosjekter</Link></li>

      </ul>
      
      <Link className="profil" to="/profil"><img className="profilBilde" src="./bilder/darth_vader.jpg" /></Link>
    </nav>
  );
}

export default Nav;
