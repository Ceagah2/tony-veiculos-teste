import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${theme.colors.blue};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderTitle = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.heading};
`;

export const HeaderLogo = styled.img`
  width: 75px;
  cursor: pointer;
`;
