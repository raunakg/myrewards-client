import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { categories, products } from '../data'
import { mobile } from './responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    background-color: #e9f5f5f5;
    ${mobile({ flexWrap: 'wrap' })}
`
const First = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ minWidth: '50%' })}
`

const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Second = styled.div`
    flex: 1;
    padding: 20px;
`
const Third = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin: 10px 0;
    font-size: 15px;
    font-weight: 700;
    margin-top: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
    font-weight: 500;
    cursor: pointer;
`

const Fourth = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
    return (
        <Container>
            <First>
                <Title>About</Title>
                <List>
                    <ListItem>Terms &#38; Conditions</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                    <ListItem>Cookies</ListItem>
                    <ListItem>Corporate</ListItem>
                </List>
                <Title>Customer Service</Title>
                <List>
                    <ListItem>Contact Us</ListItem>
                </List>
            </First>
            <Second>
                <Title>Categories</Title>
                <List>
                    {categories &&
                        categories.data &&
                        categories.data.map((item) => (
                            <ListItem key={item.id}>{item.title}</ListItem>
                        ))}
                </List>
            </Second>
            <Third>
                <Title>Browse Popular Brands</Title>
                <List>
                    {products &&
                        products.data &&
                        products.data.map((item) => (
                            <ListItem key={item.id}>{item.title}</ListItem>
                        ))}
                </List>
            </Third>
            <Fourth>
                <Title>Connect with us</Title>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookFilled />
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramFilled />
                    </SocialIcon>
                </SocialContainer>
            </Fourth>
        </Container>
    )
}

export default Footer
