import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
`;
export const InputLabel = styled.label`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.description};
  color: ${theme.colors.darkGray};
  font-weight: ${theme.fontWeights.bold};
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid ${theme.colors.gray};
  padding-left: 10px;
`;
