import React from 'react'
import User from "./User";

const DataTable = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                </tr>
                <tr>
                    <User />
                </tr>
            </tbody>
        </table>
    )
}

export default DataTable;
