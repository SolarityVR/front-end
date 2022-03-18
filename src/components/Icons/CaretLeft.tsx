import * as React from "react"
import { SVGProps } from "react"

const CaretLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={6}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.52 1 1 4.53l3.52 3.53"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CaretLeft
