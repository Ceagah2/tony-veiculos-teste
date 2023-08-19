import { type VehicleProps } from '@/@types';
import Container from '@/components/atoms/Container';
import Header from '@/components/atoms/Header';
import { Api } from '@/services/api';
import { useEffect, useState } from 'react';
import { CardsContainer, Content, ContentHeader } from './styles';

const Home = () => {
  const LIMIT = 30;
  const [carsData, setCarsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      await Api.get(`/vehicles?limit=${LIMIT}`).then((response) => {
        if (response.data.message === 'Vehicles found successfully') {
          const filteredCars = response.data.vehicles.filter(
            (vehicle: VehicleProps) => vehicle.vehicleType === 'car',
          );
          setCarsData(filteredCars);
        } else {
          setErrorMessage(true);
        }
      });
    };
    fetchData();
  }, []);

  console.log(carsData);

  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>Hello Tony Header</ContentHeader>
        <CardsContainer>{errorMessage && <h1>Error</h1>}</CardsContainer>
      </Content>
    </Container>
  );
};

export default Home;
