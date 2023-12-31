import { InputHTMLAttributes } from 'react';

declare module '*.png';

export interface ContainerProps {
  children: React.ReactNode;
}

export interface VehicleProps {
  color?: string;
  fabricationYear: number;
  fuelType: string;
  fipeId: string;
  id?: number;
  kmVehicle: number;
  make: string;
  model: string;
  modelYear: number;
  numberDoors?: number;
  optional: string[];
  price: number;
  photos?: string | undefined;
  version?: string;
  vehicleType?: string;
}

export interface CardProps extends VehicleProps {
  onClick: () => void;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  for: string;
}

export interface ButtonsProps {
  text: string;
  onClick: () => void;
}

export interface UserDataProps {
  name: string;
  email: string;
  phone: string;
}

export interface AlertProps {
  title: string;
  text: string;
  onClose: () => void;
  isopen: boolean;
}

export interface CarDetailsProps {
  handleSendData?: () => void;
}
