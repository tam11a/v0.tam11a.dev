import React from "react";

const useToggle = () => {
  const [value, setValue] = React.useState(false);
  return {
    value,
    toggleValue: () => setValue((value) => !value),
  };
};

export default useToggle;
