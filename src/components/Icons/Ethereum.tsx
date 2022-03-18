import * as React from "react"
import { SVGProps } from "react"

const Ethereum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.423 12.983a.544.544 0 0 1-.107.326l-6.152 8.803a.55.55 0 0 1-.903 0L.103 13.299a.551.551 0 0 1 .787-.755l5.823 4.418 5.823-4.415a.549.549 0 0 1 .307-.114h.035a.55.55 0 0 1 .545.55Z"
      fill="#fff"
    />
    <path
      d="M12.873 9.73 7.185.266a.55.55 0 0 0-.944 0L.553 9.729a.55.55 0 0 0 .136.72l5.687 4.388a.551.551 0 0 0 .674 0l5.687-4.388a.55.55 0 0 0 .136-.72Zm-.903.088a.473.473 0 0 1-.624.236l-4.458-2.02a.424.424 0 0 0-.35 0l-4.457 2.018a.472.472 0 1 1-.39-.86l4.827-2.189a.472.472 0 0 1 .394 0l4.826 2.189c.237.109.341.389.232.626Z"
      fill="#fff"
    />
  </svg>
)

export default Ethereum
