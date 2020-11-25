import {InMemoryDbService} from 'angular-in-memory-web-api';
import { IProduct } from './../shared/product';
import { User } from './../shared/user';



export class Data implements InMemoryDbService {


  // tslint:disable-next-line: typedef
  createDb() {
  // tslint:disable-next-line: label-position
  // tslint:disable-next-line: one-variable-per-declaration
  const data: IProduct[]  = [
    {
        id: 1,
        name: 'Xtreme Living - Pump Hand Aluminium Body',
        image: ['/assets/departments/automotive/53047140-zoom.jpg'],
        department: 'automotive',
        promotion: false,
        description: ['Weight: 0.8kg', 'Colour: Silver', ''],
        price: 199,
        discount: null,
        category: 'Autmotive',
        rating: 3.8,
        tags: []
      },
      {
        id: 2,
        name: 'Mini Bluetooth OBD2 ELM 327 Vehicle Diagnostic Scanner',
        image: ['/assets/departments/automotive/53028183-2-zoom.jpg'],
        department: 'automotive',
        promotion: false,
        description: [
          // tslint:disable-next-line: max-line-length
          'Display current sensor data, including'
        ],
        price: 350,
        discount: null,
        category: 'Autmotive',
        rating: 3.3,
        tags: []
      },
      {
        id: 3,
        name: 'Shield - Diesel Injector Cleaner 350Ml',
        image: ['/assets/departments/automotive/53028183-2-zoom.jpg'],
        department: 'automotive',
        promotion: false,
        description: [
          '- Cleans fuel injectors to help protect '
        ],
        price: 35,
        discount: null,
        category: 'Autmotive',
        rating: 4.2,
        tags: []
      },
      {
        id: 4,
        name: 'Car Parking Sensor Assistant',
        image: ['/assets/images/automotive/44022499-2-zoom.jpg', '/assets/images/automotive/44022499-3-zoom.jpg', '/assets/images/automotive/44022499-2-zoom.jpg', '/assets/images/automotive/44022499-3-zoom.jpg'],
        department: 'automotive',
        promotion: false,
        description: [
          '-Support 4 ultrasonic sensors.'
        ],
        price: 309,
        discount: null,
        category: 'Autmotive',
        rating: 3.5,
        tags: ['']
      },
      {
        id: 5,
        name: 'Moto-Quip - In Line Fuse Holder',
        image: ['/assets/departments/automotive/6001865757102-1-zoom.jpg'],
        department: 'automotive',
        promotion: false,
        description: [
          '- Dimensions: 15cm x 2cm x 1cm'
        ],
        price: 60,
        discount: null,
        category: 'Autmotive',
        rating: 4.5,
        tags: []
      },
      {
        id: 6,
        name: 'Electronic Water Pump and Housing for VW/Audi 06L121111G',
        image: ['/assets/departments/automotive/62219251-1-zoom.jpeg'],
        department: 'automotive',
        promotion: false,
        description: [
          'FOR VW', 'Beetle 2012-2017 Golf 2013-2017'
        ],
        price: 3950,
        discount: null,
        category: 'Autmotive',
        rating: 3.5,
        tags: []
      },
      {
        id: 7,
        name: 'Honda - Petrol Engine - Electric Taper Shaft 13HP',
        image: ['/assets/departments/automotive/s-zoom.file.jpeg'],
        department: 'automotive',
        promotion: false,
        description: ['The Honda GX390 is the engine for the...'
        ],
        price: 11040,
        discount: null,
        category: 'Autmotive',
        rating: 3.5,
        tags: []
      },
      {
        id: 8,
        name: 'Car Reverse Parking Sensor Assistant - Silver',
        image: ['/assets/departments/automotive/57570643-1-zoom.jpeg', '/assets/images/automotive/57570643-2-zoom.jpeg'],
        department: 'automotive',
        promotion: false,
        description: [  '4 Sensor Car Parking Sensor system with LED display'
        ],
        price: 290,
        discount: null,
        category: 'Autmotive',
        rating: 5,
        tags: []
      },
      {
        id: 9,
        name: 'Electronic Fuel Pump - Pressure Pump',
        image: ['/assets/departments/automotive/45072814-1-zoom.jpg'],
        department: 'automotive',
        promotion: false,
        description: [
          'Electronic Fuel Pump - Pressure Pump'
        ],
        price: 189,
        discount: null,
        category: 'Autmotive',
        rating: 4.5,
        tags: []
      },
      {
        id: 10,
        name: 'Engine Water Pump Fits Audi/VW 1.2TSI 1.4TSI 04E121042H',
        image: ['/assets/departments/automotive/s-zoom.file9.jpeg', '/assets/images/automotive/s-zoom.file10.jpeg'],
        department: 'automotive',
        promotion: true,
        description: [
          'Water Pump Coolant Pump... '
        ],
        price: 1300,
        discount: null,
        category: 'Autmotive',
        rating: 3.5,
        tags: []
      }];
  const users: User[] =  [
    {
        id: 84235,
        username: 'Bongani',
        password: 'mysecret@password',
        firstName: 'Bongani',
        lastName: 'Khumalo',
        role: 'user'
    },
    {
        id: 83235,
        username: 'Tebogo',
        password: 'mysecret@password',
        firstName: 'Tebogo',
        lastName: 'Mokoena',
        role: 'user'
    },
    {
        id: 20005,
        username: 'Fiona',
        password: 'mysecret@password',
        firstName: 'Fiona',
        lastName: 'Brown',
        role: 'user'
    },
    {
        id: 84235,
        // tslint:disable-next-line: object-literal-key-quotes
        username: 'Hlanga',
        password: 'mysecret@password',
        firstName: 'Hlanganani',
        lastName: 'Maseko',
        role: 'admin'
    },
    {
        id: 84235,
        username: 'Tak',
        password: 'mysecret@password',
        firstName: 'Takudzwa',
        lastName: 'Tongoona',
        role: 'admin'
    }];

  return { data, users};
  }
}
