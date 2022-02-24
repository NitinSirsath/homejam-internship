import styled from "styled-components";
import React from "react";
import larrow from "./img/left-arrow.png";
import rarrow from "./img/right-arrow.png";
import data from "./reviewData";

const Container = styled.div`
  padding: 0px 150px;
  background-color: #0c0b0b;
  color: white;
  height: 70vh;
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e9e8e8;
  padding: 40px 0px;

  h2 {
    font-weight: lighter;
    border-bottom: 1px solid blue;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 0px 5px;
    }
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Card = styled.div`
  width: 360px;
  border: 2px solid #f09103;
  padding: 36px 24px;
  border-radius: 20px;
  box-shadow: rgba(128, 11, 238, 0.8) 5px -5px 0px 3px;
`;
const Img = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.background});
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;
const CardInfo = styled.div`
  display: flex;
`;

const CardInfoUser = styled.div`
  margin: 0px 20px;
  p {
    font-size: 10px;
    color: #97610f;
  }
  h5 {
    margin-bottom: 5px;
  }
`;
const Dummy = styled.div`
  font-size: 13px;
  margin-top: 20px;
  color: #ebe8e8;
`;

const Review = () => {
  return (
    <>
      <Container>
        <Heading>
          <h2>Reviews</h2>
          <p>
            1/12 <img src={larrow} alt="" height="16px" />{" "}
            <img src={rarrow} alt="" height="16px" />
          </p>
        </Heading>
        <CardContainer>
          {data.map((ele) => {
            return (
              <>
                <Card>
                  <CardInfo>
                    <Img background={ele.img}></Img>
                    <CardInfoUser>
                      <h5>{ele.user}</h5>
                      <p>
                        <img src={ele.country} height="13px" alt="" />
                        {ele.location}
                      </p>
                    </CardInfoUser>
                  </CardInfo>
                  <Dummy>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque illo alias officiis, iste dolore nam!
                  </Dummy>
                </Card>
              </>
            );
          })}
        </CardContainer>
      </Container>
    </>
  );
};

export default Review;
