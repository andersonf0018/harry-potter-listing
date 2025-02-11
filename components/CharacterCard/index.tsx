"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import placeholderImage from "@/public/placeholder.jpg";
import type { Character, House } from "@/types";
import { classNames } from "@/utils";
import { useFavoriteListContext } from "@/contexts";
import FavoriteIcon from "../FavoriteIcon";
import HouseLabel from "../HouseLabel";

interface CharacterCardProps {
  character: Character;
  redirectOnClick?: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  redirectOnClick = true,
}) => {
  const router = useRouter();
  const { isFavoriteCharacter, addFavoriteCharacter, removeFavoriteCharacter } = useFavoriteListContext();
  const isCharacterFavorite = isFavoriteCharacter(character);

  const handleClick = () => {
    if (redirectOnClick) {
      router.push(`/characters/${character.id}`);
    }
  };

  const handleFavoriteClick = () => {
    if (isCharacterFavorite) {
      removeFavoriteCharacter(character);
    } else {
      addFavoriteCharacter(character);
    }
  };

  return (
    <div
      className={classNames(
        "bg-slate-800 rounded-lg shadow-md p-4",
        redirectOnClick ? "cursor-pointer" : ""
      )}
      onClick={handleClick}
    >
      <Image
        src={character.image || placeholderImage}
        alt={character.name}
        width={500}
        height={500}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-white">{character.name}</h3>
      <p className="text-gray-300">{character.actor}</p>
      <div className="mt-2 flex items-center justify-between">
        <HouseLabel house={character.house as House} />
        <FavoriteIcon
          onClick={handleFavoriteClick}
          isFavorite={isCharacterFavorite}
        />
      </div>
    </div>
  );
};

export default CharacterCard;
