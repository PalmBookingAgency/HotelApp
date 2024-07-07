import { Col, Row, Container } from 'react-bootstrap';
import HotelList from './HotelList';
import Search from './Search'
import { hotels } from './HotelList';

// The Main component contains a Container that renders both the Search component and the HotelList component, while passing hotels data as a property to HotelList.
export default function Main(){
    return (
      <Container>
        <Row>
          <Col>
           <Search />
          </Col>
          <Col>
          <HotelList hotels={hotels}/>
          </Col>
        </Row>
      </Container>
    );
  };

  //Renata