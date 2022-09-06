import React from "react";
import "../App.css";

type ActionButtonProps = {
  label: string;
  onClick: any;
};

const ActionButton = (props: ActionButtonProps) => {
  const { label, onClick } = props;
  const buttonWidth = label === "Reset" ? "100%" : "";
  return (
    <button
      className={"button"}
      aria-label={label}
      onClick={onClick}
      style={{ width: buttonWidth }}
    >
      {label}
    </button>
  );
};

export default ActionButton;
