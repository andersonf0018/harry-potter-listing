import Image from "next/image";

import gryffindorImage from "@/public/houses/gryffindor.svg";
import slytherinImage from "@/public/houses/slytherin.svg";
import ravenclawImage from "@/public/houses/ravenclaw.svg";
import hufflepuffImage from "@/public/houses/hufflepuff.svg";
import type { House } from "@/types";
import { HOUSES } from "@/constants";

interface HouseIconProps {
  house: House;
  width?: number;
  height?: number;
}

const HouseIcon = ({ house, width = 100, height = 100 }: HouseIconProps) => {
  const houseIcon = {
    [HOUSES.Gryffindor]: gryffindorImage,
    [HOUSES.Slytherin]: slytherinImage,
    [HOUSES.Ravenclaw]: ravenclawImage,
    [HOUSES.Hufflepuff]: hufflepuffImage,
  };
  return (
    <Image
      src={houseIcon[house]}
      alt={house as string}
      width={width}
      height={height}
    />
  );
};

export default HouseIcon;
