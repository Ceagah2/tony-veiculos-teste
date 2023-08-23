import { ButtonsProps } from '../../../@types';
import { ButtonText, Container } from './styles';

const Button = (props: ButtonsProps) => {
  return (
    <Container onClick={props.onClick} backgroundColor={props.backgroundColor}>
      <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </Container>
  );
};

export default Button;
