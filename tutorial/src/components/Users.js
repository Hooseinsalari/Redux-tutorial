import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/usersActions';

const Users = () => {

    const usersState = useSelector(state => state.usersState)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {
                usersState.isLoading ?
                <h1>Loading...</h1> :
                usersState.users.length ? usersState.users.map((user) => <h2 key={user.id}>{user.name}</h2>)
                : <h1>{usersState.error}</h1>
            }
        </div>
    );
};

export default Users;