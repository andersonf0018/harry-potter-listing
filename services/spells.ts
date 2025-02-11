import { BASE_API_URL } from "@/constants/api";

export const getSpells = async () => {
  const res = await fetch(`${BASE_API_URL}/api/spells`);
  const data = await res.json();
  return data;
};

