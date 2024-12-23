import { createContext, useState } from "react";
import Stars from "./components/Stars";

const StarsContext = createContext();

export default function App() {
  const [starIndex, setStarIndex] = useState(-1);

  const [starHoverIndex, setStarHoverIndex] = useState(-1);

  return (
    <StarsContext.Provider
      value={{ starIndex, setStarIndex, starHoverIndex, setStarHoverIndex }}
    >
      <div style={{ textAlign: "center" }}>
        <Stars count={5} />
      </div>
    </StarsContext.Provider>
  );
}

export { StarsContext };
