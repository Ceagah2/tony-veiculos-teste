import { type AlertProps } from '../../../@types';
import Button from '../../atoms/Button';
import {
  AlertText,
  AlertTitle,
  ButtonContainer,
  Container,
  Content,
} from './styles';

const Alert = (props: AlertProps) => {
  return (
    <Container>
      <Content isopen={props.isopen}>
        <AlertTitle>{props.title}</AlertTitle>
        <AlertText>{props.text}</AlertText>
        <ButtonContainer>
          <Button onClick={props.onClose} text="Ok" />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Alert;
