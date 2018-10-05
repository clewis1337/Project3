import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import {TableHeaderColumn, BootstrapTable} from 'react-bootstrap';


class Table extends React.Component {
    render() {
      return (
        <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

  export default Table;