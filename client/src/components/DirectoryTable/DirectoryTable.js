import React from "react";
import "./DirectoryTable.css";

const DirectoryTable = (props) => (
    <table>
    <thead>
        <tr>
            <th className="TableTitle"> {props.TableTitle} </th>
        </tr>
    </thead> 
        {console.log(props)}
    <tbody>
        {props.TableData.map(data =>(
        <tr>
            <td className="Topic" href={data.link}>{data.topic}</td> {/*Needs to be changed into a link*/}
            <td className="countStuff">{data.topicsCount}</td>
            <td className="countStuff">{data.postsCount}</td>
        </tr>
        ))}
    </tbody> 	    
    </table>
);
export default DirectoryTable;
