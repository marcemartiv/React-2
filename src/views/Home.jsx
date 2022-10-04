import { Container } from "react-bootstrap";
import img from "../assets/img/poke.jpg";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">  Bienvenido maestro pokemón     </h1>
      
      
       
        <img className="poke-amigo" src={img} alt="" />{" "}
      
    </Container>
  );
};
