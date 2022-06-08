import { NavLink } from "react-router-dom";
import  "./Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js.map";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
return (
    <>

   <div className="Navbar">
    <NavLink to="/">Home</NavLink>   
    <NavLink to="/netflix">Netflix</NavLink>
    <NavLink to="/netflix/Time">Time</NavLink>
    <NavLink to="/netflix/Time/Hooks">Hooks</NavLink>
    <NavLink to="/netflix/Time/Hooks/form">Form</NavLink>
    <NavLink to="/netflix/Time/Hooks/form/list">List</NavLink>
            <a href='Facbook.com' target="_blank"><FaFacebookSquare/></a>
            <a href='Facbook.com' target="_blank"><FaWhatsapp/></a>
            <a href='Facbook.com' target="_blank"><FaInstagram/></a>
    </div>

    </>
)
};


export default Navbar;