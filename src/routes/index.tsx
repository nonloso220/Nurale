import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/costants'

import RequireAuth from '../utils/helpers/requaireAuth'
import Login from '../components/pages/Login'
import Layout from '../components/molecules/Layout'
import Commesse from '../components/pages/Commesse'
import Ordini from '../components/pages/ordini'
import Skills from '../components/pages/skills'
import TypeOfPayments from '../components/pages/TypeOfPayments'
import Users from '../components/pages/Users'
import Costumers from '../components/pages/Costumers'
import Suppliers from '../components/pages/Suppliers'
import RecuperoPassword from '../components/organism/RecuperoPassword'
import Home from '../components/pages/home'
import Resources from '../components/pages/resources'

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
                        <Route
                            path={ROUTES.TipiDiPagamento}
                            element={<TypeOfPayments />}
                        />
                        <Route path={ROUTES.Clienti} element={<Costumers />} />
                        <Route
                            path={ROUTES.Fornitori}
                            element={<Suppliers />}
                        />
                        <Route path={ROUTES.Risorse} element={<Resources />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
