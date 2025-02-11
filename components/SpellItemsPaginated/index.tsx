"use client";

import SpellItem from "../SpellItem";
import Pagination from "../Pagination";
import type { Spell } from "@/types";

interface SpellItemsPaginatedProps {
  data: Spell[];
  title: string;
  pageSize?: number;
}

const SpellItemsPaginated = ({
  data,
  title,
  pageSize = 12,
}: SpellItemsPaginatedProps) => {
  return (
    <div>
      <Pagination data={data} title={title} searchKey="name" pageSize={pageSize}>
        {(spell) => <SpellItem key={spell.id} spell={spell} />}
      </Pagination>
    </div>
  );
};

export default SpellItemsPaginated;
