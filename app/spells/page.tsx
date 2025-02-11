import SpellItemsPaginated from "@/components/SpellItemsPaginated";
import { getSpells } from "@/services";

const SpellsPage = async () => {
  const spells = await getSpells();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <SpellItemsPaginated
        title="Spells"
        data={spells}
        pageSize={20}
      />
    </div>
  );
};

export default SpellsPage;