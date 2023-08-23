import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 30vw;
  height: 200px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  cursor: pointer;
  transition: margin-top 0.5s, box-shadow 0.5s;
  box-shadow: 0px 1px 0px 0px #000;

  &:hover {
    margin-top: -20px;
    box-shadow: 0px 5px 20px 0px #000;
  }
  @media (max-width: 1300px) {
    width: 40vw;
  }
  @media (max-width: 1000px) {
    width: 50vw;
  }
  @media (max-width: 750px) {
    width: 75%;
  }
  @media (max-width: 540px) {
    width: 90%;
    height: 250px;
  }
`;
export const CardImageContainer = styled.div`
  width: 200px;
  height: 100%;
  border-radius: 20px;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
export const CardContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
`;
export const CardHeader = styled.div`
  width: 100%;
  padding: 10px;
`;
export const CardLineHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const CardTitle = styled.h1`
  padding-right: 10px;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.subHeading};
  font-weight: bold;
  text-transform: uppercase;
`;
export const CardSubTitle = styled.p`
  font-family: ${theme.fonts.subHeading};
  font-size: ${theme.fontSizes.body};
  text-transform: uppercase;
`;
export const CardDescription = styled.span`
  text-transform: capitalize;
`;
export const CardPrice = styled.span`
  align-self: flex-start;
  font-family: ${theme.fonts.subHeading};
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.blue};
  font-weight: ${theme.fontWeights.bold};
`;
export const CardLineDetailsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  @media (max-width: 540px) {
    display: none;
  }
`;
export const CardDetailText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.description};
  text-align: center;
  display: flex;
  margin-right: 5px;
`;
export const CardOptions = styled.span``;
