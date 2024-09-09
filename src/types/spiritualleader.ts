import { role_type } from '@prisma/client';
import { JsonValue } from 'type-fest'; 

export interface SpiritualLeader {
  id: string;
  name: string;
  password: string;
  expertise?: string;
  bio?: string;
  profilepicture?: string | null;
  contactInfo?: string | null;
  rating?: number;
  tags?: string[];
  interactions?: JsonValue | null;            // Interaction history for the AI
  role: role_type;
  pastbeneficiaries?: number;
  createdAt: Date;
};