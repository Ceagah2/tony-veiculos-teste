import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const LoaderContainer = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;
export const CarContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeaderContainer = styled.header`
  width: 80%;
  height: 300px;
`;
export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const ContainerTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.heading};
  text-align: center;
  color: ${theme.colors.black};
`;
export const DetailsRow = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
export const DetailsSquare = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${theme.colors.gray};
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 20%;
  }
`;
export const DetailsIcon = styled.p`
  color: ${theme.colors.darkGray};
`;
export const DetailsText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.description};
  text-align: center;
  color: ${theme.colors.darkGray};
  margin-top: -30px;
`;
export const OptionsSection = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 30px;
`;
export const OptionsTitle = styled.h1`
  font-family: ${theme.fonts.subHeading};
  font-size: ${theme.fontSizes.subHeading};
  text-align: center;
  color: ${theme.colors.black};
`;
export const OptionsText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.body};
  text-align: center;
  color: ${theme.colors.darkGray};
  margin-top: 10px;
`;
export const LeadContainer = styled.aside`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
export const LeadInputsContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
export const LeadContainerTitle = styled.h1`
  font-family: ${theme.fonts.subHeading};
  font-size: ${theme.fontSizes.subHeading};
  text-align: center;
  color: ${theme.colors.black};
  margin-top: 30px;
`;
export const LeadButtonContainer = styled.div`
  width: 80%;
  height: 50px;
  margin-top: 50px;
`;
export const ErrorMessage = styled.span`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.description};
  text-align: flex-start;
  color: ${theme.colors.error};
  margin: 10px 0 10px 0;
`;
