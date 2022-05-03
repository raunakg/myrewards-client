import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { brands, categories, products } from '../data'
import BottomLink from './BottomLink'

const Container = styled.div`
    padding: 20px 0px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 21px;
    color: teal;
`

const Button = styled.button`
    background-color: white;
    border-color: teal;
    font-weight: 500;
    width: 100px;
    height: 40px;
`

const BottomLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const BottomLinkList = ({ name }) => {
    const [bottomLink, setBottomLink] = useState('')
    const [bottomLinkData, setBottomLinkData] = useState({})
    const [favourite, setFavourite] = useState(false)

    useEffect(() => {
        setBottomLink(name)
        if (name === 'categories') {
            setBottomLinkData(categories)
        } else if (name === 'products') {
            setBottomLinkData(products)
            setFavourite(true)
        } else if (name === 'brands') {
            setBottomLinkData(brands)
            setFavourite(true)
        }
    }, [])

    return (
        <Container>
            <Header>
                <Title>Explore {bottomLinkData.title}</Title>
                <Button>VIEW ALL</Button>
            </Header>

            <BottomLinkContainer>
                {bottomLinkData &&
                    bottomLinkData.data &&
                    bottomLinkData.data
                        .slice(0, 6)
                        .map((item) => (
                            <BottomLink
                                data={item}
                                favourite={favourite}
                                key={item.id}
                            />
                        ))}
            </BottomLinkContainer>
        </Container>
    )
}

export default BottomLinkList
