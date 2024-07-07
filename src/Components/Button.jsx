import React from "react";
import { Button } from 'react-bootstrap';

// This button is reused across the application, where the props takes text as parameter.
export default function ButtonComponent(props) { 

    return ( 
        <Button className={props.className} variant="primary" 
         style={{ width: "200px", margin: "20px" }}>{props.text}
         </Button> 

        
      );

}
