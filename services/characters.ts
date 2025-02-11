import { BASE_API_URL } from "@/constants/api";

export const getCharacters = async () => {
  const res = await fetch(`${BASE_API_URL}/api/characters`);
  const data = await res.json();
  return data;
};

export const getCharacter = async (id: string) => {
  const res = await fetch(`${BASE_API_URL}/api/characters/${id}`);
  const data = await res.json();
  return data[0];
};

export const getHouse = async (id: string) => {
  const res = await fetch(`${BASE_API_URL}/api/characters/houses/${id}`);
  const data = await res.json();
  return data;
};

export const getStudents = async () => {
  const res = await fetch(`${BASE_API_URL}/api/characters/students`);
  const data = await res.json();
  return data;
};

export const getStaff = async () => {
  const res = await fetch(`${BASE_API_URL}/api/characters/staff`);
  const data = await res.json();
  return data;
};
