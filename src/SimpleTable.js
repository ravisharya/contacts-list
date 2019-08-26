import React from 'react';
import './SimpleTable.css';

const SimpleTable = (props) => {
    const tableData = props.data;
    const tableRows = tableData.map(obj => (
        <tr>
            <td>{obj.name}</td>
            <td>{obj.address}</td>
            <td>{obj.phone}</td>
            <td>{obj.email}</td>
            <td>{obj.note}</td>
        </tr>
    ));
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Note</th>
            </tr>
            {tableRows}
        </table>

    )
}
export default SimpleTable;