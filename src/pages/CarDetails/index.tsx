/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {
  FaCalendar,
  FaGasPump,
  FaPalette,
  FaTachometerAlt,
} from 'react-icons/fa';
import { GiCarDoor } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { UserDataProps, type VehicleProps } from '../../@types';
import Button from '../../components/atoms/Button';
import Container from '../../components/atoms/Container';
import Header from '../../components/atoms/Header';
import Loader from '../../components/atoms/Loader';
import TextInput from '../../components/atoms/TextInput';
import Alert from '../../components/molecules/Alert';
import { Api } from '../../services/api';
import { formatPhoneNumber, isValidEmail } from '../../utils';
import {
  CarContainer,
  ContainerTitle,
  Content,
  DetailsIcon,
  DetailsRow,
  DetailsSquare,
  DetailsText,
  ErrorMessage,
  HeaderContainer,
  HeaderImage,
  LeadButtonContainer,
  LeadContainer,
  LeadContainerTitle,
  LeadInputsContainer,
  LoaderContainer,
  OptionsSection,
  OptionsText,
  OptionsTitle,
} from './styles';

const CarDetails = () => {
  const NoImage = 'https://tonyveiculos.com.br/img/carro-semfoto.png';
  const [dataError, setDataError] = useState<boolean>();
  const [emailError, setEmailError] = useState<boolean>();
  const [carData, setCarData] = useState<VehicleProps>();
  const [loading, setLoading] = useState<boolean>();
  const [carImage, setCarImage] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataProps>({
    name: '',
    email: '',
    phone: '',
  });
  const path = window.location.href;
  const carId = path.split('/')[path.split('/').length - 1];
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      await Api.get(`/vehicles/${carId}`).then((response) => {
        setCarData(response.data.vehicle);
        response.data.vehicle.photos[3].url
          ? setCarImage(response.data.vehicle.photos[3].url)
          : setCarImage(NoImage);
      });
    } catch {
      navigate('/404Error');
    }
    setLoading(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    const formattedPhone = formatPhoneNumber(phone);
    setUserData({ ...userData, phone: formattedPhone });
  };

  const handleSendData = () => {
    const email = userData.email;
    const checkAnyFieldEmpty = !userData.name || !userData.phone || !email;

    console.log(checkAnyFieldEmpty);

    if (checkAnyFieldEmpty) {
      setDataError(true);
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    if (checkAnyFieldEmpty === false && isValidEmail(email)) {
      setDataError(false);
      setEmailError(false);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setUserData({
      name: '',
      email: '',
      phone: '',
    });
    navigate('/');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {loading && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        <CarContainer>
          <HeaderContainer>
            <HeaderImage src={carImage} />
          </HeaderContainer>
          <ContainerTitle>{carData?.fipeId}</ContainerTitle>
          <DetailsRow>
            <DetailsSquare>
              <DetailsIcon>
                <FaCalendar />
              </DetailsIcon>
              <DetailsText>
                {carData?.fabricationYear}/{carData?.modelYear}
              </DetailsText>
            </DetailsSquare>
            <DetailsSquare>
              <DetailsIcon>
                <FaGasPump />
              </DetailsIcon>
              <DetailsText>{carData?.fuelType}</DetailsText>
            </DetailsSquare>
            <DetailsSquare>
              <DetailsIcon>
                <FaPalette />
              </DetailsIcon>
              <DetailsText>{carData?.color}</DetailsText>
            </DetailsSquare>
            <DetailsSquare>
              <DetailsIcon>
                <FaTachometerAlt />
              </DetailsIcon>
              <DetailsText>
                {carData?.kmVehicle.toLocaleString()} Kms
              </DetailsText>
            </DetailsSquare>
            <DetailsSquare>
              <DetailsIcon>
                <GiCarDoor />
              </DetailsIcon>
              <DetailsText>{carData?.numberDoors} Portas</DetailsText>
            </DetailsSquare>
          </DetailsRow>
          <OptionsSection>
            <OptionsTitle>Opcionais</OptionsTitle>
            <OptionsText>
              {carData?.optional.map((option) => option).join(', ')}
            </OptionsText>
          </OptionsSection>
        </CarContainer>
        <LeadContainer>
          <LeadContainerTitle>Entre em contato</LeadContainerTitle>
          <LeadInputsContainer>
            <TextInput
              label="Nome completo"
              name="name"
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </LeadInputsContainer>
          <LeadInputsContainer>
            <TextInput
              label="Telefone para contato"
              name="phone"
              type="text"
              value={userData.phone}
              placeholder="(99) 9 9999-9999"
              maxLength={15}
              onChange={handlePhoneChange}
            />
          </LeadInputsContainer>
          <LeadInputsContainer>
            <TextInput
              label="E-mail"
              name="email"
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </LeadInputsContainer>
          {emailError && (
            <ErrorMessage data-testid="email-error">
              E-mail incorreto. Por favor verifique e tente novamente
            </ErrorMessage>
          )}
          {dataError && (
            <ErrorMessage data-testid="data-error">
              Todos os campos são obrigatórios para que nossa equipe entre em
              contato com você.
            </ErrorMessage>
          )}
          <LeadButtonContainer>
            <Button text="Quero comprar" onClick={() => handleSendData()} />
          </LeadButtonContainer>
        </LeadContainer>
      </Content>
      {isModalOpen && (
        <Alert
          onClose={() => handleModalClose()}
          title={'Dados enviados com sucesso'}
          text={
            'Prontinho, agora é só aguardar nossa equipe entrar em contato para maiores detalhes sobre o carro.'
          }
          isOpen={isModalOpen}
        />
      )}
    </Container>
  );
};

export default CarDetails;
