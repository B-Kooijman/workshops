const url = 'https://pokeapi.co/api/v2/';

export async function getPokemonNames(limit: number) {
    const result = await fetch(`${url}pokemon/?limit=${limit}`)
    .then(response => response.json())
  
    return result;
}

export async function getPokemon(name: string) {
    const result = await fetch(`${url}pokemon/${name}`)
    .then(response => response.json())
  
    return result;
}

export async function getPokemonByType(type: string) {
    const result = await fetch(`${url}type/${type}`)
    .then(response => response.json())
  
    return result;
}