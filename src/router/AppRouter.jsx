import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NavBar from "../components/NavBar";
import CustomersPage from "../pages/CustomersPage";
import CustomerPage from "../pages/CustomerPage";
import UseStatePage from "../pages/UseStatePage";
import PostPages from "../pages/PostPages";
import BoocksPage from "../pages/BoocksPage";
import CrudPage from "../pages/CrudPage";


const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar />
        <div className="container">
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/customers" element={<CustomersPage to="/"/>} />
            <Route path="/customers/:id" element={<CustomerPage to="/"/>} />
            <Route path="/use-state" element={<UseStatePage />} />
            <Route path="/posts" element={<PostPages />} />
            <Route path="/boocks" element={<BoocksPage />} />
            <Route path="/crud" element={<CrudPage />} />

            <Route path="/*" element={<Navigate to="/"/>} />
            
        </Routes>
        </div>   
    </BrowserRouter>
    

    </>
  )
  
}

export default AppRouter