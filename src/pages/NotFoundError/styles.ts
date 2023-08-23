import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Content = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContentHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.heading};
  color: ${theme.colors.black};
`;
export const ImageContainer = styled.img``;
export const DescriptionContainer = styled.div`
  margin: 30px 0 30px 0;
`;
export const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.darkGray};
`;
export const ButtonContainer = styled.div`
  width: 175px;
`;
