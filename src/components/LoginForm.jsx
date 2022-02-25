import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeEmailAction } from '../store/formReducer';
import MyButton from './UI/button/MyButton'
import UserService from '../API/UserService';
import MyInput from './UI/input/MyInput'
import { loginUserAction } from '../store/userReducer';

const LoginForm = () => {
    const dispath = useDispatch();

    const email = useSelector(state => state.form.email);
    const password = useSelector(state => state.form.password);

    const changeEmail = (event) => {
        dispath(changeEmailAction(event.target.value))
    }
    const changePassword = (event) => {
        dispath(changeEmailAction(event.target.value))
    }

    const login = async (event) => {
        event.preventDefault();
        console.log('Получаем токен')
        const response = await UserService.postUser(email, password);
        console.log('Получили токен')
        const token = response.data.token;
        const userData = await loginUserAction(UserService.getUser(token));
        console.log('Получаем юзера')
        console.log(userData);
        // dispath(userData);
        dispath(UserService.getUserSync(token))
        console.log('Отправили юзера')
    }

    return (
        <form style={{ width: '50%' }} onSubmit={login}>
            <MyInput
                value={email}
                onChange={changeEmail}
                type="text"
                placeholder="Введите почту"></MyInput>
            <MyInput
                value={password}
                onChange={changePassword}
                type="text"
                placeholder="Введите пароль"></MyInput>
            <MyButton>Войти</MyButton>
            {/* <MyButton onClick={() => navigate(`/user`, { replace: true })}>Войти</MyButton> */}
        </form>
    );
}

export default LoginForm;
