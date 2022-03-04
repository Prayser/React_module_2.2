import LoginForm from "../pages/LoginForm"
import PersonalAccount from "../pages/PersonalAccount"


export const privateRoutes = [
    { path: '/user', component: <PersonalAccount /> },
]

export const publicRoutes = [
    { path: '/login', component: <LoginForm /> },
]