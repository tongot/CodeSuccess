import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product-service';
import { TokenStorageService } from './services/token-storage.service';
import { IProduct } from './shared/product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


constructor(private tokenStorageService: TokenStorageService, private productService: ProductService
            ) { }

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username: string;
  products: IProduct[];

// Shopping cart

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


      this.username = user.username;
    }
}


}
