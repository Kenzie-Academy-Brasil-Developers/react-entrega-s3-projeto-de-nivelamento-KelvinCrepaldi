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

  h1 {
    font-size: 20px;
  }
  input {
    width: 100%;
    height: 30px;
    font-size: 20px;
  }

  button {
    width: 150px;
    height: 30px;
  }
`;
