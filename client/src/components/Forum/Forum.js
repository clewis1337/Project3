import React from "react";
import "./Forum.css";
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";
 
const Forum = () => (
  <Card>
    <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);

export default Forum;
