import React from "react";
import "../css/App.css";

type ActionButtonProps = {
  label: string;
  onClick: any;
  fullWidth?: boolean;
};

const ActionButton = (props: ActionButtonProps) => {
  const { label, onClick, fullWidth } = props;
  const buttonWidth = fullWidth ? "100%" : "";
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
