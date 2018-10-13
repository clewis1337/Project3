import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter, ImageHeader,} from "react-simple-card";


const Table = () => (
  <Card>
<div container>
    <div class="cards">
    <div class="grade3">
    <a href="/topic/id/:id">
    <img id="cover" src="/images/books/3rdGrade.jpg" /></a>
    </div>

    <div class="grade4">
    <a href="/topic/id/:id">
    <img id="cover" src="/images/books/4thGrade.jpg" /></a>
    {/* <CardBody>Click for Lesson Plans</CardBody> */}
    </div>

<div class="grade5">
<a href="/topic/id/:id">
<img id="cover" src="/images/books/5thGrade.jpg" /></a>
</div>

<div class="grade6">
<a href="/topic/id/:id">
<img id="cover" src="/images/books/6thGrade.jpg" /></a>
</div>

<div class="grade7">
<a href="/topic/id/:id">
<img id="cover" src="/images/books/7thGrade.jpg" /></a>
</div>

<div class="grade8">
<a href="/topic/id/:id">
<img id="cover" src="/images/books/8thGrade.jpg" /> </a>
</div>
</div>
</div>

</Card>
);


export default Table;


