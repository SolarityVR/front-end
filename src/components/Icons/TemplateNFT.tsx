import * as React from "react"
import { SVGProps } from "react"

const TemplateNFT = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={30} cy={30} r={30} fill="#6163FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 15c-8.279 0-15 6.721-15 15s6.721 15 15 15 15-6.721 15-15-6.721-15-15-15Zm0 2.727c6.773 0 12.273 5.5 12.273 12.273 0 6.774-5.5 12.273-12.273 12.273S17.727 36.773 17.727 30 23.227 17.727 30 17.727Zm.7 2.922a1.356 1.356 0 0 0-1.4 0L22.48 24.74a1.36 1.36 0 0 0-.663 1.17v8.181c0 .479.251.923.663 1.17l6.818 4.09c.431.26.971.26 1.402 0l6.818-4.09a1.36 1.36 0 0 0 .663-1.17V25.91a1.36 1.36 0 0 0-.663-1.169l-6.818-4.09Z"
      fill="#fff"
    />
  </svg>
)

export default TemplateNFT
