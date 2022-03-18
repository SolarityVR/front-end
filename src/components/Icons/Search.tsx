import * as React from "react"
import { SVGProps } from "react"

const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m14.648 13.852-2.745-2.745A6.75 6.75 0 1 0 6.75 13.5c1.66 0 3.179-.603 4.355-1.598l2.745 2.746a.565.565 0 0 0 .795 0 .56.56 0 0 0 .002-.796ZM1.125 6.75A5.632 5.632 0 0 1 6.75 1.125a5.632 5.632 0 0 1 5.625 5.625 5.632 5.632 0 0 1-5.625 5.625A5.632 5.632 0 0 1 1.125 6.75Z"
      fill="#6163FF"
    />
  </svg>
)

export default Search
