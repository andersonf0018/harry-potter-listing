import { createContext, useContext, useState } from "react";
import type { Character, House } from "@/types";

interface FavoriteListProviderProps {
  children: React.ReactNode;
}

interface FavoriteListContextType {
  favoritesCharacters: Character[];
  favoriteHouse: House | null;
  setFavoriteHouse: (house: House | null) => void;
  addFavoriteCharacter: (character: Character) => void;
  removeFavoriteCharacter: (character: Character) => void;
  isFavoriteCharacter: (character: Character) => boolean;
  isFavoriteHouse: (house: House) => boolean;
}

const FavoriteListContext = createContext<FavoriteListContextType>({
  favoritesCharacters: [],
  favoriteHouse: null,
  setFavoriteHouse: () => {},
  addFavoriteCharacter: () => {},
  removeFavoriteCharacter: () => {},
  isFavoriteCharacter: () => false,
  isFavoriteHouse: () => false,
});

export const FavoriteListProvider = ({
  children,
}: FavoriteListProviderProps) => {
  const [favoritesCharacters, setFavoritesCharacters] = useState<Character[]>([]);
  const [favoriteHouse, setFavoriteHouse] = useState<House | null>(null);

  const addFavoriteCharacter = (character: Character) => {
    setFavoritesCharacters([...favoritesCharacters, character]);
  };

  const removeFavoriteCharacter = (character: Character) => {
    setFavoritesCharacters(
      favoritesCharacters.filter((f) => f.id !== character.id)
    );
  };

  const isFavoriteCharacter = (character: Character) => {
    return favoritesCharacters.some((f) => f.id === character.id);
  };

  const isFavoriteHouse = (house: House) => {
    return favoriteHouse === house;
  };

  return (
    <FavoriteListContext.Provider
      value={{
        favoriteHouse,
        setFavoriteHouse,
        favoritesCharacters,
        addFavoriteCharacter,
        removeFavoriteCharacter,
        isFavoriteCharacter,
        isFavoriteHouse,
      }}
    >
      {children}
    </FavoriteListContext.Provider>
  );
};

export const useFavoriteListContext = () => {
  const context = useContext(FavoriteListContext);
  if (!context) {
    throw new Error(
      "useFavoriteListContext must be used within a FavoriteListContext"
    );
  }
  return context;
};
