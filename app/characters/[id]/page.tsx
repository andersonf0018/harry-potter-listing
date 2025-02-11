import Image from "next/image";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import placeholderImage from "@/public/placeholder.jpg";
import { getCharacter } from "@/services";
import type { Character } from "@/types";
import { COMPONENTS_BY_TYPE, IGNORED_KEYS } from "./constants";

const convertTitleToReadable = (title: string) => {
  const spacedTitle = title.replace(/([a-z])([A-Z])/g, "$1 $2");
  return spacedTitle
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TypeComponent = ({ type, value }: { type: keyof typeof COMPONENTS_BY_TYPE; value: any }) => {
  switch (type) {
    case 'string':
      return <p className="text-gray-300 capitalize">{value}</p>;
    case 'number':
      return <p className="text-gray-300 capitalize">{value}</p>;
    case 'boolean':
      return <p className="text-gray-300 capitalize">{value ? "Yes" : "No"}</p>;
    case 'array':
      return <p className="text-gray-300 capitalize">{value.join(", ")}</p>;
    case 'object':
      return (
        <ul>
          {Object.entries(value).map(([key, val]) => {
            const safeValue = val || "-/-";
            return (
              <li key={key} className="text-gray-300 capitalize">
                - <strong>{key}</strong>: {safeValue as ReactNode}
              </li>
            )
          })}
        </ul>
      );
    default:
      return null;
  }
};

const renderCharacterDetails = (character: Character) => {
  const characterDetails = Object.keys(character).filter(
    (item) => character[item as keyof Character] && !IGNORED_KEYS.includes(item)
  );

  return characterDetails.map((key) => {
    const value = character[key as keyof Character];
    const isArray = Array.isArray(value);

    if (isArray && value.length === 0) return null;

    const valueType = isArray ? "array" : typeof value;
    const validType = valueType as keyof typeof COMPONENTS_BY_TYPE;

    return (
      <div key={key}>
        <h2 className="text-xl font-semibold">{convertTitleToReadable(key)}</h2>
        <TypeComponent type={validType} value={value} />
      </div>
    );
  });
};

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const character = await getCharacter(id);

  if (!character) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:sticky col-span-1 top-4 h-fit space-y-4">
          <h1 className="text-3xl font-bold">{character.name}</h1>
          <Image
            src={character.image || placeholderImage}
            alt={character.name}
            className="rounded-lg shadow-lg"
            width={250}
            height={250}
          />
        </div>
        <div className="col-span-2 space-y-4">
          {renderCharacterDetails(character)}
        </div>
      </div>
    </div>
  );
}
