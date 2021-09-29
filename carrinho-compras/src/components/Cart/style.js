import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  display: flex;
  padding: 30px;
  border: 1px solid black;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.5);

  .product {
    border: 1px solid grey;
    font-size: 15px;
    padding: 10px;
    margin: 3px;
    border-radius: 10px;
    width: 100%;
  }

  p {
    margin: 0;
    text-align: left;
  }
`;
