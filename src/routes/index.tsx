import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/costants'
import { Layout } from '../components'
import Login from '../components/pages/Login'
import RecuperoPassword from '../components/pages/RecuperoPassword'
import Home from '../components/pages/Home'
import Ordini from '../components/pages/Ordini'
import Commesse from '../components/pages/Commesse'
import RequireAuth from '../utils/helpers/requaireAuth'
import Users from '../components/pages/Utenti'
import Skills from '../components/pages/Skills'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.Login} element={<Login />} />
                <Route
                    path={ROUTES.RecuperoPassword}
                    element={<RecuperoPassword />}
                />
                <Route element={<RequireAuth />}>
                    <Route element={<Layout />}>
                        <Route path={ROUTES.Home} element={<Home />} />
                        <Route path={ROUTES.Commesse} element={<Commesse />} />
                        <Route path={ROUTES.Ordini} element={<Ordini />} />
                        <Route path={ROUTES.Utenti} element={<Users />} />
                        <Route path={ROUTES.Skills} element={<Skills />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
