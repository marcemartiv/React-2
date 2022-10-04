import { Navbar } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import img from "../assets/img/localizacion.jpg";

export default function Navigation() {
  return (
    <>
      <Navbar
        className="d-flex justify-content-between px-5"
        variant="light"
        style={{ background: "#5b5b5b" }}
      >
        <Navbar.Brand>
          <img src={img} alt="" />
        </Navbar.Brand>

        <div className="d-flex">
          <NavLink
            to="/"
            className="link mx-3"
            style={({ isActive }) => {
              return {
                color:isActive ? "red" : "",
              };
            }}
          >
            Home
          </NavLink>
          

          <NavLink
            to="/Pokemones"
            className="link"
            style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          >
            Pokemones
          </NavLink>
        </div>
      </Navbar>
    </>
  );
}
