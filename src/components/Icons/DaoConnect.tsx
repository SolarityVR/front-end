import * as React from "react"
import { SVGProps } from "react"

const DaoConnect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.416 16.25h-3.333M13.75 17.917v-3.334M10.133 9.058a1.516 1.516 0 0 0-.275 0A3.683 3.683 0 0 1 6.3 5.367a3.69 3.69 0 0 1 3.692-3.7c2.041 0 3.7 1.658 3.7 3.7 0 2-1.584 3.625-3.559 3.691ZM9.991 18.175c-1.516 0-3.025-.383-4.175-1.15-2.016-1.35-2.016-3.55 0-4.892 2.292-1.533 6.05-1.533 8.342 0"
      stroke="#fff"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DaoConnect
