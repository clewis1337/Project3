import React from "react";
import "./Forum3.css";
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";
 
const Forum = () => (
  <Card>
     <img id="cover" src="/images/books/3rdGrade.jpg" />  
    <CardBody></CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);

export default Forum;
