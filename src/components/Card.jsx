import React from 'react'
import data from './cardData'
import styled from 'styled-components';
import arrow from  './img/arrow.png'

const Container = styled.div`
    padding: 0px 150px ;
    background-color: #0c0b0b;
    color: white;
`
const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
    p{
        color: yellow;
        font-size: small;
    }
    h2{
        font-weight: lighter;
        border-bottom: 1px solid blue;
    }
`
const CardContainer = styled.div`
    /* height: 400px; */
    /* border: 1px solid white; */
    border-radius: 10px;
    background-color: #0d0d22;
   width: 240px;
   box-shadow: rgba(38, 235, 120, 0.8) 5px -5px 0px 3px;


    span{
        background-color: yellow;
        font-size: small;
        color: black;
    }
    h4{
        font-weight: 600;
        margin-top: 24px;
    }
   
`
const Img = styled.div`
 background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:  url(${props => props.background});
    /* height: 65%; */
   height: 230px;
   
`

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
    const CardInfo = styled.div`
        padding: 27px 16px 24px 16px;
        
            span{
                margin-top: 24px;
                padding: 3px 7px;
                border-radius: 2px;
            }
            @media (max-width: 768px) {
    flex-direction: column;
  }
    `
const MoreInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #0259EB;
    margin-top: 10px;
   
    p{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

const Card = () => {
  return (
    <>
    <Container>
       <Heading>
       <h2>Upcoming Shows</h2>
       <p>View All</p>
       </Heading>
       <CardWrapper>
           {
               data.map((ele)=>{
                   return <CardContainer key={ele.name}>
                    <Img background={ele.img}></Img>
                    <CardInfo>
                        <span>{ele.occupation}</span>
                        <h4>{ele.name}</h4>
                        <MoreInfo>
                            <p>More Info <img src={arrow} alt="" height='16px' /></p>
                            <p><img src={ele.ticket} height='18px' alt="" /></p>
                        </MoreInfo>
                    </CardInfo>
                   </CardContainer>
                   
               })
           }
       </CardWrapper>
    </Container>
    </>
  )
}

export default Card