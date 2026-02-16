
export interface LeadData {
  name: string;
  email: string;
  phone: string;
  marks12: string;
  interest: string;
}

export interface CampusDetail {
  name: string;
  location: string;
  specialization: string;
  rating: string;
}

export enum AdmissionType {
  ENTRANCE = 'SRMJEEE Entrance',
  MANAGEMENT = 'Management Quota',
}
