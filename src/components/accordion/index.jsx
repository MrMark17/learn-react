import data from "./data.js";
import { useState } from "react";
import "./styles.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // make a toggle button
  // make a state for toggle button
  // make a state for multiple selection (array)
  // make a function for multiple selection toggle
  // make a function for handleMultiSelection
  // make a copy from multiple state
  // make a variable for Index of current id from
  // if -1 -> push, else -> remove with splice
  // show content in answer

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setMultipleSelection(!multipleSelection)} className="toggle">
          {multipleSelection ? `Disable Multi Selection` : `Enable Multi Selection`}
        </button>
        <div className="accordion">
          {data && data.length > 0
            ? data.map((dataItem) => (
                <div className="item" key={dataItem.id}>
                  <div className="title" onClick={multipleSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {multipleSelection
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="answer">
                          <p>{dataItem.answer}</p>
                        </div>
                      )
                    : selected === dataItem.id && (
                        <div className="answer">
                          <p>{dataItem.answer}</p>
                        </div>
                      )}
                </div>
              ))
            : `data not found.`}
        </div>
      </div>
    </>
  );
}

export default Accordion;
