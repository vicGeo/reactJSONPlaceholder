import React from 'react'
import User from "./User";
import { USER_PER_PAGE } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DataTable = ({ users, page, titles, sortField }) => {

    const startIndex = (page - 1) * USER_PER_PAGE;
    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);


    return (
        <table>
            <tbody>
                <tr>
                {titles.map(title =>
                <th key={title}
                    onClick={() => sortField(title)}
                >
                    {title} <FontAwesomeIcon icon={faChevronUp} />
                </th>
                )}
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
