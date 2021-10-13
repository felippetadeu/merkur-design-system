import { ButtonProps } from "./Button";
import { Container } from "./styles";

export default function Button({leftIcon, children, ...rest}: ButtonProps){
  return (
    <Container {...rest}>
      {leftIcon ? leftIcon() : null}
      {children}
    </Container>
  )
}