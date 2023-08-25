import { style } from "@vanilla-extract/css"
import { Outlet } from "react-router-dom"

const CommonLayoutStyle = style({
  width: "100%",
  height: "100vh"
})

const CommonLayout = () => {
  return (
    <div className={CommonLayoutStyle}>
      <Outlet />
    </div>
  )
}

export default CommonLayout