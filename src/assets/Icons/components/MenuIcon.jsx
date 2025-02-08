import * as React from "react";

const MenuIcon = ({className,...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    className={`h-8 w-8 fill-white ${className || ""}`}  // Apply Tailwind classes
    {...props} // Spread other props
  >
    <path d="M120-240v-80h720v80zm0-200v-80h720v80zm0-200v-80h720v80z"></path>
  </svg>
);

export default MenuIcon;
