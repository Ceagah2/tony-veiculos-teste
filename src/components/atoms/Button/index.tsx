import { ButtonsProps } from '../../../@types';
import { ButtonText, Container } from './styles';

const Button = (props: ButtonsProps) => {
  return (
    <Container onClick={props.onClick}>
      <ButtonText>{props.text}</ButtonText>
    </Container>
  );
};

export default Button;
