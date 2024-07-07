
import Nav from './Nav.jsx';
 import { Link } from "react-router-dom";

// Header which contains the logo and navigation of the application.
export default function Header(){
    
    return <div>
     <Link to={"/"}> 
              
 <div style={{backgroundColor: "#003C80", height: "120px"}}>
<img src="./images/Logo.jpg" alt="" style={{width: "180px", marginLeft: "100px"}}/>

  </div>

  </Link>
 
    <Nav /> 
    </div>
  };


