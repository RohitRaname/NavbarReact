
const { useState } = require("react")
import logo from "./assets/react.svg"

const Navbar= ()=> {

    const [toggleMenu,setToggleMenu]= useState(false);


    return  <nav>
            <div className="nav-center">

        <div className="nav-header"><img src={logo} alt="" /></div>

        <ul className="nav-links">
           
        </ul>
            </div>


    </nav>



}