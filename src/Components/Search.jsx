import React from "react"
import { Form, Row, Col, Card } from "react-bootstrap"

import { MdLocationOn } from "react-icons/md"
import { Link } from "react-router-dom";
import ButtonComponent from './Button';

// Component for the search functionality, where the user can select various attributes such as number of rooms, guests, destination etc.

export default function Search() {

  return ( <Card style={{ width: "350px", height: "550px", backgroundColor: "#DBF2FD", padding: "30px", marginTop: "20px"}}> 
 <Card.Body>
 <Card.Title> <h2>Vart vill du resa?</h2></Card.Title>
 <Card.Text>
 <div class="input-group input-group-s mb-3" >
  <div class="input-group-prepend" >
    <span class="input-group-text" id="basic-addon1" style={{height: "40px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}> <MdLocationOn size={"22px"} /></span>
  </div>
  <input type="text" class="form-control" placeholder="Destination" aria-label="Username" aria-describedby="basic-addon1" style={{boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}/>
</div>

<div>
  <div>
 <label for="start" className="m-2">Incheckning:</label>
    <input type="date" id="start" name="trip-start" style={{border:"none", borderRadius: "3px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}/>
 </div>

  <div>
    <label for="start" className="m-2">Utcheckning:</label>
    <input type="date" id="start" name="trip-end" style={{border:"none", borderRadius: "3px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}/>
  </div>  
  <Row>
    <Col>
  <label className="m-2">Gäster</label>
  <Form.Select style={{width: "100px", borderColor: "white", borderRadius: "3px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
      <option>1</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="3">4</option>
    </Form.Select> 
    </Col>
    <Col>
    <label className="m-2">Rum</label>
  <Form.Select style={{width: "100px", borderColor: "white", borderRadius: "3px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
      <option>1</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </Form.Select>
    </Col>
  </Row>
    <label className="m-2">Tillval</label>
    <Form.Check type="radio" aria-label="radio 1" label="Barnvänligt" />
    <Form.Check type="radio" aria-label="radio 1" label="Specialkost" />
    <Form.Check type="radio" aria-label="radio 1" label="Flygplatstransfer" />
</div>

<Link to={"/"} >
  <ButtonComponent text="Sök" />
</Link>
</Card.Text> 
 </Card.Body>
  </Card>
  )
}
