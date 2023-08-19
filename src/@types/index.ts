export interface ContainerProps {
  children: React.ReactNode;
}

export interface VehicleProps {
  color: string;
  fabricationYear: number;
  fuelType: string;
  id: number;
  make: string;
  model: string;
  modelYear: number;
  numberDoors: number;
  optional: string[];
  photos: [];
  price: number;
  transmission: string;
  vehicleType: string;
  version: string;
}

export interface CardProps {
  image: string;
  make: string;
  model: string;
  modelYear: number;
  price: number;
}
