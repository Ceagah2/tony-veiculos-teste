import { type CardProps } from '@/@types';
import { FaCalendarAlt, FaGasPump, FaTachometerAlt } from 'react-icons/fa';
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

const Card = (props: CardProps) => {
  const priceWithoutDecimal = props.price.toString().slice(0, -2);
  const newPrice = parseFloat(priceWithoutDecimal);
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(newPrice);
  return (
    <Container onClick={props.onClick}>
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
            <FaCalendarAlt style={{ marginRight: '3px' }} />
            {props.fabricationYear}/{props.modelYear}
          </CardDetailText>
          <CardDetailText>
            <FaGasPump style={{ marginRight: '3px' }} />
            {props.fuelType}
          </CardDetailText>
          <CardDetailText>
            <FaTachometerAlt style={{ marginRight: '3px' }} />
            {props.kmVehicle}
          </CardDetailText>
        </CardLineDetailsDiv>
      </CardContent>
    </Container>
  );
};

export default Card;
