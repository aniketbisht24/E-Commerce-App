import styled from 'styled-components'; 
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`
    /* font-size: 20px; */
`

const ProductList = () => {
    const location = useLocation()

    const cat = location.pathname.split('/')[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = (e) => {
        const value = e.target.value;
        
        setFilters(prev => ({
            ...prev, [e.target.name]: value
        }))
    }

    const handleSort = (e) => {
        const value = e.target.value;
        setSort(prev => value)
    }

    return (
        <Container>
            <Navbar />
             <Announcement />

            <Title> Dresses </Title>

            <FilterContainer>
                <Filter>
                     <FilterText > 
                        Filter Products:  
                    </FilterText>

                    <Select name="color" onChange={handleFilters}>
                        <Option selected disabled>
                            Color
                        </Option>

                        <Option value="white"> White </Option>
                        <Option value="black"> Black </Option>
                        <Option value="red"> Red </Option>
                        <Option value="blue"> Blue </Option>
                        <Option value="yellow"> Yellow </Option>
                        <Option value="green"> Green </Option>

                    </Select>

                    <Select name="size" onChange={handleFilters}>
                        <Option selected disabled>
                            Size
                        </Option>

                        <Option value = "XS"> XS </Option>
                        <Option value = "S"> S </Option>
                        <Option value = "M"> M </Option>
                        <Option value = "L"> L</Option>
                        <Option value = "XL"> XL </Option>
                        <Option value = "XXL"> XXL </Option>

                     </Select>
                </Filter>

                <Filter> 
                    <FilterText>
                        Sort Products: 
                    </FilterText>

                    <Select name="sort" onChange={handleSort}>
                            <Option selected value="newest">
                                Newest
                            </Option>

                            <Option value="asc"> Price (asc) </Option>
                            <Option value="desc"> Price (desc) </Option>
                     </Select>

                </Filter>
            </FilterContainer>

            <Products cat = {cat} filters = {filters} sort = {sort}/>

            <Newsletter />

            <Footer />

        </Container>
    );
}
 
export { ProductList };