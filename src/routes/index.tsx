import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/costants'

import RequireAuth from '../utils/helpers/requaireAuth'
import Login from '../components/pages/Login'
import RecuperoPassword from '../components/pages/recuperoPassword'
import Layout from '../components/molecules/Layout'
import Home from '../components/pages/home'
import Commesse from '../components/pages/commesse'
import Ordini from '../components/pages/ordini'
import Skills from '../components/pages/skills'
import TypeOfPayments from '../components/pages/TypeOfPayments'
import Users from '../components/pages/Users'
import Costumers from '../components/pages/Costumers'
import Suppliers from '../components/pages/Suppliers'

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
                        <Route path={ROUTES.Fornitori} element={<Suppliers />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
