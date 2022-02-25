import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MyButton from '../components/UI/button/MyButton';
import { logoutUserAction } from '../store/userReducer';

import styled from 'styled-components';

const MyUL = styled.ul`
padding: 0;
text-align: center;
`

const MyLi = styled.li`
color: white;
list-style: none;
font-size: 2rem;
`

const PersonalAccount = () => {
    const dispath = useDispatch();
    const userData = useSelector(state => state.user.user);
    console.log(userData);

    return (
        <div>
            <MyUL>
                <MyLi>{userData.firstName} {userData.lastName}</MyLi>
                <MyLi>{userData.username}</MyLi>
                <MyLi>{userData.country}, {userData.city}</MyLi>
                <MyLi>{userData.phone}</MyLi>
                <MyLi>{userData.userRole}</MyLi>
            </MyUL>
            <MyButton onClick={() => { dispath(logoutUserAction(null)) }}>Log out</MyButton>
        </div>
    );
}

export default PersonalAccount;
