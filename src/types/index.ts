export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Class {
  id: string;
  name: string;
  description: string;
  categories: string[];
  imageUrl: string;
}

export interface GroupBooking {
  id: string;
  type: 'school' | 'estate';
  name: string;
  description: string;
  minParticipants: number;
  imageUrl: string;
  features: string[];
}