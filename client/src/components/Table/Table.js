import React from "react";
import "./Table.css";
import { Card } from "react-simple-card";


const Table = () => (
  <Card>
<div className="container">
    <div className="cards">
    <div className="grade3">
    <a href="/topic/id/1">
    <img id="cover" src="/images/books/3rdGrade.jpg" alt=""/></a>
    </div>

    <div className="grade4">
    <a href="/topic/id/2">
    <img id="cover" src="/images/books/4thGrade.jpg" alt=""/></a>
    {/* <CardBody>Click for Lesson Plans</CardBody> */}
    </div>

<div className="grade5">
<a href="/topic/id/3">
<img id="cover" src="/images/books/5thGrade.jpg" alt=""/></a>
</div>

<div className="grade6">
<a href="/topic/id/4">
<img id="cover" src="/images/books/6thGrade.jpg" alt=""/></a>
</div>

<div className="grade7">
<a href="/topic/id/5">
<img id="cover" src="/images/books/7thGrade.jpg" alt=""/></a>
</div>

<div className="grade8">
<a href="/topic/id/6">
<img id="cover" src="/images/books/8thGrade.jpg" alt=""/> </a>
</div>
</div>
</div>

</Card>
);


export default Table;


