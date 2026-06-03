export type CohortStatus = 'draft' | 'active' | 'closed' | 'archived';
export type PaymentStatus = 'pending' | 'paid' | 'failed';

export interface Cohort {
  id: string;
  name: string;
  number: number;
  startDate: string; // ISO date
  endDate: string;
  registrationDeadline: string;
  earlyBirdPrice: number;
  regularPrice: number;
  earlyBirdDeadline?: string;
  seatLimit: number;
  whatsappGroupLink: string;
  status: CohortStatus;
  imageUrl?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface Registration {
  id: string;
  cohortId: string;
  cohortName: string;
  fullName: string;
  email: string;
  whatsappNumber: string;
  country: string;
  skillLevel: string;
  motivation: string;
  paymentStatus: PaymentStatus;
  paymentReference?: string;
  amount: number;
  createdAt?: unknown;
}

export interface PopupSettings {
  enabled: boolean;
}