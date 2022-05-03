import styled from 'styled-components'
import { mobile } from './responsive'
import Link from 'next/link'
import { HeartOutlined } from '@ant-design/icons'
import { useState } from 'react'
import ProductModal from './ProductModal'

const Container = styled.div`
    border: 1px solid lightgray;

    width: 16.66%;
    ${mobile({ width: '33.33%' })}
    transition: all 0.5s ease;
    &:hover {
        background-color: #f5f5f5;
        transform: scale(1.1);
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    cursor: pointer;
`
const ImageContainer = styled.div`
    height: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TitleHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h3`
    font-size: 17px;
    font-weight: 600;
`
const TitleIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    color: red;

    &:hover {
        background-color: pink;
        transform: scale(1.1);
    }
`
const Offer = styled.span`
    font-size: 15px;
    font-weight: 300;
    color: black;
`

const BottomLink = ({ data, favourite = false }) => {
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState({})
    return (
        <Container>
            <Wrapper
                onClick={() => {
                    if (favourite) {
                        setModalData(data)
                        setShowModal(!showModal)
                    }
                }}
            >
                <ImageContainer>
                    <Image src={data.img} />
                </ImageContainer>
                <InfoContainer>
                    <TitleHeader>
                        <Title>{data.title}</Title>
                        {favourite && (
                            <TitleIcon>
                                <HeartOutlined />
                            </TitleIcon>
                        )}
                    </TitleHeader>

                    {data.offer && <Offer>{data.offer}</Offer>}
                </InfoContainer>
            </Wrapper>
            <ProductModal
                showModal={showModal}
                setShowModal={setShowModal}
                modalData={modalData}
            />
        </Container>
    )
}

export default BottomLink
