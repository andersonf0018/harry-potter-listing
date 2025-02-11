"use client";

import CharacterCardsPaginated from "@/components/CharacterCardsPaginated";
import HouseIcon from "@/components/HouseIcon";
import HouseLabel from "@/components/HouseLabel";
import { useFavoriteListContext } from "@/contexts";
import type { House } from "@/types";

const FavoritesPage = () => {
  const { favoritesCharacters, favoriteHouse } = useFavoriteListContext();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-5">
        <h1 className="text-2xl font-bold">Favorite House: </h1>
        <div className="flex items-center gap-2">
          {favoriteHouse && (
            <HouseIcon house={favoriteHouse} width={50} height={50} />
          )}
          <HouseLabel house={favoriteHouse as House} />
        </div>
      </div>
      <CharacterCardsPaginated
        data={favoritesCharacters}
        title="Favorites Characters"
      />
    </div>
  );
};

export default FavoritesPage;
