import React from 'react'
import Navbar from './Navbar'
import Ratings from './Ratings'
import styled from 'styled-components';
import bg from './img/bg4.jpeg'

const HeroContainer = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)), url(${props => props.background});
    height: 100vh;
    
`
const TitleBox = styled.div`
    color: #dbdada;
    padding: 190px 150px  0px ;
        h1{
            font-size: 50px;
            font-family: 'Montserrat', sans-serif;
            margin: 10px 0px;
        }
        p{
            color: #b8b6b6;
        }
`
const RatingBoxes = styled.div`
    margin-top: 150px;
`

const Home = () => {
  return (
    <HeroContainer background={bg}>
        <Navbar />
        <TitleBox>
            <h1>Project Power</h1>
            <p>An ex-soldier, a teen collide in new orleans  as they hunt for the source <br /> behind dangerous new pill that grants uses temporary superpowers.</p>
        </TitleBox>
        <RatingBoxes>
            <Ratings />
        </RatingBoxes>

    </HeroContainer>
  )
}

export default Home