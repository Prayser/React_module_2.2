import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/LoginForm';
import PersonalAccount from './pages/PersonalAccount';

function App() {
  const isAuth = useSelector(state => state.login.isAuth)

  return (
    <BrowserRouter>
      <Routes>
        {isAuth
          ? <>
            <Route path='/user' element={<PersonalAccount />} />
            <Route path='*' element={<Navigate to='/user' />} />
          </>
          : <>
            <Route path='/' element={<LoginForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </>
        }
      </Routes>
    </BrowserRouter>

  );
}

export default App;
