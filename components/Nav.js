import styled from 'styled-components'
import { mobile } from './responsive'
import { categories } from '../data'
import Link from 'next/link'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px', flexDirection: 'column' })}
`

const Left = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
`

const AllCategoriesContainer = styled.div``
const Select = styled.select`
    font-weight: 700;
    border: none;
    padding: 10px;
    margin-right: 20px;
    background-color: white;
    ${mobile({ margin: '10px 0px' })}
    transition: all 0.5s ease;
`
const Option = styled.option``

const PopularLink = styled.a`
    color: black;
    font-weight: 700;
`

const Center = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
`

const PopularCategory = styled.button`
    border: 2px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fffff1;
    box-shadow: 1px 1px teal;
    border-radius: 5px;
    color: teal;
    transition: all 0.5s ease;

    &:hover {
        background-color: teal;
        color: white;
    }
`
const PopularCategoryIcon = styled.i``
const PopularCategoryTitle = styled.span`
    font-weight: 500;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Explore = styled.a`
    color: teal;
    font-weight: 700;
`

const Nav = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <AllCategoriesContainer>
                        <Select defaultValue="explore">
                            <Option disabled value="explore">
                                Explore All Categories
                            </Option>
                            {categories.data.map((item) => (
                                <Option value={item.id} key={item.id}>
                                    {item.title}
                                </Option>
                            ))}
                        </Select>
                    </AllCategoriesContainer>
                    <Link href="#">
                        <PopularLink>Popular Categories</PopularLink>
                    </Link>
                </Left>
                <Center>
                    {categories.data.map(
                        (item) =>
                            item.popular === true && (
                                <PopularCategory key={item.id}>
                                    <PopularCategoryIcon
                                        className={`fa fa-2x ${item.icon}`}
                                    ></PopularCategoryIcon>
                                    <PopularCategoryTitle>
                                        {item.title}
                                    </PopularCategoryTitle>
                                </PopularCategory>
                            )
                    )}
                </Center>
                <Right>
                    <Link href="#">
                        <Explore>Explore all brands</Explore>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Nav
