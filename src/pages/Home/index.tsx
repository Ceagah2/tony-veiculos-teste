import { type VehicleProps } from '@/@types';
import Container from '@/components/atoms/Container';
import Header from '@/components/atoms/Header';
import Card from '@/components/molecules/Card';
import NoImage from '@/public/noImage.png';
import { Api } from '@/services/api';
import { useEffect, useState } from 'react';
import { CardsContainer, Content, ContentHeader } from './styles';

const Home = () => {
  const LIMIT = 30;
  const OFFSET = 60; // esse offset tem menos carros sem imagem
  const [carsData, setCarsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      await Api.get(`/vehicles?limit=${LIMIT}&offset=${OFFSET}`).then(
        (response) => {
          if (response.data.message === 'Vehicles found successfully') {
            const filteredCars = response.data.vehicles.filter(
              (vehicle: VehicleProps) => vehicle.vehicleType === 'car',
            );

            const modifiedCarsData = filteredCars.map(
              (vehicle: VehicleProps) => {
                if (vehicle.make === 'VW - VOLKSWAGEN') {
                  return { ...vehicle, make: 'VW' };
                } else if (vehicle.make === 'GM - CHEVROLET') {
                  return { ...vehicle, make: 'GM' };
                }

                return vehicle;
              },
            );

            setCarsData(modifiedCarsData);
          } else {
            setErrorMessage(true);
          }
        },
      );
    };
    fetchData();
  }, []);

  console.log(carsData);

  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          Encontre aqui os melhores carros disponíveis no mercado.
        </ContentHeader>
        <CardsContainer>
          {errorMessage ? (
            <h1>Error</h1>
          ) : (
            carsData.map((car: VehicleProps) => (
              <Card
                photos={car.photos ? car.photos[0].url : NoImage}
                key={car.id}
                make={car.make}
                model={car.model}
                modelYear={car.modelYear}
                price={car.price}
                optional={car.optional}
                fipeId={car.fipeId}
                fabricationYear={car.fabricationYear}
                fuelType={car.fuelType}
                kmVehicle={car.kmVehicle}
              />
            ))
          )}
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default Home;
