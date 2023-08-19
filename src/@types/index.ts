export interface ContainerProps {
  children: React.ReactNode;
}

export interface VehicleProps {
  color: string;
  fabricationYear: number;
  fuelType: string;
  fipeId: string;
  id: number;
  kmVehicle: number;
  make: string;
  model: string;
  modelYear: number;
  numberDoors: number;
  optional: string[];
  price: number;
  photos: [
    {
      id: number;
      url: string;
    },
  ];
  version: string;
  vehicleType: string;
}
