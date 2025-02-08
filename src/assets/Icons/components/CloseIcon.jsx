import * as React from "react";

const CloseIcon = ({className,...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    className={`h-8 w-8 fill-white ${className || ""}`}  // Apply Tailwind classes
    {...props} // Spread other props
  >
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z"></path>
  </svg>
);

export default CloseIcon;
