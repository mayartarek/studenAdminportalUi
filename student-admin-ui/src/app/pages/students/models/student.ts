import { Address } from './address';
import { Gender } from './gender';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  mobile: string;
  profileImageUrl: string;
  gender: Gender;
  address: Address;
}
