import React from 'react'
import  styled  from 'styled-components'
import logo from './img/logo.png'
import search from './img/search.png'
import bag from './img/bag.png'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    color: white;
`
const Items =styled.div`
    display: flex;
    gap: 20px;
`
const Input = styled.input`
    background-color: transparent;
    width: 70px;
    outline: none;
    border: none;
    font-size: 16px;
    color: white;
    ::placeholder{
        color: white;
        font-size: 16px;
    }
`
const ImgSearch = styled.img`
    /* margin: 0px 6px; */
    height: 14px;
`
const Search = styled.div`
display: flex;
align-items: center;
gap: 4px;
`

const Navbar = () => {
  return (
    <>
    <Container>
        <div className="logo"><img src={logo} alt="" /></div>
        <Items className="items">
            <Search>
            <ImgSearch src={search} alt="" /><Input type="text" placeholder='Search' />
            </Search>
        <p>Help</p>
        <p>Account</p>
        <p><ImgSearch src={bag} alt="" /></p>
        </Items>
    </Container>
    </>
  )
}

export default Navbar