import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { Navbar, Announcement, Footer } from '../components'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from 'react'
import { userRequest } from '../httpRequest';
import { useNavigate } from "react-router-dom";

const PublishableKey = process.env.REACT_APP_PUBLISHABLE_SECRET;

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

                            <StripeCheckout
                                name="Shop"
                                image="data:image/png;base64,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"
                                billingAddress
                                shippingAddress
                                description = {`Your total is ${cart.total}`}
                                amount = {cart.total * 100}
                                token = {onToken}
                                stripeKey = {PublishableKey}
                                data-currency="INR"
                                >
                                    <Button> Checkout Now </Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
}

export { Cart };