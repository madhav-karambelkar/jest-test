import { API_URLS_POKEMON_API, HTTP_METHODS } from "./ApiConstants";

interface PokemonModel<T> {
  url: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  data: Record<string, T>;
}

export const POKEMON = ({
  GET_POKEMON: <T>(name: T) => ({
    url: API_URLS_POKEMON_API.GET_POKEMON_API_URL + name,
    method: HTTP_METHODS.GET,
    data: {} as Record<string, T>,
  } as PokemonModel<T>),
});