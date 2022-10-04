import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DibujamePokemon from "../components/Card";

export default function DetallesPoke() {
    const {name} = useParams();
    const [pokemos, setPokemonos] = useState({});

    const url = "https://pokeapi.co/api/v2/pokemon";

    const getPokeMonos = async (name) => {
        const res = await fetch(`${url}/${name}`);
        const data = await res.json();
        const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((stat) => ({
            name: stat.stat.name,
            base: stat.base_stat
        }));
        const types = data.types.map((e) => e.type.name).join(" ");

        setPokemonos({ name, stats, src, types });
    };
       // console.log(pokemos)
    useEffect (() =>{
        getPokeMonos(name);
    },[name]);

    return (
      <>
        <DibujamePokemon pokemos={pokemos} />
      </>
    );
}