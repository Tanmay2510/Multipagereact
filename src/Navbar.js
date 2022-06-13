import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div>
            <li> <ul><Link to="/">Home</Link></ul> </li>
            <li> <ul><Link to="/contact">Contact</Link></ul> </li>

            <li> <ul><Link to="/about">About</Link></ul> </li>

        </div>
    );
}
export default Navbar;
