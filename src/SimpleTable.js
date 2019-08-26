import React from 'react';
import {upperFirst} from 'lodash';
import './SimpleTable.css';

const getTableRow = (row, tableKeys) => (
    tableKeys.map( key => 
        <td>{row[key]}</td>
    )
);

const SimpleTable = (props) => {
    const tableData = props.data;
    const tableKeys = Object.keys(tableData[0]);
    
    const tableHeader = (
        <tr>
            {tableKeys.map(header => (
                <th>{upperFirst(header)}</th>
            ))}
        </tr>
    );
    
    const tableRows = tableData.map( row => (
        <tr>
            {getTableRow(row, tableKeys)}
        </tr>
    ));
    
    return (
        <table>
            {tableHeader}
            {tableRows}
        </table>
    )
}
export default SimpleTable;