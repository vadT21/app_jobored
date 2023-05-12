import { IconInterface } from "../../models";

export const IconArrowUp: React.FC<IconInterface> = ({
  width = "12",
  height = "6",
  viewBox = "0 0 12 6",
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
        d="M10.6667 5L6.52071 1.44626C6.22112 1.18946 5.77904 1.18946 5.47945 1.44626L1.33341 5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
