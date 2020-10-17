export interface IProduct {
    id: string;
    name: string;
    image: string;
    department: string;
    promotion: boolean;
    description: string;
    price: number;
    discount: number;
    category: string;
    rating: number;
  }
  export interface IRegister {
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
    isPasswordMatching(): boolean;
    isEmailMatch(): boolean;
  }
  export interface ILogin{
    username:string;
    password:string;
}
export interface IHeadLineProduct{
    headline:string;
    TopTenProducts:IProduct[]
}
  export interface ISelectedCategory {
    isSelected: boolean;
    categoryName: string;
  }
  export interface IProductResolved {
    product: IProduct;
    error?: any;
  }
  export interface IBannerSliderItem {
    link: string;
    imageLink: string;
  }
  export interface IBannerSliderItem {
    link: string;
    imageLink: string;
  }
  export interface ISnackBarNotification {
    message: string;
    action?: string;
    snackType?: string;
    duration?: number;
  }
  export interface IInfiniteSlider {
    imageUrl: string;
    link: string;
  }
  