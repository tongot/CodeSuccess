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
        { name: 'Contact Us', link: '#' },
        { name: 'Submit an Idea', link: '#' },
        { name: 'Suggest a Product', link: '#' },
        { name: 'Takealot Pickup Points', link: '#' },
        { name: 'Shipping & Delivery', link: '#' },
        { name: 'Exchanges & Returns', link: '#' },
        { name: 'Directions to Warehouse', link: '#' },
      ],
    },
    {
      heading: 'Account',
      listings: [
        { name: 'My Account', link: '#' },
        { name: 'Track Order', link: '#' },
        { name: 'Exchanges & Returns', link: '#' },
        { name: 'Personal Details', link: '#' },
        { name: 'Invoices', link: '#' },
        { name: 'Digital Library', link: '#' },
      ],
    },
    {
      heading: 'Company',
      listings: [
        { name: 'About Us', link: '#' },
        { name: 'Careers', link: '#' },
        { name: 'Sell on Takealot', link: '#' },
        { name: 'Deliver for Takealot', link: '#' },
        { name: 'Press & News', link: '#' },
        { name: 'Competitions', link: '#' },
        { name: 'Terms & Conditions', link: '#' },
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
