import React from "react";
import "./Forum.css";

//The map will create multiple posts depending on props.tableData
const Forum = (props) => (
    <div>
    
    {props.PostData.map(eachPost =>(
    <div>
        <div className="AuthorSection">
            {eachPost.author}
            {eachPost.authorAvatar} 
        </div>
        <div className="ContentSection">
            {eachPost.date}
            {eachPost.content}
        </div>
    </div>
    ))}
    </div>
);
export default Forum;
