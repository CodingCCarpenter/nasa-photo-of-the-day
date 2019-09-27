import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

function Header({ title, date }) {
  return (
    <div>
      <CardTitle>
      {title}<span className='date-span'>{date}</span></CardTitle>
      
    </div>
  );
}

export default Header;