import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContentHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeaderText = styled.h1`
  text-align: center;
`;
export const CardsContainer = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ErrorText = styled.span`
  color: ${theme.colors.error};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.body};
  text-align: center;
`;
