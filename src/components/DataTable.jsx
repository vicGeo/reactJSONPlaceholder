import React from 'react'
import User from "./User";
import { USER_PER_PAGE } from "../utils/constants";

const DataTable = ({ users, page }) => {

    const startIndex = (page - 1) * USER_PER_PAGE;
    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);


    return (
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                </tr>
                {selectedUsers.map(user => (
                <tr>
                    <User user={user} key={user.id} />
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DataTable;
