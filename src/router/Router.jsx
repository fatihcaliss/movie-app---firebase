import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from '../components/Navbar'
import Details from '../pages/Details'
// import NotFound from '../pages/NotFound'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/details/:name" element={<Details />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router