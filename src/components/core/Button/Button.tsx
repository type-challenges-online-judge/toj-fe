import { style } from "@vanilla-extract/css"

const ButtonStyle = style({
  backgroundColor: "black"
})

const Button = () => {
  return (
    <button className={ButtonStyle}></button>
  )
}

export default Button