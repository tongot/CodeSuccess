import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  footerItems = [
    {
      heading: 'Shop',
      listings: [
        { name: 'Daily Deals', link: '#' },
        { name: 'App Only Deals', link: '#' },
        { name: 'Clearance Sale', link: '#' },
        { name: 'Gift Vouchers', link: '#' },
      ],
    },
    {
      heading: 'Help',
      listings: [
        { name: 'Daily Deals', link: '#' },
        { name: 'App Only Deals', link: '#' },
        { name: 'Clearance Sale', link: '#' },
        { name: 'Gift Vouchers', link: '#' },
      ],
    },
    {
      heading: 'Account',
      listings: [
        { name: 'Daily Deals', link: '#' },
        { name: 'App Only Deals', link: '#' },
        { name: 'Clearance Sale', link: '#' },
        { name: 'Gift Vouchers', link: '#' },
      ],
    },
    {
      heading: 'Company',
      listings: [
        { name: 'Daily Deals', link: '#' },
        { name: 'App Only Deals', link: '#' },
        { name: 'Clearance Sale', link: '#' },
        { name: 'Gift Vouchers', link: '#' },
      ],
    },
  ];
  categories = [
    'Baby & Toddler',
    'Beauty',
    'Books',
    'Cameras',
    'Camping & Outdoors',
    'Cellphones & Wearables',
    'Computers & Tablets',
    'Fashion',
    'Gaming',
    'Garden',
    ' Pool & Patio',
    'Health',
    'Home & Kitchen',
    'Luggage & Travel',
    'Movies & Series',
    'Music',
    'Office & Stationery',
    'Pets',
    'Sport',
    'Toys',
    'TV',
    ' Audio & Video',
    'Vouchers',
  ];
}
