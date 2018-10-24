import React from "react";
import "./Table.css";
import { Card } from "react-simple-card";
import { Link } from "react-router-dom";

const Table = () => (
  <Card>
<div className="container">
    <div className="cards">
    <div className="grade3">
    <Link
            to="/"
            className={
              window.location.pathname === "/lessonplans/1" || window.location.pathname === "/lessonplans/1"
                ? "nav-link active"
                : "nav-link"
            }
          >
              <img id="cover" src="/images/books/3rdGrade.jpg" alt=""/>
          </Link>

    </div>

    <div className="grade4">
    <a href="/lessonplans/2">
    <img id="cover" src="/images/books/4thGrade.jpg" alt=""/></a>
    {/* <CardBody>Click for Lesson Plans</CardBody> */}
    </div>

<div className="grade5">
<a href="/lessonplans/3">
<img id="cover" src="/images/books/5thGrade.jpg" alt=""/></a>
</div>

<div className="grade6">
<a href="/lessonplans/4">
<img id="cover" src="/images/books/6thGrade.jpg" alt=""/></a>
</div>

<div className="grade7">
<a href="/lessonplans/5">
<img id="cover" src="/images/books/7thGrade.jpg" alt=""/></a>
</div>

<div className="grade8">
<a href="/lessonplans/6">
<img id="cover" src="/images/books/8thGrade.jpg" alt=""/> </a>
</div>
</div>
</div>

</Card>
);


export default Table;


