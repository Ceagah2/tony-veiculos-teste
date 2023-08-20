/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { type VehicleProps } from '@/@types';
import Container from '@/components/atoms/Container';
import Header from '@/components/atoms/Header';
import { Api } from '@/services/api';
import { useEffect, useState } from 'react';

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

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default CarDetails;
