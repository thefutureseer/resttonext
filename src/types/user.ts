import { role_type } from '@prisma/client';
import { JsonValue } from 'type-fest'; 

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  phonenumber?: string | null;
  address?: string | null;
  profilepicture?: string | null;
  interactions?: JsonValue | null;
  role: role_type; 
  rating?: number;
  preferences?: JsonValue | null; 
  tags?: string[];
  createdat?: Date;
  updated?: Date;
}