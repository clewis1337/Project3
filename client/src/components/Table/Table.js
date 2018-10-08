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
    <ImageHeader imageSrc="http://via.placeholder.com/600x250"/>
    <div class="link"><Link to="/grade3">Grade 3 </Link>
    <CardBody>Click for Lesson Plans</CardBody>
    </div>
    </div>

    <div class="grade4">
    <ImageHeader imageSrc="http://via.placeholder.com/600x250"/>
    <div class="link"><Link to="/grade4">Grade 4 </Link>
    <CardBody>Click for Lesson Plans</CardBody>
    </div>
    </div>

<div class="grade5">
<ImageHeader imageSrc="http://via.placeholder.com/600x250"/>
    <div class="link"><Link to="/grade5">Grade 5</Link>
    <CardBody>Click for Lesson Plans</CardBody>
    </div>
</div>

<div class="grade6">
<ImageHeader imageSrc="http://via.placeholder.com/600x250"/>
    <div class="link"><Link to="/grade6">Grade 6</Link>
    <CardBody>Click for Lesson Plans</CardBody>
    </div>
</div>

<div class="grade7">
<ImageHeader imageSrc="http://via.placeholder.com/600x250"/>
    <div class="link"><Link to="/grade7">Grade 7</Link>
    <CardBody>Click for Lesson Plans</CardBody>
    </div>
</div>

<div class="grade8">
<ImageHeader imageSrc="http://via.placeholder.com/600x250"/>
    <div class="link"><Link to="/grade8">Grade 8</Link>
    <CardBody>Click for Lesson Plans</CardBody>
    </div>
</div>
</div>
</div>

</Card>
);


export default Table;


