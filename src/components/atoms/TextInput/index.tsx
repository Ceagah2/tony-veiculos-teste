import { type TextInputProps } from '../../../@types';
import { Container, Input, InputLabel } from './styles';

const TextInput = (props: TextInputProps) => {
  return (
    <Container>
      <InputLabel>{props.label}</InputLabel>
      <Input {...props} />
    </Container>
  );
};

export default TextInput;
