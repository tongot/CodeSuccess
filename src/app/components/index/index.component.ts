import { Component, OnInit } from '@angular/core';
import {
  InfiniteSliderItems,
  InfiniteSlider,
 
} from '../../Models/Model';

import {
   IInfiniteSlider,
}
from '../../Models/IModel';

import {
  IBannerSliderItem,
} from '../../Models/IModel';
import {
  BannerSliderItem,
} from '../../Models/Model';
import {
IHeadLineProduct,
} from '../../Models/IModel';
import { ProductService } from 'src/app/services/product-service';
import { IProduct } from 'src/app/Models/IModel';


// import { ActivatedRoute } from '@angular/router';
// import { IProduct } from 'src/app/shared/product';
// import { ProductService } from 'src/app/services/product-service';
// // import {ShortenTextPipe } from './shorten-text.pipe';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
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

   headlines:IHeadLineProduct[]=[
    {headline:"baby's' joy", TopTenProducts:[]},
    {headline:"top 10 camping deals", TopTenProducts:[]},
    {headline:"Best selling products", TopTenProducts:[]},
    {headline:"Check out whats new", TopTenProducts:[]}
  ]

  slideItem = null;
  bannerSlide = null;
  errorMessage = '';
  

constructor(private productService: ProductService) { }
             
  ngOnInit(): void {
    this.slideItem = this.getBrands();
    this.bannerSlide = this.getBannerItems();
    this.getSlideProducts();
   
    //get products to display in banner
    
  }


  getBrands(): InfiniteSliderItems {
    this.brands.forEach((item) => {
      this.slides.push(new InfiniteSlider(item.src, item.link));
    });
    return new InfiniteSliderItems(this.slides, 5);
  }
  getBannerItems(): IBannerSliderItem[] {
    this.bannerItems.forEach((item) => {
      this.banner.push(new BannerSliderItem(item.url, item.image));
    });
    return this.banner;
  }
  getSlideProducts():void{
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.headlines.forEach((item)=>{
           for (let p = 0; p < 10; p++) {
          item.TopTenProducts.push(products[p]);
        }
        })
       },
       (err: string) => this.errorMessage = err
    );
  }
}
