import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid black;
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255, 0.5);

  p {
    width: 100%;
    margin: 2px;
    padding: 0;
    text-align: left;
    border-bottom: 1px solid grey;
  }

  span {
    color: green;
  }
`;
