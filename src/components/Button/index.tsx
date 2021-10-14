import { FaSpinner } from "react-icons/fa";
import { ButtonProps } from "./Button.props";
import { Container } from "./styles";

export default function Button({leftIcon, isLoading, children, ...rest}: ButtonProps){

  const render = () => {
    if (isLoading){
      return (
        <>
          <FaSpinner className="spin"/>
          Carregando...
        </>
      )
    } else {
      return (
        <>
          {leftIcon ? leftIcon() : null}
          {children}
        </>
      )
    }
  }

  return (
    <Container disabled={isLoading} {...rest}>
      {render()}
    </Container>
  )
}