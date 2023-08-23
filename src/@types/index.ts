import { InputHTMLAttributes } from 'react';

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

export interface CardProps extends VehicleProps {
  onClick: () => void;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface ButtonsProps {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  textColor?: string;
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
  isOpen: boolean;
}
