import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat ? `http://localhost:3000/products?category=${cat}`
                        : "http://localhost:3000/products"
                )

                setProducts(res.data);
            } catch (err) { }
        }
        getProducts();
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(product =>
                Object.entries(filters).every(([key, value]) =>
                    product[key].includes[value])
            )
        )
    }, [products, cat, filters])

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
        }
        else if (sort === 'asc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        }
        else if (sort === 'desc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <Container>
            {cat ? filteredProducts.map((product) => (
                <Product item={product} key={product._id} />
            )) : products.slice(0, 8).map((product) =>
                <Product item={product} key={product._id} />
            )}
        </Container>
    );
}

export default Products;