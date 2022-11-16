import { Routes, Route, Navigate } from "react-router-dom";
import { ProductList, Product, Cart, Login, Register, Home } from "./pages";
import Success from "./pages/Success";

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
            <Route path="/success" element = {<Success />} />
        </Routes>
    );
}

export default Router;