import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
import { Badge } from '@mui/material';

const Container = styled.div`
    height: 60px;
    margin-bottom: 20px;
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left : 25px;

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>

                <SearchContainer>
                    <Input />
                    <Search style={{color:'gray', fontSize: '16px'}} />
                </SearchContainer>
            </Left>
            
            <Center>
                <Logo>
                    Logo
                </Logo>
            </Center>

            <Right>
                <MenuItem> Register </MenuItem>
                <MenuItem> Sign In </MenuItem>
                <MenuItem>
                <Badge badgeContent={5} color="secondary">
                     <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
