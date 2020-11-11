import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Row, Col } from "reactstrap";

function Main({ src, description }) {
  return (
    <CardBody className='card'>
      <CardImg src={src} alt={src} /> 
      <CardText class='img-desc'>{description}</CardText>
    </CardBody>
  );
}

export default Main;