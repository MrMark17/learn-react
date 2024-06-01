/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <>
      <li style={{ margin: "8px 0" }}>
        <div>
          <p style={{ display: "inline-block", paddingRight: "16px" }}>{item.label}</p>
          {item && item.children && item.children.length ? (
            <button style={{ cursor: "pointer" }} onClick={() => handleToggleChildren(item.label)}>
              {displayCurrentChildren[item.label] ? "-" : "+"}
            </button>
          ) : null}
        </div>
        {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? <MenuList list={item.children} /> : null}
      </li>
    </>
  );
}
