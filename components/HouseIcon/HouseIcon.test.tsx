import { render, screen } from "@testing-library/react";
import HouseIcon from ".";
import { HOUSES } from "@/constants";
import gryffindorImage from "@/public/houses/gryffindor.svg";
import slytherinImage from "@/public/houses/slytherin.svg";
import ravenclawImage from "@/public/houses/ravenclaw.svg";
import hufflepuffImage from "@/public/houses/hufflepuff.svg";

jest.mock("next/image", () => {
  const NextImage = ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => <img src={src} alt={alt} width={width} height={height} />;
  NextImage.displayName = "NextImage";
  return NextImage;
});

describe("HouseIcon", () => {
  it.each(Object.values(HOUSES))("renders %s house icon correctly", (house) => {
    render(<HouseIcon house={house} />);
    const img = screen.getByAltText(house);

    const expectedSrc = {
      [HOUSES.Gryffindor]: gryffindorImage.src,
      [HOUSES.Slytherin]: slytherinImage.src,
      [HOUSES.Ravenclaw]: ravenclawImage.src,
      [HOUSES.Hufflepuff]: hufflepuffImage.src,
    }[house];

    expect(img).toHaveAttribute("src", expectedSrc);
    expect(img).toHaveAttribute("width", "100");
    expect(img).toHaveAttribute("height", "100");
  });

  it("applies custom width and height", () => {
    render(<HouseIcon house={HOUSES.Gryffindor} width={150} height={150} />);
    const img = screen.getByAltText(HOUSES.Gryffindor);
    expect(img).toHaveAttribute("width", "150");
    expect(img).toHaveAttribute("height", "150");
  });
});
