import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={54}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={54} height={54} rx={3} fill="#CCE8D0" />
    <path
      d="M31.583 16.472a.82.82 0 0 0-.663-.331h-8.957a.813.813 0 0 0-.788.593L17.811 28.94a.792.792 0 0 0 .14.697.82.82 0 0 0 .648.314h2.544v10.217c0 .34.218.644.544.757.326.113.69.012.907-.254L36.039 24.14a.792.792 0 0 0 .1-.85.816.816 0 0 0-.736-.455h-5.598l1.886-5.64a.79.79 0 0 0-.109-.722Zm2.125 7.966L22.778 37.88v-8.73a.809.809 0 0 0-.814-.803h-2.3l2.919-10.602h7.212l-1.886 5.64a.792.792 0 0 0 .104.732.819.819 0 0 0 .668.338h5.027v-.015ZM8.524 27.487a17.92 17.92 0 0 1 2.88-9.79.796.796 0 0 0-.247-1.11.824.824 0 0 0-1.128.244 19.6 19.6 0 0 0-3.139 9.751 19.556 19.556 0 0 0 2.22 9.993c.208.395.7.55 1.101.345a.797.797 0 0 0 .35-1.082 17.757 17.757 0 0 1-2.037-8.351Z"
      fill="#159226"
    />
    <path
      d="M37.544 42.42a18.718 18.718 0 0 1-13.053 3.092c-4.59-.616-8.78-2.907-11.735-6.417a.825.825 0 0 0-1.15-.105.794.794 0 0 0-.105 1.13c3.232 3.844 7.82 6.345 12.845 7.002a20.36 20.36 0 0 0 14.258-3.456l.728.855 1.337-3.609-3.842.663.718.845ZM44.895 18.396a.823.823 0 0 0-1.1-.345.797.797 0 0 0-.351 1.082 17.97 17.97 0 0 1 2.008 9.633 18.036 18.036 0 0 1-3.372 9.256.793.793 0 0 0 .168 1.148.828.828 0 0 0 .627.135.818.818 0 0 0 .531-.353A19.624 19.624 0 0 0 47.08 28.88a19.553 19.553 0 0 0-2.185-10.484ZM27.002 7.704a20.183 20.183 0 0 0-11.593 3.614l-.728-.856-1.337 3.603 3.842-.663-.717-.887a18.708 18.708 0 0 1 12.19-3.18 18.61 18.61 0 0 1 11.424 5.255.825.825 0 0 0 1.132-.02.793.793 0 0 0 .02-1.114 20.023 20.023 0 0 0-6.532-4.277 20.278 20.278 0 0 0-7.702-1.476Z"
      fill="#159226"
    />
  </svg>
)

export default SvgComponent