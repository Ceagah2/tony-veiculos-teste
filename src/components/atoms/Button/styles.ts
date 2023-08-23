import { theme } from '@/styles/theme';
import styled from 'styled-components';

type ButtonStyleProps = {
  backgroundColor?: string;
};

export const Container = styled.button.attrs<ButtonStyleProps>(
  ({ backgroundColor }) => ({
    backgroundColor,
  }),
)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.backgroundColor ?? theme.colors.blue};
  cursor: pointer;
  border-radius: 30px;
  border: none;
  &:hover {
    opacity: 0.8;
    animation: pulse 1s infinite;

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

type ButtonTextProps = {
  textColor: string;
};

export const ButtonText = styled.span<ButtonTextProps>`
  color: ${(props) => props.textColor ?? theme.colors.white};
  font-family: ${theme.fonts.subHeading};
  font-size: ${theme.fontSizes.subHeading};
`;
