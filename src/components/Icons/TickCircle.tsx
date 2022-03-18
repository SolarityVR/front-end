import * as React from "react"
import { SVGProps } from "react"

const TickCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 9.167A4.179 4.179 0 0 0 9.167 5 4.179 4.179 0 0 0 5 .833 4.179 4.179 0 0 0 .833 5 4.179 4.179 0 0 0 5 9.167Z"
      stroke="#6163FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m3.23 5 1.178 1.18 2.363-2.36"
      stroke="#6163FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default TickCircle
