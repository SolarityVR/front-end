import * as React from "react"
import { SVGProps } from "react"

const UncheckedRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} stroke="#2F3336" />
  </svg>
)

export default UncheckedRadio
