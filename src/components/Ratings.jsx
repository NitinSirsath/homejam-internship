import React from 'react'
import styled from 'styled-components';
import data from './ratingsData'

const RatingBoxes = styled.div`
color: #cfcccc;
border: .4px solid grey;
border-radius: 50%;
height: 150px;
width: 150px;
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 5px;

`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
`


const Ratings = () => {
  return (
    <>
    <Container>
        {data.map((ele) => {
            // console.log(ele);
            return <>
            <RatingBoxes key={ele.id}>
                <img src={ele.img} height='14px' alt="" />
                <p>{ele.value}</p>
                <p>{ele.label}</p>
            </RatingBoxes>
            </>
        })}
    </Container>
    </>
  )
}

export default Ratings