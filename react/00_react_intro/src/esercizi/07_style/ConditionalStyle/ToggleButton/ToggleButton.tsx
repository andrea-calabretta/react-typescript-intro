import { useState } from "react";
import classNames from "classnames";
import s from "./ToggleButton.module.scss";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => setIsActive((prev) => !prev);

  return (
    <button
      onClick={toggleButton}
      className={classNames(s.button, {
        [s.active]: isActive,
        [s.inactive]: !isActive,
      })}
    >
      {isActive ? "Active" : "Inactive"}
    </button>
  );
};

export default ToggleButton;

