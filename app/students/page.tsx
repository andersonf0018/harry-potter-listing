import CharacterCardsPaginated from "@/components/CharacterCardsPaginated";
import { getStudents } from "@/services/characters";

const StudentsPage = async () => {
  const students = await getStudents();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <CharacterCardsPaginated
        title="Students"
        data={students}
        pageSize={12}
      />
    </div>
  );
};

export default StudentsPage;