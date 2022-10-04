import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function Pokemones () {

  const [poke, setPoke] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState("");
  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/pokemon/?limit=151offset=0";
  
  const getFotosPoke = async () => {
    const res = await fetch(url);
    const {results} = await res.json();
     setPoke(results);
    };
   const goToPokemonDetail = async () => {
    if (pokemonSelected) navigate(`/pokemones/${pokemonSelected} `);
    else alert ("Debe seleccionar un pokemon");
   };
   
      useEffect(() => {
    getFotosPoke();
  }, []);


  return (
    <>
      <div className="mt-5 text-center">
        <h1>Bienvenido maestro pokemón</h1>
        <div className="col-5 col-sm-3 col-lg-2 mx-auto">
          <select
            value={pokemonSelected}
            className="form-select text-center"
            onChange={({ target }) => setPokemonSelected(target.value)}
          >
            <option value="" disable>
              Pokemones
            </option>
            {poke.map(({ name }, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
          <br />
          <Button onClick={goToPokemonDetail} variant="dark" className="" mt-3>
            Ver Detalle
          </Button>
        </div>
      </div>
      <Outlet />
    </>
  );
};


