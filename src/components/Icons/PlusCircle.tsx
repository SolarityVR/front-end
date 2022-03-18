import * as React from "react"
import { SVGProps } from "react"

const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22.326C6.307 1.674 1.674 6.307 1.674 12c0 5.693 4.633 10.326 10.326 10.326 5.693 0 10.326-4.633 10.326-10.326 0-5.693-4.633-10.326-10.326-10.326Z"
      fill="#fff"
    />
    <path stroke="#fff" strokeWidth={2} d="M12 6v12M6 12h12" />
  </svg>
)

export default Plus
