import React, { Component } from "react";
import "./DirectoryTable.css";

const DirectoryTable = (props) => (
    <div>
    <div>
        <header className = "click">
            <h4>Topic Directory</h4>
        </header>
        <table className="table1">
        <tr>     
            <th></th>
            <th></th>
            <th className="header1">Getting Started</th>
            <th></th>
            <th></th>         
        </tr>      
<tr>
    <th></th>
    <th>Topic</th>
    <th>Link</th>
    <th>Topic Count</th>
    <th>Post Count</th>
</tr>
 {props.TopicData.map(eachTopic => (
   <tr>
    <td>{eachTopic.icon}</td>
    <td>{eachTopic.Topic}</td>
    <td>{eachTopic.link}</td>
    <td>{eachTopic.topicsCount}</td>
    <td>{eachTopic.postsCount}</td>
 </tr> ))}

  </table>
  </div>
  </div>
)
    

export default DirectoryTable;
