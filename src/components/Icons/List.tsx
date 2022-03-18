import * as React from "react"
import { SVGProps } from "react"

const List = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.23 21.667H2.436A2.441 2.441 0 0 1 0 19.229V2.438A2.441 2.441 0 0 1 2.438 0h16.791a2.441 2.441 0 0 1 2.438 2.438v16.791a2.441 2.441 0 0 1-2.438 2.438ZM2.436 1.625a.813.813 0 0 0-.812.813v16.791c0 .448.364.813.813.813h16.791a.814.814 0 0 0 .813-.813V2.438a.813.813 0 0 0-.813-.813H2.438Z"
      fill="#fff"
    />
    <path
      d="M16.25 7.193H5.417a.813.813 0 0 1 0-1.625H16.25a.812.812 0 1 1 0 1.625Zm0 4.453H5.417a.813.813 0 0 1 0-1.625H16.25a.813.813 0 0 1 0 1.625Zm-5.417 4.452H5.417a.812.812 0 1 1 0-1.625h5.416a.814.814 0 0 1 0 1.625Z"
      fill="#fff"
    />
  </svg>
)

export default List
