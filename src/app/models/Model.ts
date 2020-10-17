import
 {
     IBannerSliderItem, 
     IHeadLineProduct, 
     IInfiniteSlider, 
     ILogin, 
     IRegister, 
    ISelectedCategory, 
    ISnackBarNotification,

} 
from "./IModel";

export class Register implements IRegister {
    receiveSpecialOffer= true;
    receiveOfferViaSMS= true;
    newsLetter=false;
    dailyDeals= false;
    lastName: '';
    email: '';
    confirmEmail: '';
    password: '';
    confirmPassword: '';
    mobile: '';
    dateOfBirth: null;
    firstName: '';
    selectedCategories: SelectedCategory[];
 
   public isPasswordMatching(): boolean {
     return this.password == this.confirmPassword ? true : false;
   }
   public isEmailMatch(): boolean {
     return this.email != this.confirmEmail ? false : true;
   }
 }
 
export class Login implements ILogin{
    constructor( ){}
     username="";
     password=""
 }
 export class HeadLineProduct implements IHeadLineProduct{
    headline= '';
    TopTenProducts= [];
}
export class BannerSliderItem implements IBannerSliderItem {
    constructor(public link:string,public imageLink:string) {  
    }
}
export class SnackBarNotification implements ISnackBarNotification {
    message: '';
    action?: '';
    snackType?: '';
    duration?: 5000;
 }
 export class InfiniteSlider implements IInfiniteSlider {
    constructor(public imageUrl: string, public link: string) {}
  }
export class InfiniteSliderItems {
    constructor(public sliderItems: IInfiniteSlider[], public viewItems: number) {}
  }
  export class SelectedCategory implements ISelectedCategory {
    constructor(public isSelected: boolean, public categoryName: string) {}
  }