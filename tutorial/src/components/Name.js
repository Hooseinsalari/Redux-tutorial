import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchName } from '../redux/name/NameAction';

const Name = () => {

    const userName = useSelector((state) => state.nameState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchName())
    }, [])

    return (
        <div>
            {
                userName.loading ?
                    <h1>name is loading...</h1>:
                    userName.error?
                        <h1>{userName.error}</h1>:
                        userName.name.map((item) => <p key={item.id}>{item.username}</p>)
            }
        </div>
    );
};

export default Name;