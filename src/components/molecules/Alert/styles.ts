import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

interface ContainerProps {
  isopen: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
`;
export const Content = styled.div<ContainerProps>`
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.lightGray};
  border: none;
  border-radius: 20px;
  position: fixed;
  top: ${({ isopen }) => (isopen ? '30%' : '-150px')};
  left: 30%;
  transition: top 0.3s ease-in-out;

  ${({ isopen }) =>
    isopen &&
    css`
      animation: ${slideIn} 0.3s forwards;
    `}

  ${({ isopen }) =>
    !isopen &&
    css`
      animation: ${slideOut} 0.3s forwards;
    `}
`;

export const AlertTitle = styled.h1`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.heading};
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
`;

export const AlertText = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.body};
  text-align: center;
  font-weight: ${theme.fontWeights.normal};
`;
export const ButtonContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  border: none;
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;
