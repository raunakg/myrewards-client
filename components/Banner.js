import styled from 'styled-components'
import { mobile } from './responsive'
import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../context'

const Container = styled.div`
    width: 100%;
    height: 60vh;

    position: relative;
    overflow: hidden;
    background-image: linear-gradient(#a020f0, purple);
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: white;
`

const InfoContainer = styled.div`
    flex: 2;
    padding: 0px;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
`

const Title = styled.h1`
    font-size: 50px;
    color: white;
    font-weight: 800;
    ${mobile({ fontSize: '20px' })}
`

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 500;
    ${mobile({ fontSize: '10px', margin: '20px 0px' })}
`

const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    background-color: teal;
    border-color: white;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    ${mobile({ fontSize: '10px', padding: '5px' })}
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`

const ImgContainer = styled.div`
    display: flex;
    height: 100%;
    flex: 1;
    ${mobile({ height: '100%' })}
`

const Image = styled.img`
    height: 100%;
`

const Banner = () => {
    const { state, dispatch } = useContext(Context)
    const { user } = state
    return (
        <Container>
            <Wrapper>
                <Header>
                    <InfoContainer>
                        <Title>I get more everytime I shop</Title>
                        <Desc>
                            Get Cashback or a Discount on products, services and
                            experiences when you shop at one of our 4500
                            partners.
                        </Desc>
                        {!user ? (
                            <Link href="/register">
                                <Button>SIGN UP FOR FREE</Button>
                            </Link>
                        ) : (
                            <Link href="#">
                                <Button>REDEEM NOW</Button>
                            </Link>
                        )}
                    </InfoContainer>
                    <ImgContainer>
                        <Image src="banner.png" />
                    </ImgContainer>
                </Header>
            </Wrapper>
        </Container>
    )
}

export default Banner
