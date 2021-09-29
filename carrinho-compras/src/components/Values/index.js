import { Container } from "./style";

const Values = ({ cart }) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const descontos = cart.reduce((acc, item) => {
    return acc + item.discount;
  }, 0);

  const final = total - descontos;

  return (
    <Container>
      <p>total: {total.toFixed(2)}</p>
      <p>descontos: {descontos.toFixed(2)}</p>
      <p>a pagar: {final.toFixed(2)}</p>
    </Container>
  );
};

export default Values;
