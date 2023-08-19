import { ContainerProps } from '../../../@types';
import { MainContainer } from './styles';

const Container = (props: ContainerProps) => {
  return <MainContainer>{props.children}</MainContainer>;
};

export default Container;
