import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    </BrowserRouter>
    

    </>
  )
  
}

export default AppRouter