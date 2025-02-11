import type { Spell } from "@/types";

interface SpellItemProps {
  spell: Spell;
}

const SpellItem = ({ spell }: SpellItemProps) => {
  const { name, description } = spell;

  return (
    <div className="flex flex-col gap-2 border-b border-gray-700 pb-4">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-300 text-justify">{description}</p>
    </div>
  );
};

export default SpellItem;
