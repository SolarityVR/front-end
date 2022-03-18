import * as React from "react"
import { SVGProps } from "react"

const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.435 6.024 12.512.13a1.081 1.081 0 0 0-1.027 0L.568 6.024a1.083 1.083 0 0 0 .513 2.034c.173 0 .35-.042.513-.13l.794-.428 1.719 12.16c.233 1.313 1.416 2.23 2.875 2.23h10.034c1.459 0 2.641-.917 2.877-2.258L21.61 7.5l.796.43a1.082 1.082 0 0 0 1.027-1.901l.002-.004ZM12 14.764a3.513 3.513 0 1 1 0-7.026 3.513 3.513 0 0 1 0 7.026Z"
      fill="#fff"
    />
  </svg>
)

export default Home
