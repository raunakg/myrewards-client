import styled from 'styled-components'
import { mobile } from '../components/responsive'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { SyncOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Context } from '../context'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const Container = styled.div`
    width: 100vw;
    height: 80vh;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '100%' })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    margin-top: 10px;
    width: 40%;
    bottom: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const ErrorMessage = styled.p`
    width: 100%;
    color: red;
    font-size: 12px;
    margin: 20px 0px;
`

const register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errMessaage, setErrMessage] = useState('')

    const {
        state: { user },
    } = useContext(Context)

    const router = useRouter()

    useEffect(() => {
        if (user !== null) router.push('/')
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault() // to stop default browser page reload
        // console.table({name, email, password})
        try {
            setLoading(true)
            const { data } = await axios.post(`/api/auth/register`, {
                name,
                email,
                password,
            })
            // console.log('register response',data)
            toast.success('Registration successful, Please login.')
            setName('')
            setEmail('')
            setPassword('')
            setLoading(false)
        } catch (err) {
            toast.error(err.response.data)
            setLoading(false)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        placeholder="email"
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
                    <Input
                        placeholder="confirm password"
                        type="password"
                        onChange={(e) =>
                            e.target.value === password
                                ? setErrMessage('')
                                : setErrMessage("Password doesn't match")
                        }
                        required
                    />
                    {errMessaage && <ErrorMessage>{errMessaage}</ErrorMessage>}

                    <Button
                        type="Submit"
                        disabled={
                            !name ||
                            !email ||
                            !password ||
                            loading ||
                            errMessaage
                        }
                    >
                        {' '}
                        {loading ? <SyncOutlined spin /> : 'CREATE'}
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default register
