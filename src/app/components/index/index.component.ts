import { Component, OnInit } from '@angular/core';
import {
  InfiniteSliderItems,
  InfiniteSlider,
  IInfiniteSlider,
} from '../../Models/OtherModels/InfiniteSlider';
import {
  BannerSliderItem,
  BannerSliderItems,
  IBannerSliderItem,
} from '../../Models/OtherModels/bannerSlider';


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
  constructor() {}

  ngOnInit(): void {
    this.slideItem = this.getBrands();
    this.bannerSlide = this.getBannerItems();
  }
// constructor(private productService: ProductService,
//             private route: ActivatedRoute ) { }

// sectionTitle = 'Products';
// errorMessage = 'Cant get products';
// imageLength = 100;
// imageWidth = 90;
// // product: IProductResolved;
// rating: number;
// // tslint:disable-next-line: variable-name
// arrayFilter = '';

// // filteredProducts: IProduct[] = [];
// products: IProduct[] = [];


//   ngOnInit(): void {
//     this.productService.getProducts().subscribe(
//       (products: IProduct[]) => {
//         this.products = products;
//       },
//       (err: string) => this.errorMessage = err
//     );
//     console.log(this.errorMessage);


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
