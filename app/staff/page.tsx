import CharacterCardsPaginated from "@/components/CharacterCardsPaginated";
import { getStaff } from "@/services/characters";

const StaffPage = async () => {
  const staff = await getStaff();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <CharacterCardsPaginated
        title="Staff"
        data={staff}
        pageSize={12}
      />
    </div>
  );
};

export default StaffPage;