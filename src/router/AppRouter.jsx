import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NavBar from "../components/NavBar";
import CustomersPage from "../pages/CustomersPage";
import CustomerPage from "../pages/CustomerPage";

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
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
        </div>   
    </BrowserRouter>
    

    </>
  )
  
}

export default AppRouter