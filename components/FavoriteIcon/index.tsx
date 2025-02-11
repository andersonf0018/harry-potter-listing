import React from "react";
import { Heart } from "lucide-react";
import { classNames } from "@/utils";

interface FavoriteIconProps {
  onClick: () => void;
  isFavorite: boolean;
  width?: number;
  height?: number;
}

const FavoriteIcon = ({
  onClick,
  isFavorite,
  width = 24,
  height = 24,
}: FavoriteIconProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      className="text-red-400 hover:text-red-500"
      onClick={handleClick}
    >
      <Heart
        data-testid="heart-icon"
        className={classNames(
          isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
        )}
        width={width}
        height={height}
      />
    </button>
  );
};

export default FavoriteIcon;
