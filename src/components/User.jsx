import React from 'react';

const User = ({ user }) => {
    return (
        <>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </>
    )
}

export default User;
