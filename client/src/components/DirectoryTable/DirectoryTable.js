import React, { Component } from "react";
import "./DirectoryTable.css";

const DirectoryTable = (props) => (
    <div> {console.log("propsdtable", props)}
    <div>
        <header className = "click">
            <h4>{props.Title}</h4>
        </header>
        <table className="table1">
        <tr className="colorit">   
            <th></th>
            <th className="header1"> Getting Started</th>
            <th></th>
            <th></th>         
        </tr>      
    <tr>
        <th>Topic</th>
        <th>Topic Count</th>
        <th>Post Count</th>
        <th>Last Edited</th>
    </tr>
    {/* This will render a row for each topic */}
    {props.TopicData.map(eachTopic => (
    <tr>
        {/* <td>{eachTopic.icon}</td> */}
        <td><a href={"/topic/" + eachTopic.topicID}>{eachTopic.topicTitle}</a></td>
        <td>{eachTopic.topicsCount}</td>
        <td>{eachTopic.postsCount}</td>
        <td>{eachTopic.lastEdited}</td>
    </tr> ))}

  </table>
  </div>
  </div>
)
    

export default DirectoryTable;
