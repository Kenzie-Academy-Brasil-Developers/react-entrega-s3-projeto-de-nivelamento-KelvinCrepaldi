import { Container } from "./style";

const Cart = ({ cart, setCart }) => {
  const handleRemove = (code) => {
    const filtered = cart.filter((e) => e.code !== code);
    setCart(filtered);
  };

  return (
    <Container>
      {cart.map((item) => (
        <div key={item.code} className="product">
          <p>código:{item.code}</p>
          <p>nome: {item.name}</p>
          <p>desconto: {item.discount}</p>
          <p>preço: {item.price} </p>
          <button onClick={() => handleRemove(item.code)}>remover</button>
        </div>
      ))}
    </Container>
  );
};

export default Cart;
