/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { type VehicleProps } from '@/@types';
import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Header from '@/components/atoms/Header';
import { Api } from '@/services/api';
import { theme } from '@/styles/theme';
import { useEffect, useState } from 'react';
import {
  CarContainer,
  ContainerTitle,
  Content,
  DetailsIcon,
  DetailsRow,
  DetailsSquare,
  DetailsText,
  HeaderContainer,
  HeaderImage,
  LeadButtonContainer,
  LeadContainer,
  LeadContainerTitle,
  LeadInputsContainer,
  OptionsSection,
  OptionsText,
} from './styles';

const CarDetails = () => {
  const [error, setError] = useState<boolean>();
  const [carData, setCarData] = useState<VehicleProps>();
  const path = window.location.href;
  const carId = path.split('/')[path.split('/').length - 1];

  const fetchData = async () => {
    await Api.get(`/vehicles/${carId}`).then((response) => {
      if (response.data.message !== 'Vehicles found successfully') {
        setError(true);
      }
      setCarData(response.data.vehicle);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(carData);

  return (
    <Container>
      <Header />
      <Content>
        <CarContainer>
          <HeaderContainer>
            <HeaderImage src={carData?.photos[0].url} />
          </HeaderContainer>
          <ContainerTitle></ContainerTitle>
          <DetailsRow>
            <DetailsSquare>
              <DetailsText></DetailsText>
              <DetailsIcon></DetailsIcon>
            </DetailsSquare>
            <DetailsSquare>
              <DetailsText></DetailsText>
              <DetailsIcon></DetailsIcon>
            </DetailsSquare>
            <DetailsSquare>
              <DetailsText></DetailsText>
              <DetailsIcon></DetailsIcon>
            </DetailsSquare>
            <DetailsSquare>
              <DetailsText></DetailsText>
              <DetailsIcon></DetailsIcon>
            </DetailsSquare>
            <DetailsSquare>
              <DetailsText></DetailsText>
              <DetailsIcon></DetailsIcon>
            </DetailsSquare>
          </DetailsRow>
          <OptionsSection>
            <OptionsText></OptionsText>
          </OptionsSection>
        </CarContainer>
        <LeadContainer>
          <LeadContainerTitle></LeadContainerTitle>
          <LeadInputsContainer></LeadInputsContainer>
          <LeadButtonContainer>
            <Button
              text="Quero comprar"
              onClick={() => console.log('Comprando ...')}
              textColor={theme.colors.white}
              backgroundColor={theme.colors.success}
            />
          </LeadButtonContainer>
        </LeadContainer>
      </Content>
    </Container>
  );
};

export default CarDetails;
