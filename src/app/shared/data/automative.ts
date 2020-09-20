import { Product } from '../product';
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class Data implements InMemoryDbService {

  // tslint:disable-next-line: typedef
  createDb() {
  // tslint:disable-next-line: label-position
  const automative: Product[] = [
  {
    id: '0',
    name: 'Xtreme Living - Pump Hand Aluminium Body',
    image: ['/assets/images/automotive/53047140-zoom.jpg'],
    department: 'automotive',
    promotion: false,
    description: ['Weight: 0.8kg', 'Colour: Silver', 'Material: Aluminium'],
    price: 199,
    rating: 4
  },
  {
    id: '1',
    name: 'Mini Bluetooth OBD2 ELM 327 Vehicle Diagnostic Scanner',
    image: ['/assets/images/automotive/53028183-1-zoom.jpg', '/assets/images/automotive/53028183-2-zoom.jpg'],
    department: 'automotive',
    promotion: false,
    description: [
      // tslint:disable-next-line: max-line-length
      'Display current sensor data, including:,', '- Engine RPM', '- Calculated Load Value', '- Coolant Temperature', '- Fuel System Status', '- Vehicle Speed', '- Short Term Fuel Trim', '- Long Term Fuel Trim', '- Intake Manifold Pressure', '- Timing Advance', '- Intake Air Temperature', '- Air Flow Rate', '- Absolute Throttle Position', '- Oxygen sensor voltages/associated short term fuel trims', '- Fuel Pressure'
    ],
    price: 350,
    rating: 3.5
  },
  {
    id: '2',
    name: 'Shield - Diesel Injector Cleaner 350Ml',
    image: ['/assets/images/automotive/6001878002312-1-zoom.jpg'],
    department: 'automotive',
    promotion: false,
    description: [
      '- Cleans fuel injectors to help protect against injector deposit build-up and oxidization', '- Dispenses water and condensation, rust and corrosion to provide better lubrication of fuel pumps and injectors', '- Helps provide exacting fuel spray patterns', '- The Shield Additive Engine Range conforms to tested OEM and API specifications to provide efficient & safe maintenance, cleaning & protection of engine components', '- The Shield Additive Engine Range contains no harmful additives, i.e. alkalis or acids and is not formulated using solid particle lubrication'
    ],
    price: 35,
    rating: 4.2
  },
  {
    id: '3',
    name: 'Car Parking Sensor Assistant',
    image: ['/assets/images/automotive/44022499-1-zoom.jpg', '/assets/images/automotive/44022499-2-zoom.jpg', '/assets/images/automotive/44022499-3-zoom.jpg'],
    department: 'automotive',
    promotion: false,
    description: [
      '-Support 4 ultrasonic sensors.', '-Show the distance by LED.', '-Alert the distance by simulator', '-Waterproof anti-drizzle and quakeproof', '-Detection range is as far as 200cm from 30cm', ' -Have probe self-checking function'
    ],
    price: 309,
    rating: 5
  },
  {
    id: '4',
    name: 'Moto-Quip - In Line Fuse Holder',
    image: ['/assets/images/automotive/6001865757102-1-zoom.jpg'],
    department: 'automotive',
    promotion: false,
    description: [
      '- Dimensions: 15cm x 2cm x 1cm', '- Colour: Black', '- Weight: 40g', '- Warranty: 6 months'
    ],
    price: 60,
    rating: 4.5
  },
  {
    id: '5',
    name: 'Electronic Water Pump and Housing for VW/Audi 06L121111G',
    image: ['/assets/images/automotive/62219251-1-zoom.jpeg'],
    department: 'automotive',
    promotion: false,
    description: [
      'FOR VW', 'Beetle 2012-2017 Golf 2013-2017', 'Passat 2015-2017',  'Polo 2015-2017', 'Scirocco 2015-2017',  'Sharan 2016-2017', 'Tiguan 2016-2017', 'Touran 2016-2017'
    ],
    price: 3950,
    rating: 4.8
  },
  {
    id: '6',
    name: 'Honda - Petrol Engine - Electric Taper Shaft 13HP',
    image: ['/assets/images/automotive/s-zoom.file.jpeg'],
    department: 'automotive',
    promotion: false,
    description: ['The Honda GX390 is the engine for the next generation', 'This engine has more power and quieter performance', 'Low fuel consumption and emission', 'Commonly used on:', 'Generators',  'Commercial lawn and garden equipment', 'Construction / industrial equipment', 'Agricultural equipment', 'Water pumps', 'Type: Air-cooled, 4-stroke, OHV', 'Displacement: 389cm?', 'Bore x stroke: 88 x 64mm', 'Net Power Output: 13hp @ 3600rmp', 'Starting system: Recoil/Electric', 'Shaft: Taper J609B 25mm', 'Fuel tank capacity: 6.1'
    ],
    price: 11040,
    rating: null
  },
  {
    id: '7',
    name: 'Car Reverse Parking Sensor Assistant - Silver',
    image: ['/assets/images/automotive/57570643-1-zoom.jpeg', '/assets/images/automotive/57570643-2-zoom.jpeg'],
    department: 'automotive',
    promotion: false,
    description: [  '4 Sensor Car Parking Sensor system with LED display,', 'The Car Reverse Radar Sensor System helps to prevent dangerous and costly collisions that occur so easily when behind the wheel. It also helps provide increased safety for passengers, pedestrians, and family members who happen to be around the moving vehicle. Detect small Children and low walls as well.',   'A car parking sensor is a proximity sensor designed for vehicles to alert the driver whenever there is an obstacle while parking. The popularity of car parking sensor is rapidly increasing simply because a lot of people finds it really useful. Without car parking sensor there is a high possibility of damaging your car while you park because you can’t see clearly what’s going on behind your vehicle.',  'If you are worried about damaging your car every time you park your vehicle, you might as well consider installing car parking sensor. Nowadays, it is but usual for us to park in a congested parking lot. In that case, it is pretty much an effort to park your car without damaging it and other cars as well', 'It lets you determine the space between your vehicle and the surrounding objects. Hence, you have full control on when and where to stop the car as you park. To put it simply, safety is the key benefit of car parking sensor.',
    ],
    price: 290,
    rating: 5
  },
  {
    id: '8',
    name: 'Electronic Fuel Pump - Pressure Pump',
    image: ['/assets/images/automotive/45072814-1-zoom.jpg'],
    department: 'automotive',
    promotion: false,
    description: [
      'Electronic Fuel Pump - Pressure Pump', 'The D.O.E. range of Electronic Fuel Injection Pumps  is suitable for Motorists requiring OE Quality and Reliability.', 'This will ensure confidence of fitment by Workshops and Consumers.', 'All Source Factories have been carefully researched to ensure they are currently supplying Market Leading OE Quality Parts.',   'It is recommended that DOE Electronic Fuel Injection Pumps be fitted by a Qualified Automotive Technician in an Accredited Workshop according to Vehicle Manufacturer?s Specifications.', 'Premature Failure caused by Incorrect Fitment, Dirt, Contaminated Fuel, Running Dry or any other Modification Invalidates the Warranty.'
    ],
    price: 189,
    rating: 4.5
  },
  {
    id: '9',
    name: 'Engine Water Pump Fits Audi/VW 1.2TSI 1.4TSI 04E121042H',
    image: ['/assets/images/automotive/s-zoom.file9.jpeg', '/assets/images/automotive/s-zoom.file10.jpeg'],
    department: 'automotive',
    promotion: true,
    description: [
      'Water Pump Coolant Pump OEM 04E121116C 04E121042A 04E109111L 04E121600AA 04E121600AD', 'VW Golf Mk7 AUDI A1 1.4 TSI TFSI Water Pump 04E121042A 2013-2017'
    ],
    price: 1300,
    rating: 3.5
  }
];
  return {automative};
  }
}
