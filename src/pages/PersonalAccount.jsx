import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MyButton from '../components/UI/button/MyButton';
import { logoutUserAction } from '../store/actions/loginActions';
import { getUserSync, deleteUserAction } from '../store/actions/userActions';

const UserDiv = styled.div`
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #415529; 
background: #727b58; 
background: rgba(255,255,255,.9);
padding: 40px;
box-sizing: border-box;
box-shadow: 0 15px 25px rgba(0,0,0,.7);
border-radius: 10px;
`

const Data = styled.div`
display: flex;
margin-bottom: 15px;
`
const Avatar = styled.img`
object-fit: cover;
object-position: 50% 50%;
`

const MyUL = styled.ul`
padding: 0;
margin: 0;
text-align: center;
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-between;
`
const MyLi = styled.li`
color: black;
list-style: none;
border-bottom: 1px solid #415529;
padding-bottom: 10px;
margin-left: 10px;
font-size: 1rem;
display: flex;
justify-content: space-between;
min-width: 250px;

`

const PersonalAccount = () => {
    const dispath = useDispatch();
    const token = useSelector(state => state.login.token)
    const loading = useSelector(state => state.loading.loading)

    const userData = useSelector(state => state.user.user);
    useEffect(() => {
        dispath(getUserSync(token));
    }, [dispath, token]);

    const logout = () => {
        dispath(deleteUserAction());
        dispath(logoutUserAction());
    }

    return (
        <UserDiv>
            {loading
                ? <h2>Идёт загрузка...</h2>
                : <>
                    <Data>
                        <Avatar src={userData.avatar} />
                        <MyUL>
                            <MyLi><span>Full name:</span>   <span>{userData.firstName} {userData.lastName} </span></MyLi>
                            <MyLi><span>Email:</span>       <span>{userData.username}</span> </MyLi>
                            <MyLi><span>Address:</span>     <span>{userData.country}, {userData.city}</span> </MyLi>
                            <MyLi><span>Phone:</span>       <span>{userData.phone}</span> </MyLi>
                            <MyLi><span>Role:</span>        <span>{userData.userRole}</span> </MyLi>
                        </MyUL>
                    </Data>
                    <MyButton onClick={() => { logout() }}>Log out</MyButton>
                </>
            }
        </UserDiv>

    );
}

export default PersonalAccount;
