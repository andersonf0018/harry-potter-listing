import CharacterCardsPaginated from "@/components/CharacterCardsPaginated";
import { getCharacters } from "@/services";

export default async function Home() {
  const characters = await getCharacters();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <CharacterCardsPaginated
        data={characters}
        title="Featured Characters"
      />
    </div>
  );
}
