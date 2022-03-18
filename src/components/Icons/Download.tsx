import * as React from "react"
import { SVGProps } from "react"

const Download = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m3.352 6.21 3.75 3.75c.22.22.576.22.795 0l3.75-3.75a.562.562 0 1 0-.795-.795l-2.79 2.79V.563a.563.563 0 0 0-1.125 0v7.642l-2.79-2.79a.558.558 0 0 0-.795 0 .562.562 0 0 0 0 .795Z"
      fill="#8899A6"
    />
    <path
      d="M13.281 14.77H1.719A1.72 1.72 0 0 1 0 13.051V8.812a.563.563 0 0 1 1.125 0v4.24c0 .327.266.593.594.593h11.562a.594.594 0 0 0 .594-.594V8.812a.563.563 0 0 1 1.125 0v4.24a1.72 1.72 0 0 1-1.719 1.718Z"
      fill="#8899A6"
    />
  </svg>
)

export default Download
