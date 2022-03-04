import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeEmailAction, changePasswordAction } from '../store/formReducer';
import MyButton from '../components/UI/button/MyButton'
import UserService from '../api/UserService';
import MyInput from '../components/UI/input/MyInput'
import { loginUserAction } from '../store/loginReducer';
import styled from 'styled-components';


const FormBox = styled.div`
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 400px;
padding: 40px;
background: rgba(255,255,255,.7);
box-sizing: border-box;
box-shadow: 0 15px 25px rgba(0,0,0,.5);
border-radius: 10px
`;

const MyH2 = styled.h2`
margin: 0 0 30px;
padding: 0;
color: #000;
text-align: center;
`;





const LoginForm = () => {
    const dispath = useDispatch();

    const email = useSelector(state => state.form.email);
    const password = useSelector(state => state.form.password);

    const changeEmail = (event) => {
        dispath(changeEmailAction(event.target.value))
    }
    const changePassword = (event) => {
        dispath(changePasswordAction(event.target.value))
    }

    const login = async (event) => {
        event.preventDefault();
        const response = await UserService.postUser(email, password);
        const token = response.data.token;
        if (token) {
            dispath(loginUserAction(token));
        }
    }

    return (
        <FormBox>
            <MyH2>Login</MyH2>
            <form onSubmit={login}>
                <MyInput
                    value={email}
                    onChange={changeEmail}
                    type="text"
                    required
                    label='Email'></MyInput>
                <MyInput
                    value={password}
                    onChange={changePassword}
                    type="text"
                    required
                    label='Пароль'></MyInput>

                <MyButton>Войти</MyButton>
            </form>
        </FormBox>
    );
}

export default LoginForm;
