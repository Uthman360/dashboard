import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import DashHome from '../components/Dashboard/DashHome/DashHome'
import Quotes from '../components/Dashboard/Quotes/Quotes'
import License from '../components/Dashboard/License/License'
import Services from '../components/Dashboard/Services/Services'
import Subscriptions from '../components/Dashboard/Subscriptions/Subscriptions'
import Payment from '../components/Dashboard/Payment/Payment'
import Support from '../components/Dashboard/Support/Support'
import Membership from '../components/Dashboard/Membership/Membership'
import EditProfile from '../components/Dashboard/Edirprofile/EditProfile'
import Orders from '../components/Dashboard/orders/Order'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Dashboard>
                    <Routes>
                        <Route path='/' element={<DashHome />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/quotes' element={<Quotes />} />
                        <Route path='/licenses' element={<License />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/subscriptions' element={<Subscriptions />} />
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/support' element={<Support />} />
                        <Route path='/membership' element={<Membership />} />
                        <Route path='/edit' element={<EditProfile />} />


                    </Routes>
                </Dashboard>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter