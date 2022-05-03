import { Carousel } from 'antd'

import styled from 'styled-components'
import { sliderItems } from '../data'

const Title = styled.h1`
    font-weight: 700;
    font-size: 25px;
    color: teal;
`

const Slide = styled.div`
    position: relative;
`

const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SlideTitle = styled.h2`
    color: white;
`

const SlideImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`

const SlideBody = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 300;
`

const SlideButton = styled.button`
    background-color: white;
    border: none;
    padding: 10px;
    font-weight: 600;
`

const Slider = () => {
    return (
        <>
            <Title>Top offers</Title>
            <Carousel autoplay>
                {sliderItems.map((item) => (
                    <Slide key={item.id}>
                        <SlideImage src={item.image} />

                        <InfoContainer>
                            <SlideTitle>{item.title}</SlideTitle>
                            <SlideBody>{item.body}</SlideBody>
                            <SlideButton>{item.button}</SlideButton>
                        </InfoContainer>
                    </Slide>
                ))}
            </Carousel>
        </>
    )
}

export default Slider
