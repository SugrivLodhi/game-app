import './button.css'
const Button = ({btnText,type,onClick}) => (<button type={type} onClick={onClick}>{btnText}</button>)

export default Button