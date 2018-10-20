import React, { Component } from "react";
import "./DirectoryTable.css";

const DirectoryTable = (props) => (
    <div> {console.log("propsdtable", props)}
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
 {/* This will render a row for each topic */}
 {props.TopicData.map(eachTopic => (
   <tr>
    {/* <td>{eachTopic.icon}</td> */}
    <td>{eachTopic.topicTitle}</td>
    {/* <td>{eachTopic.link}</td> */}
    {/* <td>{eachTopic.topicsCount}</td> */}
    {/* <td>{eachTopic.postsCount}</td> */}
 </tr> ))}

  </table>
  </div>
  </div>
)
    

export default DirectoryTable;
