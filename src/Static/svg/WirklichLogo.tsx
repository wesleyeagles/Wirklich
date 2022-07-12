import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={242}
    height={76}
    {...props}
  >
    <defs>
      <pattern
        id="a"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 7017 2192"
      >
        <image
          width={7017}
          height={2192}
        />
      </pattern>
    </defs>
    <path fill="url(#a)" d="M0 0h242v76H0z" />
  </svg>
)
export default SvgComponent