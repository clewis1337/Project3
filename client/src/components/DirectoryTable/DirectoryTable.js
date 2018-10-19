import React from "react";
import "./DirectoryTable.css";

const DirectoryTable = (props) => (
    // {props.TopicData.map(eachTopic =>(

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


{/* <tr>
    <td>{eachTopic.icon}</td>
    <td>{eachT.Topic}</td>
    <td>{eachTopic.link}</td>
    <td>{eachTopic.topicsCount}</td>
    <td>{eachTopic.postsCount}</td>
    </tr> */}

</table>
</div>




    // ))}
    
    );
    

export default DirectoryTable;
