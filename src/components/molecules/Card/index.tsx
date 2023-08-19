import { VehicleProps } from '@/@types';
import { AiOutlineCar } from 'react-icons/ai';
import { BiGasPump } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import {
  CardContent,
  CardDescription,
  CardDetailText,
  CardHeader,
  CardImage,
  CardImageContainer,
  CardLineDetailsDiv,
  CardLineHeaderDiv,
  CardPrice,
  CardSubTitle,
  CardTitle,
  Container,
} from './styles';

const Card = (props: VehicleProps) => {
  const priceWithoutDecimal = props.price.toString().slice(0, -2);
  const newPrice = parseFloat(priceWithoutDecimal);
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(newPrice);
  return (
    <Container>
      <CardImageContainer>
        <CardImage src={props.photos} />
      </CardImageContainer>
      <CardContent>
        <CardHeader>
          <CardLineHeaderDiv>
            <CardTitle>{props.make}</CardTitle>
            <CardSubTitle>{props.model}</CardSubTitle>
          </CardLineHeaderDiv>
        </CardHeader>
        <CardDescription>{props.fipeId}</CardDescription>
        <CardPrice>{formattedPrice}</CardPrice>
        <CardLineDetailsDiv>
          <CardDetailText>
            <BsCalendarWeek />
            {props.fabricationYear}/{props.modelYear}
          </CardDetailText>
          <CardDetailText>
            <BiGasPump />
            {props.fuelType}
          </CardDetailText>
          <CardDetailText>
            <AiOutlineCar />
            {props.kmVehicle}
          </CardDetailText>
        </CardLineDetailsDiv>
      </CardContent>
    </Container>
  );
};

export default Card;
