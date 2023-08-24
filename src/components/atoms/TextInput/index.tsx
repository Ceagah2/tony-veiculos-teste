import { type TextInputProps } from '../../../@types';
import { Container, Input, InputLabel } from './styles';

const TextInput = (props: TextInputProps) => {
  return (
    <Container>
      <InputLabel htmlFor={props.for}>{props.label}</InputLabel>
      <Input {...props} id={props.id} />
    </Container>
  );
};

export default TextInput;
