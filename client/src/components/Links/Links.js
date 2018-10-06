import React from "react";
import "./Links.css";
import { Link } from 'react-router';

class List extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/react">Grade3</Link></li>
                </ul>
            </div>
        );
    }
}

export default List;


