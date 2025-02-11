export const IGNORED_KEYS = ["id", "image"];

export const COMPONENTS_BY_TYPE = {
  string: ({ value }: { value: string }) => (
    <p className="text-gray-300 capitalize">{value}</p>
  ),
  number: ({ value }: { value: number }) => (
    <p className="text-gray-300 capitalize">{value}</p>
  ),
  boolean: ({ value }: { value: boolean }) => (
    <p className="text-gray-300 capitalize">{value ? "Yes" : "No"}</p>
  ),
  array: ({ value }: { value: string[] }) => (
    <p className="text-gray-300 capitalize">{value.join(", ")}</p>
  ),
  object: ({ value }: { value: Record<string, string | number | boolean> }) => (
    <ul>
      {Object.entries(value).map(([key, value]) => (
        <li key={key} className="text-gray-300 capitalize">
          - <strong>{key}</strong>: {value || "N/A"}
        </li>
      ))}
    </ul>
  ),
} as const;
