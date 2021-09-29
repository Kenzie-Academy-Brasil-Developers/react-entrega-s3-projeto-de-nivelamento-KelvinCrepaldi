import { Card } from "./styled";

const Products = ({ products, cart, setCart }) => {
  const handleAdd = (product) => {
    if (cart.indexOf(product) === -1) {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <Card key={product.code}>
          <p>
            <span>Código:</span> {product.code} | <span>Nome:</span>{" "}
            {product.name}
          </p>
          <p>
            <span>Descrição:</span> {product.description}
          </p>
          <p>
            <span>Preço:</span>
            {product.price.toFixed(2)}
          </p>
          <p>
            <span>Desconto:</span> {product.discount}
          </p>
          <button onClick={() => handleAdd(product)}>comprar</button>
        </Card>
      ))}
    </div>
  );
};

export default Products;
