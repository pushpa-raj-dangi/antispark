import { useState } from "react";

function Button() {
  const [isAnimate, setIsAnimate] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsAnimate(true);

    setTimeout(function () {
      setIsAnimate(false);
    }, 700);
  };

  return (
    <button
      id="button"
      onClick={handleClick}
      className={isAnimate ? "animate " : ""}
    >
      Click Me
    </button>
  );
}

export default Button;
