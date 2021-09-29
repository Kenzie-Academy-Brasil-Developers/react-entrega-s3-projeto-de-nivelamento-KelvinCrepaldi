import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";

const Form = ({ setProducts, products }) => {
  const yupSchema = yup.object().shape({
    discount: yup.number().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    name: yup.string().required(),
    code: yup.number().required().integer(),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const submitForm = (e) => {
    setProducts([...products, e]);
  };
  return (
    <Container>
      <h1>Adicionar produto:</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input placeholder="code" {...register("code")}></input>
        <input placeholder="name" {...register("name")}></input>
        <input placeholder="description" {...register("description")}></input>
        <input placeholder="price" {...register("price")}></input>
        <input placeholder="discount" {...register("discount")}></input>
        <button type="submit">Adicionar</button>
      </form>
    </Container>
  );
};

export default Form;
