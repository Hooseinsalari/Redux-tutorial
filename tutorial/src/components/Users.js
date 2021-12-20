import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/users/UsersAction';

const Users = () => {
    const userData = useSelector(state => state.usersState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {
                userData.loading ? 
                    <h1>Loading...</h1>:
                    userData.error ?
                        <h2>{userData.error}</h2>:
                        userData.users.map((user) => <p key={user.id}>{user.name}</p>)
            }
        </div>
    );
};

export default Users;