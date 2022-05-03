import styled from 'styled-components'
import { mobile } from './responsive'
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import axios from 'axios'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px', flexDirection: 'column' })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    height: 60px;
    ${mobile({ height: '50px' })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ width: '100%' })}
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin: 15px;
    padding: 5px;
`
const Input = styled.input`
    flex: 9;
    border: none;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    justify-content: center;
    align-items: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ width: '100%' })}
`

const MenuItem = styled.button`
    flex: 1;
    font-size: 14px;
    margin: 10px;
    height: 40px;
    border-color: teal;
    border: ${(props) => props.color === 'teal' && 'none'};
    background-color: ${(props) => (props.color === 'teal' ? 'teal' : 'white')};
    color: ${(props) => (props.color === 'teal' ? 'white' : 'teal')};
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`

const Profile = styled.a`
    flex: 1;
    font-size: 20px;
    text-align: center;
    color: teal;
    font-weight: 600;
    &:hover {
        transform: scale(1.1);
        color: teal;
    }
`

const TopNav = () => {
    const { state, dispatch } = useContext(Context)
    const { user } = state

    const router = useRouter()

    const logout = async () => {
        dispatch({
            type: 'LOGOUT',
        })
        window.localStorage.removeItem('user')
        const { data } = await axios.get('/api/auth/logout')
        toast(data.message)
        router.push('/login')
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link href="/">
                        <a>
                            <Logo src="logo.png" />
                        </a>
                    </Link>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Type your search here..." />
                        <Button>
                            <SearchOutlined />
                        </Button>
                    </SearchContainer>
                </Center>
                <Right>
                    {user === null ? (
                        <>
                            <Link href="/register">
                                <MenuItem color="teal">
                                    SIGN UP FOR FREE
                                </MenuItem>
                            </Link>
                            <Link href="/login">
                                <MenuItem color="white">SIGN IN</MenuItem>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="#">
                                <Profile>Hi {user.name.toUpperCase()}</Profile>
                            </Link>

                            <MenuItem color="white" onClick={logout}>
                                SIGN OUT
                            </MenuItem>
                        </>
                    )}
                </Right>
            </Wrapper>
        </Container>
    )
}

export default TopNav
