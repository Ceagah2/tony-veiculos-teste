export interface ContainerProps {
  children: React.ReactNode;
}

export interface VehicleProps {
  color: string;
  fabricationYear: number;
  fuelType: string;
  id: number;
  model: string;
  modelYear: number;
  optional: string[];
  photos: [];
  price: number;
  transmission: string;
  vehicleType: string;
  version: string;
}
