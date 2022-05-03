import styled from 'styled-components'
import { mobile } from './responsive'
import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../context'

const ImageRounded = styled.img`
    padding: 30px;
    border-radius: 50%;
    width: 100%;
    height: auto;
    max-height: 400px;
    ${mobile({ width: '70vw' })}
`
const Subtitle = styled.span`
    color: teal;
    font-weight: 700;
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 30px;
`
const Hr = styled.hr`
    color: teal;
    border: none;
    height: 1px;
    width: 20%;
`
const Desc = styled.p`
    font-weight: 500;
`
const Button = styled.button`
    color: white;
    padding: 10px;
    font-size: 15px;
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

const Rewards = () => {
    const { state, dispatch } = useContext(Context)
    const { user } = state
    return (
        <div className="container-fluid">
            <div className="row p-5 justify-content-center align-items-center">
                <div className="col m-2">
                    <Subtitle>WHAT IS MY REWARDS?</Subtitle>
                    <Title>Start every shop with My Rewards</Title>
                    <Hr />
                    <Desc>
                        Enjoy Rewards Points you can actually use. Each time you
                        spend on your card, you will earn Rewards Points that
                        can be redeemed for a wide array of gifts such as
                        shopping vouchers, dining vouchers, entertainment,
                        electronics and much much more!
                    </Desc>
                </div>
                <div className="col">
                    <ImageRounded src="girl.jpg" />
                </div>
            </div>
            <div className="row p-5 justify-content-center align-items-center">
                <div className="col">
                    <ImageRounded src="shopping.png" />
                </div>
                <div className="col m-2">
                    <Subtitle>EASY AS.</Subtitle>
                    <Title>How does My Reward work?</Title>
                    <Hr />

                    <ol>
                        <li>
                            <div className="fw-bold fs-6">
                                Find your Product, service or brand
                            </div>
                            <br />
                            <div>
                                Search for an item, brand, service or experience
                                <br />
                                For cashback or offers you will be redirected to
                                retailer's website
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="fw-bold fs-6">
                                Complete your purchase
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="fw-bold fs-6">
                                The retailer approves your cashback
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="fw-bold fs-6">
                                Withdraw your cash
                            </div>
                            <br />
                            <div>
                                Withdraw your cash on your bank account or
                                paypal account
                            </div>
                        </li>
                    </ol>
                    {!user ? (
                        <Link href="/register">
                            <Button>SIGN UP FOR FREE</Button>
                        </Link>
                    ) : (
                        <Link href="#">
                            <Button>REDEEM NOW</Button>
                        </Link>
                    )}
                </div>
            </div>
            <div className="row p-5 justify-content-center align-items-center">
                <div className="col-3">
                    <img
                        src="heart.jpg"
                        style={{ maxWidth: '100%', maxHeight: '400px' }}
                    />
                </div>
                <div className="col">
                    <Title>Save all your favourite deals for exploring.</Title>
                    <Desc>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the lea
                    </Desc>
                </div>
            </div>
        </div>
    )
}

export default Rewards
