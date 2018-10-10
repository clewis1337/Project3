import React from "react";
import "./Forum.css";

//The map will create multiple posts depending on props.tableData
const Forum = (props) => (
    <div>
    
    {props.PostData.map(eachPost =>(
    <div className="postWrapper">
        <div className="AuthorSection">
            {eachPost.author}
            <img src={eachPost.authorAvatar}/>
        </div>
        <div className="ContentSection">
            {eachPost.date}
            {eachPost.content}
            <br/>
            {eachPost.link}
        </div>
    </div>
    ))}
    </div>
);
export default Forum;
