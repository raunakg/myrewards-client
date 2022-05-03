import React from 'react'
import Banner from '../components/Banner'
import BottomLinkList from '../components/BottomLinkList'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Rewards from '../components/Rewards'
import Slider from '../components/Slider'
import TopNav from '../components/TopNav'

const index = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <div className="container">
                <Rewards />
                <BottomLinkList name="categories" />
                <Slider />
                <BottomLinkList name="products" />
                <BottomLinkList name="brands" />
            </div>
        </div>
    )
}

export default index
