import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeEmailAction, changePasswordAction, correctLoginAction, incorrectLoginAction } from '../../store/reducers/formReducer';
import MyButton from '../UI/button/MyButton'
import UserService from '../../api/UserService';
import MyInput from '../UI/input/MyInput'
import { loginUserAction } from '../../store/reducers/loginReducer';
import styled from 'styled-components';
import s from './LoginForm.module.css'
import { offLoadingAction, onLoadingAction } from '../../store/reducers/loadingReducer';


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

const WrongDiv = styled.div`
color: red;
margin-top: 5px;

`





const LoginForm = () => {
    const dispath = useDispatch();

    const email = useSelector(state => state.form.email);
    const password = useSelector(state => state.form.password);
    const correct = useSelector(state => state.form.correct)

    const loading = useSelector(state => state.loading.loading);

    const [labelEmail, setLabelEmail] = useState('Email');
    const [valid, setValid] = useState('');

    const emailRegExp = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?[.]{1}(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"
    );

    const changeEmail = (event) => {
        setLabelEmail('Email');
        setValid('');
        dispath(changeEmailAction(event.target.value));
        dispath(correctLoginAction());
    }

    const changePassword = (event) => {
        dispath(changePasswordAction(event.target.value))
        dispath(correctLoginAction());
    }

    const login = async () => {
        dispath(onLoadingAction());
        dispath(correctLoginAction());

        const response = await UserService.postUser(email, password);

        console.log(response);
        console.log(response.data);

        if (response.data.error) {
            dispath(incorrectLoginAction())
            dispath(offLoadingAction());
            return;
        }
        const token = response.data.token;
        if (token) {
            console.log(token);
            dispath(loginUserAction(token));
        }
        dispath(offLoadingAction());
    }


    const validEmailTest = () => {
        if (emailRegExp.test(email)) {
            login();
        } else {
            setLabelEmail('Некорректный email');
            setValid('wrong');
        }
    }


    return (
        <FormBox>
            <MyH2>Login</MyH2>
            <form style={{ minHeight: '200px' }}>
                <MyInput
                    value={email}
                    onChange={changeEmail}
                    type="text"
                    required
                    label={labelEmail}
                    valid={valid}></MyInput>
                <MyInput
                    value={password}
                    onChange={changePassword}
                    type="text"
                    required
                    label='Пароль'></MyInput>
                {loading
                    ? <div className={s.lds_ellipsis}><div></div><div></div><div></div><div></div></div> // Loader
                    : <MyButton
                        onClick={(event) => {
                            event.preventDefault();
                            validEmailTest();
                        }}> Войти </MyButton>

                }
                {correct
                    ? <></>
                    : <WrongDiv>Неправильный email или пароль</WrongDiv>
                }
            </form>
        </FormBox >
    );
}

export default LoginForm;
