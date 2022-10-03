import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "../apis";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

import PokemonCard from "../components/pokemon/PokemonCard";

import MainLayout from "../layouts/MainLayout";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title="Listado de Pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((item) => (
          <PokemonCard key={item.id} pokemon={item} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

//  Se ejecuta del lado del servidor
// Usar getStaticProps siempre y se tenga conocimiento de antemano que estos son los parámetros
// que esta página necesita

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon/?limit=151"
  );

  const pokemons: SmallPokemon[] = data.results.map((item, index) => ({
    ...item,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
export default HomePage;
