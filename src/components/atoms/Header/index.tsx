import { useNavigate } from 'react-router-dom';
import { Container, HeaderLogo, HeaderTitle } from './styles';

const Header = () => {
  const Logo = 'https://tonyveiculos.com.br/img/logo.png';

  const navigate = useNavigate();
  return (
    <Container>
      <HeaderLogo src={Logo} onClick={() => navigate('/')} />
      <HeaderTitle>Tabela Tony</HeaderTitle>
    </Container>
  );
};

export default Header;
