import { useState } from "react";
import { POKEMON } from "../Utilities/API/ApiDefinition";
import mainApiService from "../Utilities/API/ApiService";
import CardPlaceholder from "./CardPlaceholder";
import PokemonCard from "./PokemonCard";

export default function SearchPokemonWithFunction() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [pokemonData, setPokemonData] = useState<Record<string, any> | null>(
    null
  );

  const [error, setError] = useState<string | null>(null);

  const getPokemon = async () => {
    setError(null);
    setPokemonData(null);

    if (name) {
      setLoading(true);
      const payload = POKEMON.GET_POKEMON<string>(name);
      const result = await mainApiService<
        Record<string, string>,
        Record<string, any>
      >(payload);

      if (result?.error) {
        setError(result.error as string);
      }

      setPokemonData(result);
      setLoading(false);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-lg-6 mx-auto">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Pokemon Name"
              id=""
              value={name}
              jest-id={"input-field"}
              className="form-control w-100"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
         
          <div className="mt-2 d-flex justify-content-center">
            <button className="btn btn-danger px-4" onClick={getPokemon}>Search</button>
          </div>
        </div>
      </div>
      {name && (
        <>
          {error ? (
            <div className="h1 text-center text-primary mt-5">{error}</div>
          ) : (
            <div className="row">
              <div className="col-12 col-sm-8 col-lg-6 mx-auto">
                {loading ? (
                  <CardPlaceholder />
                ) : (
                  <PokemonCard pokemonDetails={pokemonData?.data} />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
