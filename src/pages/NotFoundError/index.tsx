import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import Container from '../../components/atoms/Container';
import Header from '../../components/atoms/Header';
import {
  ButtonContainer,
  Content,
  ContentHeader,
  Description,
  DescriptionContainer,
  ImageContainer,
  Title,
} from './styles';

const PageNotFound = () => {
  const navigate = useNavigate();
  const ErrorImage =
    'https://www.seekahost.in/wp-content/uploads/2018/03/page-not-found-erros-1024x1024.png';
  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          <Title>Ops! Página não encontrada</Title>
        </ContentHeader>
        <ImageContainer src={ErrorImage} />
        <DescriptionContainer>
          <Description>
            Parece que você avançou no tempo e chegou aqui antes da gente. Mas
            não fique triste, é só voltar para a pagina inicial clicando abaixo.
          </Description>
        </DescriptionContainer>
        <ButtonContainer>
          <Button text="Pagina inicial" onClick={() => navigate('/')} />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default PageNotFound;
