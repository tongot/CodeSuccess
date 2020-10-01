import { SelectedCategory } from '../CheckLists/CheckCategories';
interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  mobile: string;
  dateOfBirth: Date;
  receiveSpecialOffer: boolean;
  receiveOfferViaSMS: boolean;
  newsLetter: boolean;
  dailyDeals: boolean;
}

export class Register implements IRegister {
  constructor(
    public receiveSpecialOffer: boolean,
    public receiveOfferViaSMS: boolean
  ) {}
  public newsLetter: boolean;
  public dailyDeals: boolean;
  public lastName: '';
  public email: '';
  public confirmEmail: '';
  public password: '';
  public confirmPassword: '';
  public mobile: '';
  public dateOfBirth: null;
  public firstName: '';
  public selectedCategories: SelectedCategory[];
}
