import CharacterCardsPaginated from "@/components/CharacterCardsPaginated";
import { getHouse } from "@/services/characters";

const CharactersPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const house = await getHouse(id);
  const houseName =
    id.charAt(0).toUpperCase() + id.slice(1).toLowerCase();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <CharacterCardsPaginated
        title={houseName}
        data={house}
        pageSize={12}
        isHouse
      />
    </div>
  );
};

export default CharactersPage;
