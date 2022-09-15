import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import Todospan from "./Todospan";
import { useContext } from "react";
import { ThemeContexts } from "../contexts/ThemeContext";
import { IconSunHigh } from "@tabler/icons";
import { IconMoon } from "@tabler/icons";

export default function Todo(props) {
  const { selTheme } = useContext(ThemeContexts);
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
      style={{ color: selTheme.foreground }}
    >
      <span
        className="me-auto"
        style={
          props.completed
            ? { textDecoration: "line-through", color: "green" }
            : null
        }
      >
        {props.title}
      </span>
      {isMouseOver && (
        <>
          <button className="btn btn-success" onClick={() => props.onMark()}>
            <IconCheck />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onMoveUp()}
          >
            <IconArrowUp />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onMoveDown()}
          >
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
