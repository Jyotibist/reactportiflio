import React from 'react';
import { Topnav } from './Topnav';
import { Container, Row, Col, Button } from 'react-bootstrap';
import my from "../assets/my.png";

export const Hero = () => {
  return (
    <div className = "hero">
    <Topnav/>

    <Container>
      <Row className=" mt-5 py-3">
        <Col md = "6"className="text-center order-md-2">
          <img src= {my} width="80%" alt="" />
        </Col>
        <Col md= "6" className='mt-3 pb-3'>
          hello  i'm
          <div className="fs-1 fw-bolder mb-5">Jyoti Bist</div>
          <p>
            I love codiong and solving problems with code 
          </p>
          <Button  variant="danger">Download Resume</Button>
        </Col>
      </Row>
    </Container>
  </div>
  );
};
