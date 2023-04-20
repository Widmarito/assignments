export interface IResGetPokemons {
  count: number
  next: string
  previous: any
  results: ISimplePokemon[]
}

export interface ISimplePokemon {
  name: string
  url: string
}
