import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {

    const isAuth = useSelector(state => state.user.isAuth)

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path} />
                )}
                <Route path='*' element={<Navigate to="/user" />} />
            </Routes >
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path} />
                )}
                <Route path='*' element={<Navigate to="/login" />} />
            </Routes >
    );
}

export default AppRouter;
