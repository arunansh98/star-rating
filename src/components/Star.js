import { useContext } from "react";
import { IoIosStar } from "react-icons/io";
import { StarsContext } from "../App";

export default function Star(props) {
  const { index } = props;

  const { starIndex, setStarIndex, starHoverIndex, setStarHoverIndex } =
    useContext(StarsContext);

  console.log({ starHoverIndex });

  const isHover = starHoverIndex > -1;

  const compareIndex = isHover ? starHoverIndex : starIndex;

  const color = index <= compareIndex ? "yellow" : "silver";

  const opacity = index <= starHoverIndex ? 0.5 : 1;

  return (
    <IoIosStar
      style={{
        height: "10rem",
        width: "10rem",
        cursor: "pointer",
        color,
        padding: "0",
        opacity,
      }}
      onClick={() => setStarIndex(index)}
      onMouseEnter={() => setStarHoverIndex(index)}
      onMouseLeave={() => setStarHoverIndex(-1)}
    />
  );
}
