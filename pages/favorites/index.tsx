import { useEffect, useState } from "react";
import { FavoritesPokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import MainLayout from "../../layouts/MainLayout";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <MainLayout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
