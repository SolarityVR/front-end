import * as React from "react"
import { SVGProps } from "react"

const CaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={9}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 1 3.53 3.52L8.06 1"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CaretDown
