import * as React from "react"
import { SVGProps } from "react"

const Sparkle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.437 14.573a13.803 13.803 0 0 0 7.602-7.618 13.692 13.692 0 0 0 7.609 7.595 13.804 13.804 0 0 0-7.588 7.569 13.674 13.674 0 0 0-7.623-7.546Z"
      stroke="#fff"
      strokeWidth={2}
    />
    <path
      d="M4.597 9.459h.22c.487-2.299 2.3-4.155 4.597-4.597V4.64C7.116 4.155 5.304 2.298 4.818 0h-.221C4.11 2.298 2.298 4.155 0 4.597v.265c2.298.442 4.11 2.298 4.597 4.597ZM21.171 4.375h-.132c-.31 1.415-1.415 2.564-2.83 2.83v.132c1.415.31 2.564 1.414 2.83 2.829h.132c.31-1.415 1.415-2.564 2.829-2.83v-.132a3.53 3.53 0 0 1-2.829-2.829Z"
      fill="#fff"
    />
  </svg>
)

export default Sparkle
