import { Suspense, lazy, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type VehicleProps } from '../../@types';
import Container from '../../components/atoms/Container';
import Header from '../../components/atoms/Header';
import Loader from '../../components/atoms/Loader';
import { Api } from '../../services/api';
import {
  CardsContainer,
  Content,
  ContentHeader,
  ErrorContainer,
  ErrorText,
  HeaderText,
} from './styles';

const Home = () => {
  const Card = lazy(() => import('../../components/molecules/Card'));
  const LIMIT = 30;
  const OFFSET = 60; // esse offset tem menos carros sem imagem
  const navigate = useNavigate();
  const NoImage = 'https://tonyveiculos.com.br/img/carro-semfoto.png';
  const [carsData, setCarsData] = useState<VehicleProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<boolean>();
  const [carImage, setCarImage] = useState<string>();

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
            response.data.vehicles.photos[3]
              ? setCarImage(response.data.vehicles.photos[3].url)
              : setCarImage(NoImage);
            setCarsData(modifiedCarsData);
          } else {
            setErrorMessage(true);
          }
        },
      );
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          <HeaderText>
            Encontre aqui os melhores carros disponíveis no mercado.
          </HeaderText>
        </ContentHeader>
        <CardsContainer>
          <Suspense fallback={<Loader />}>
            {errorMessage ? (
              <ErrorContainer data-testid="error-message">
                <ErrorText>Não há carros disponíveis</ErrorText>
              </ErrorContainer>
            ) : (
              carsData.map((car: VehicleProps) => (
                <Card
                  photos={carImage}
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
                  onClick={() => navigate(`/car/${car.id}`)}
                />
              ))
            )}
          </Suspense>
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default Home;
