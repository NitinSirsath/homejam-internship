import React from 'react'
import data from './cardData'
import styled from 'styled-components';

const Container = styled.div`
    padding: 0px 150px ;
    background-color: #0c0b0b;
    color: white;
`
const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 30px 0px; */
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
    height: 300px;
    border: 1px solid white;
   
   
`
const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
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
                   return <>
                   <CardContainer>
                    <div></div>
                    <div>
                        <p>{ele.occupation}</p>
                        <h4>{ele.name}</h4>
                    </div>
                   </CardContainer>
                   </> 
               })
           }
       </CardWrapper>
    </Container>
    </>
  )
}

export default Card