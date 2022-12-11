import { Routes, Route, Navigate } from "react-router-dom";
import { ProductList, Product, Cart, Login, Register, Home, 
    Success, Failed } from "./pages";

const Router = () => {
    const user = true;
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route path="/payment-success" element = {<Success />} />
            <Route path="/payment-failed" element = {<Failed />} />

        </Routes>
    );
}

export default Router;