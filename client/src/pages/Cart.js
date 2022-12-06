import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { Navbar, Announcement, Footer } from '../components'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { userRequest } from '../httpRequest';
import { useNavigate } from "react-router-dom";
// const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET)

// const PublishableKey = process.env.REACT_APP_PUBLISHABLE_SECRET;

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "none"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`

`

const TopText = styled.div`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span`

`


const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200 ;
`

const SummaryItem = styled.div`
    margin: 30px 0px ;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`
    
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    const cart = useSelector(state => state.cart)

    const [stripeToken, setStripeToken] = useState(null)

    const history = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const stripeRequest = async() => {
            try{
                const res = await userRequest.post('/order/payment', {
                    tokenId: stripeToken.id,
                    amount: 100,
                })
                console.log("res", res)
                history.push("/success", {data: res.data})
                console.log('done')
            }
            catch{}
        }

        stripeToken && cart.total >=1 && stripeRequest()
    }, [stripeToken, cart.total, history])

    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <Title> YOUR BAG </Title>
                <Top>
                    <TopButton> CONTINUE SHOPPING </TopButton>
                    <TopTexts>
                        <TopText> Shopping Bag(2) </TopText>
                        <TopText> Your Wishlist </TopText>

                    </TopTexts>
                    <TopButton type="filled"> CHECKOUT NOW </TopButton>

                </Top>
                <Bottom>
                    <Info>
                        {cart.products?.map((product) =>
                            <Product>
                                {/* {console.log(product.amount)} */}
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName> <b> Product: </b> {product.title} </ProductName>
                                        <ProductId> <b> ID: </b> {product._id} </ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize> <b> Size:</b> {product.size} </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount> {product.quantity} </ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>

                                    <ProductPrice> &#x20B9;  {product.price * product.quantity} </ProductPrice>
                                </PriceDetail>
                                <Hr />
                            </Product>

                        )}
                    </Info>

                    <Summary>
                        <SummaryTitle> Order Summary </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText> SubTotal </SummaryItemText>
                            <SummaryItemPrice> &#x20B9; {cart.total} </SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText> Estimated Shipping </SummaryItemText>
                            <SummaryItemPrice> &#x20B9; 50 </SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText> Shipping Discount </SummaryItemText>
                            <SummaryItemPrice> &#x20B9; -50 </SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText > Total </SummaryItemText>
                            <SummaryItemPrice> &#x20B9; {cart.total} </SummaryItemPrice >
                        </SummaryItem>

                            
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
}

export { Cart };