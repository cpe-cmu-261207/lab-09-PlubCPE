import React from "react";
import { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { IconSunHigh } from "@tabler/icons";
import { IconMoon } from "@tabler/icons";

export default function Todospan(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
    >
      <span
        style={
          props.completed
            ? { textDecoration: "line-through", color: "green" }
            : null
        }
        className="me-auto"
      >
        {props.title}
      </span>
      {isMouseOver && (
        <>
          <button className="btn btn-success" onClick={() => props.onMark()}>
            <IconCheck />
          </button>
          <button className="btn btn-secondary">
            <IconArrowUp />
          </button>
          <button className="btn btn-secondary">
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={() => props.onDelete()}>
            <IconTrash />
          </button>
        </>
      )}
    </div>
  );
}
