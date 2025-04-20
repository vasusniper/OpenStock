import './App.css'
import HomePage from './landing_page/home/HomePage'
import SignupPage from './landing_page/signup/SignupPage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
import SupportPage from './landing_page/support/SupportPage'
import ErrorPage from './landing_page/error/errorPage'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx'
function App() {
  return (
    <>
  
   <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/product" element={<ProductPage/>} />
    <Route path="/pricing" element={<PricingPage/>} />
    <Route path="/support" element={<SupportPage/>} />
    <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer/>
   </BrowserRouter>


    </>
  )
}

export default App
