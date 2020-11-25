import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import {
  InfiniteSliderItems,
  InfiniteSlider,
  IInfiniteSlider,
} from '../../models/otherModels/infiniteSlider';
import {
  BannerSliderItem,
  BannerSliderItems,
  IBannerSliderItem,
} from '../../models/otherModels/bannerSlider';


import { ActivatedRoute } from '@angular/router';
import { IProduct, IProductResolved } from 'src/app/shared/product';
import { ProductService } from 'src/app/services/product-service';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
constructor(private productService: ProductService, private renderer: Renderer2,
            private cartService: CartService
            ) { }
  brands = [
    {
      link: '/account/register',
      src: '/assets/carousel/brands/berlingerhaus.webp',
    },
    { link: '#', src: '/assets/carousel/brands/blackdecker.webp' },
    { link: '#', src: '/assets/carousel/brands/blaupunkt.webp' },
    { link: '#', src: '/assets/carousel/brands/campground.webp' },
    { link: '#', src: '/assets/carousel/brands/computers.webp' },
    { link: '#', src: '/assets/carousel/brands/dyson.webp' },
    { link: '#', src: '/assets/carousel/brands/dyson.webp' },
  ];
  bannerItems = [
    { image: '../../../assets/carousel/722541220058344269.png', url: '#' },
    {
      image:
        '../../../assets/carousel/new_shop_local_lp_carousel_1292x300_2020_1.png',
      url: '#',
    },
    { image: '../../../assets/carousel/2875147241955290999.png', url: '#' },
  ];

  private slides: IInfiniteSlider[] = [];
  private banner: IBannerSliderItem[] = [];
  slideItem = null;
  bannerSlide = null;

sectionTitle = 'Products';
errorMessage = 'Cant get products';
imageLength = 100;
imageWidth = 90;
 product: IProduct;
rating: number;
@Input() products: IProduct[] = [];
  private singleProduct: any[];
  private isAdded: any[];






 // tslint:disable-next-line: typedef

  ngOnInit(): void {
    this.slideItem = this.getBrands();
    this.bannerSlide = this.getBannerItems();
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      (err: string) => this.errorMessage = err
    );
    console.log(this.errorMessage);
    this.isAdded = new Array(this.products.length);
    this.isAdded.fill(false, 0, this.products.length);
    console.log('this.isAdded -> ', this.isAdded, this.products);

    this.productService.getProducts().subscribe(data => {

      if (data && data.length > 0) {

      } else {
        this.products.map((item, index) => {
          this.isAdded[index] = false;
        });
      }

    });
    }
     // Add item in cart on Button click
  // ===============================

  // tslint:disable-next-line: typedef
  addToCart(event: { target: { classList: { contains: (arg0: string) => any; }; }; }, productId: number) {
    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    // Change button color to green
    console.log('product added to cart');
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    });

    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this.cartService.addProductToCart(this.singleProduct[0]);
  }


  getBrands(): InfiniteSliderItems {
    this.brands.forEach((item) => {
      this.slides.push(new InfiniteSlider(item.src, item.link));
    });
    return new InfiniteSliderItems(this.slides, 5);
  }
  getBannerItems(): BannerSliderItems {
    this.bannerItems.forEach((item) => {
      this.banner.push(new BannerSliderItem(item.url, item.image));
    });
    return new BannerSliderItems(this.banner);
  }

}
