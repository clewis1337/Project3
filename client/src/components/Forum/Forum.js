import React from "react";
import "./Forum.css";

//The map will create multiple posts depending on props.tableData
const Forum = (props) => (
    <div>
    
    {props.PostData.map(eachPost =>(
    <div className="postWrapper">

    <div class="container">
    <div class="row">
    <div class="col-lg-6">
        <div className="AuthorSection">
          <div className="author">  {eachPost.author}</div>
         <div className="img1">   <img src={eachPost.authorAvatar}/> </div>
        </div>
        </div>
    
        <div class="col-lg-6">
        <div className="ContentSection">
            {eachPost.date}
            {eachPost.content}
            <br/>
            {eachPost.link}
        </div>
        </div>
    </div>
    </div>
    </div>

    ))}
    </div>
);
export default Forum;
