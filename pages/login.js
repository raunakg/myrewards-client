import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../components/responsive'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Context } from '../context'
import { SyncOutlined } from '@ant-design/icons'
import axios from 'axios'
import { toast } from 'react-toastify'

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    bottom: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const A = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const {
        state: { user },
        dispatch,
    } = useContext(Context)

    const router = useRouter()

    useEffect(() => {
        if (user !== null) router.push('/')
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.table({name, email, password})
        try {
            setLoading(true)
            const { data } = await axios.post(`/api/auth/login`, {
                email,
                password,
            })
            // console.log('login response',data)
            dispatch({
                type: 'LOGIN',
                payload: data,
            })
            // save in local storage
            window.localStorage.setItem('user', JSON.stringify(data))
            toast.success('Logged in Successfully!')
            //redirect
            router.push('/')
            // setLoading(false)
        } catch (err) {
            setLoading(false)
            toast.error(err.response.data)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button
                        type="Submit"
                        disabled={!email || !password || loading}
                    >
                        {' '}
                        {loading ? <SyncOutlined spin /> : 'LOGIN'}
                    </Button>
                    <Link href="/register">
                        <A>CREATE A NEW ACCOUNT</A>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default login
