import { HOUSES } from "@/constants";
import { House } from "@/types";
import { classNames } from "@/utils";

interface HouseLabelProps {
  house: House;
}

const HouseLabel = ({ house }: HouseLabelProps) => {
  const houseName = HOUSES[house] ? house : "Unknown";
  return (
    <span
    className={classNames(
      "px-2 py-1 rounded-full text-sm",
      house
        ? `house-${house.toLowerCase()}`
        : "bg-gray-700 text-gray-300"
    )}
  >
      {houseName}
    </span>
  );
};

export default HouseLabel;
