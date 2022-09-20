import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;

`
const Image = styled.img`
    width: 100% ;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.div`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    :hover {
        background-color: #f8f4f4;
    }

    /* &:hover: {
    } */
`


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>

                <InfoContainer>
                    <Title> It's the Title </Title>
                    <Desc> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia culpa necessitatibus velit et laborum! Cupiditate necessitatibus atque iure iste incidunt vitae dolores, deserunt natus animi exercitationem quae nisi laboriosam suscipit accusamus, sint voluptatibus esse, quas repellat! Laudantium magni eligendi nostrum maxime molestiae, officiis impedit architecto. Necessitatibus libero praesentium accusamus voluptas dolore laudantium, sint, reprehenderit quo, dolorum aspernatur ipsum dolor? Repellat, non eum fuga odit possimus sit sed dignissimos atque suscipit explicabo fugit officia, ea aliquid esse. Maiores, nobis necessitatibus. Dolor voluptas debitis ut, expedita consequuntur porro impedit labore animi facilis accusamus neque corporis velit consectetur vero, exercitationem vitae sint reiciendis.</Desc>
                    <Price> $ 20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle> Color </FilterTitle>

                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="grey" />

                        </Filter>

                        <Filter>
                            <FilterTitle> Size </FilterTitle>

                            <FilterSize>
                                <FilterSizeOption> XS </FilterSizeOption>
                                <FilterSizeOption> S </FilterSizeOption>
                                <FilterSizeOption> M </FilterSizeOption>
                                <FilterSizeOption> L </FilterSizeOption>
                                <FilterSizeOption> XL </FilterSizeOption>

                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount> 2 </Amount>
                            <Add />
                        </AmountContainer>

                        <Button> ADD TO CARD </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <NewsLetter />
            <Footer />
        </Container>
    );
}

export default Product;