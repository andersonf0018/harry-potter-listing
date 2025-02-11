"use client";

import CharacterCard from "../CharacterCard";
import Pagination from "../Pagination";
import type { Character } from "@/types";

interface CharacterCardsPaginatedProps {
  data: Character[];
  title: string;
  pageSize?: number;
  isHouse?: boolean;
}

const CharacterCardsPaginated = ({
  data,
  title,
  pageSize = 12,
  isHouse = false,
}: CharacterCardsPaginatedProps) => {
  return (
    <div>
      <Pagination
        data={data}
        title={title}
        searchKey="name"
        pageSize={pageSize}
        isHouse={isHouse}
      >
        {(character) => <CharacterCard key={character.id} character={character} />}
      </Pagination>
    </div>
  );
};

export default CharacterCardsPaginated;
