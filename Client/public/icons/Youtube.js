import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="5em"
    height="5em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.67 8.14a2 2 0 0 0-1.42-1.43A48.44 48.44 0 0 0 12 6.38a48.44 48.44 0 0 0-6.25.33 2 2 0 0 0-1.42 1.43A21.27 21.27 0 0 0 4 12a21.42 21.42 0 0 0 .33 3.88 2 2 0 0 0 1.42 1.4 48.44 48.44 0 0 0 6.25.33 48.44 48.44 0 0 0 6.25-.33 2 2 0 0 0 1.42-1.4A21.42 21.42 0 0 0 20 12a21.27 21.27 0 0 0-.33-3.86Zm-9.31 6.25V9.63L14.55 12l-4.19 2.38Z"
    />
  </svg>
)

export default SvgComponent