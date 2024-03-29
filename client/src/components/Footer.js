import styled from 'styled-components';
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.div`

`

const Desc = styled.p`
    margin: 20px 0px;
    flex: 1;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;

`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo> Aniket </Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas temporibus, tempora, exercitationem aspernatur nisi ad similique quisquam illum quos deleniti qui voluptates quae consectetur incid
                </Desc>
                <SocialContainer>
                    <SocialIcon color= "#3B5999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color= "#E4405F">
                        <Instagram />
                    </SocialIcon>
                    
                    <SocialIcon color= "#55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
                
            </Left>

            <Center>
                <Title> Useful Links </Title>
                
                <List>
                    <ListItem> Home</ListItem>
                    <ListItem> Cart </ListItem>
                    <ListItem> Men's Fashion </ListItem>
                    <ListItem> Women's Fashion </ListItem>
                    <ListItem> Accessories </ListItem>
                    <ListItem> My Account </ListItem>
                    <ListItem> Order Tracking </ListItem>
                    <ListItem> Wishlist </ListItem>
                    <ListItem> Terms </ListItem>
                </List>
            </Center>

            <Right>
                <Title>
                    Contact
                </Title>

                <ContactItem>
                    <Room style = {{marginRight: "10px"}}/>
                    Mayur Vihar Phase-III Delhi-110 096
                </ContactItem>
                <ContactItem>
                    <Phone style = {{marginRight: "10px"}}/>
                    +91 85059 90564
                </ContactItem>
                <ContactItem>
                    <MailOutline style = {{marginRight: "10px"}}/>
                    aniketbisht24@gmail.com
                </ContactItem>

                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
}
 


export default Footer;