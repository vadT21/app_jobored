import { IconInterface } from "../../models";

export const IconArrowDown: React.FC<IconInterface> = ({
  width = "14",
  height = "6",
  viewBox = "0 0 14 6",
  fill = "none",
  stroke = "#ACADB9",
  strokeWidth = "1.5",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33325 1L5.47929 4.55374C5.77888 4.81054 6.22096 4.81054 6.52055 4.55374L10.6666 1"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
