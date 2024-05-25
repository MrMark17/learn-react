import { useEffect, useState } from "react";
import "./styles.css";

function ColorRandom() {
  const [colorMode, setColorMode] = useState("hex");
  const [color, setColor] = useState("#50ba1a");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function changeColorMode(value) {
    setColorMode(value);
  }

  function getRandomHexColor() {
    let randomColor = "#";

    const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < 6; i++) {
      randomColor += HEX[randomColorUtility(HEX.length)];
    }
    setColor(randomColor);
  }
  function getRandomRgbColor() {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    colorMode === "hex" ? getRandomHexColor() : getRandomRgbColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="btn-wrapper">
        <button onClick={() => changeColorMode("hex")}>Hex Color</button>
        <button onClick={() => changeColorMode("rgb")}>RGB Color</button>
        <button onClick={() => (colorMode === "hex" ? getRandomHexColor() : getRandomRgbColor())}>Get random color</button>
      </div>
      <div className="text-wrapper">
        <div className="cr-title">{colorMode === "hex" ? "Hex Color" : "RGB Color"}</div>
        <div className="cr-value">{color}</div>
      </div>
    </div>
  );
}

export default ColorRandom;
