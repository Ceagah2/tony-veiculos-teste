import Logo from '@/public/logo.png';
import { useNavigate } from 'react-router-dom';
import { Container, HeaderLogo, HeaderTitle } from './styles';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderLogo src={Logo} onClick={() => navigate('/')} />
      <HeaderTitle>Tabela Tony</HeaderTitle>
    </Container>
  );
};

export default Header;
