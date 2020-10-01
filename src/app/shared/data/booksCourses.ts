interface Product {
  id:           string;
  slug:         string;
  title:        string;
  author:       string;
  image:        string;
  images:       string[];
  department:   string;
  promotion:    string[];
  description:  string[];
  price:        number;
  rating:       number;
  category:     string;
  sub_category: string
}

export const BooksCourses: Product[] = [
  {
    id: '30',
    slug: null,
    title: 'The Alchemist',
    author:  'Paulo Coelho',
    image: '/assets/images/booksCourses/18effd30720cc5ead2da4552edcb282d-zoom.jpg',
    images: ['/assets/images/booksCourses/18effd30720cc5ead2da4552edcb282d-zoom.jpg'],
    department: 'Books & Courses',
    promotion: ['2020-09-03', '2021-03-16'],
    description: [
      'This is the story of Santiago, a shepherd boy who dreams of travelling the world in search of a worldly treasure. From his home in Spain, he journeys to Tangiers, and from there into the Egyptian desert, where a fateful encounter with the alchemist awaits him.',
      'A global phenomenon, The Alchemist has been read and loved by over 62 million readers, topping bestseller lists in 74 countries worldwide. Now this magical fable is beautifully repackaged in an edition that lovers of Paulo Coelho will want to treasure forever.',
      'Every few decades a book is published that changes the lives of its readers forever. This is such a book - a beautiful parable about learning to listen to your heart, read the omens strewn along life\'s path and, above all, follow your dreams. Santiago, a young shepherd living in the hills of Andalucia, feels that there is more to life than his humble home and his flock. One day he finds the courage to follow his dreams into distant lands, each step galvanised by the knowledge that he is following the right path: his own. The people he meets along the way, the things he sees and the wisdom he learns are life-changing. With Paulo Coelho\'s visionary blend of spirituality, magical realism and folklore, The Alchemist is a story with the power to inspire nations and change people\'s lives. '
    ],
    price: 179,
    rating: 5,
    category: "",
    sub_category: ""
  },
  {
    id: '31',
    slug: null,
    title: 'The Monk Who Sold his Ferrari',
    author:  'Robin Sharma',
    image: '/assets/images/booksCourses/773d2b83dc31554b5f769ecfa1c5309e-zoom.jpg',
    images: ['/assets/images/booksCourses/773d2b83dc31554b5f769ecfa1c5309e-zoom.jpg'],
    department: 'Books & Courses',
    promotion: ['2020-01-03', '2020-03-16'],
    description: [
      'An internationally bestselling fable about a spiritual journey, littered with powerful life lessons that teach us how to abandon consumerism in order to embrace destiny, live life to the full and discover joy.',
      'An internationally bestselling fable about a spiritual journey, littered with powerful life lessons that teach us how to abandon consumerism in order to embrace destiny, live life to the full and discover joy.',
      '* This inspiring tale is based on the author\'s own search for life\'s true purpose, providing a step-by-step approach to living with greater courage, balance, abundance and joy. * It tells the story of Julian Mantle, a lawyer forced to confront the spiritual crisis of his out-of-balance life: following a heart attack, he decides to sell all his beloved possesions and trek to India. On a life-changing odyssey to an ancient culture, he meets Himalayan gurus who offer powerful, wise and practical lessons that teach us to: - Develop joyful thoughts'
],
    price: 175,
    rating: 5,
    category: "",
    sub_category: ""
  },
  {
    id: '32',
    slug: null,
    title: 'The 5 AM Club',
    author:  'Robin Sharma',
    image: '/assets/images/booksCourses/9780008312831-1-zoom.webp',
    images: ['/assets/images/booksCourses/9780008312831-1-zoom.webp'],
    department: 'Books & Courses',
    promotion: ['2020-01-03', '2020-03-16'],
    description: [
      'Legendary leadership and elite performance expert Robin Sharma introduced The 5am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.',
        'Legendary leadership and elite performance expert Robin Sharma introduced The 5am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.',
        'Now, in this life-changing book, handcrafted by the author over a rigorous four-year period, you will discover the early-rising habit that has helped so many accomplish epic results while upgrading their happiness, helpfulness and feelings of aliveness. Through an enchanting-and often amusing-story about two struggling strangers who meet an eccentric tycoon who becomes their secret mentor, The 5am Club will walk you through: * How great geniuses, business titans and the world\'s wisest people start their mornings to produce astonishing achievements'
    ],
    price: 239,
    rating: 5,
    category: "",
    sub_category: ""
  },
  {
    id: '33',
    slug: null,
    title: 'Unbecoming to Become',
    author: 'Ayanda Borotho',
    image: '/assets/images/booksCourses/9780620846448-1-zoom.jpg',
    images: ['/assets/images/booksCourses/9780620846448-1-zoom.jpg'],
    department: 'Books & Courses',
    promotion: ['2020-01-03', '2020-03-16'],
    description: [
      'In this personal memoir, Ayanda tracks her journey back to self in a bid to return to her true self and to redefine her worth. Ayanda shares intimate details of her most profound experiences as a young girl in the township in a toxic relationship with a high flying gangster.',
    'In this personal memoir, Ayanda tracks her journey back to self in a bid to return to her true self and to redefine her worth. Ayanda shares intimate details of her most profound experiences as a young girl in the township in a toxic relationship with a high flying gangster. As young woman falling pregnant out of wedlock and the ostracism she encountered. As a young black woman in a white male dominated corporate environment. As an artist who didn\'t quite fit into mainstream popularity and her battle to maintain her authenticity in an industry that recognizes fake over real. As a loyal friend betrayed by someone she loved and trusted. As a mother overwhelmed by the expectations of being a supermom. As a young wife fighting not to lose herself in marriage. As well as finding God by against the stereotypes that define God for us.'
    ],
    price: 255,
    rating: 5,
    category: "",
    sub_category: ""
  },
  {
    id: '34',
    slug: null,
    title: '12 Rules for Life',
    author:  'Jordan Peterson',
    image: '/assets/images/booksCourses/',
    images: ['/assets/images/booksCourses/'],
    department: 'Books & Courses',
    promotion: ['2020-01-03', '2020-03-16'],
    description: [
      'The #1 Sunday Times bestseller from \'the most influential public intellectual in the Western world right now\' (New York Times) - now in paperback.',
      'How should we live properly in a world of chaos and uncertainty?',
      'Jordan Peterson has helped millions of people, young and old, men and women, aim at a life of responsibility and meaning. Now he can help you.',
      'Drawing on his own work as a clinical psychologist and on lessons from humanity\'s oldest myths and stories, Peterson offers twelve profound and realistic principles to live by. After all, as he reminds us, we each have a vital role to play in the unfolding destiny of the world.'
    ],
    price: 159,
    rating: 5,
    category: "",
    sub_category: ""
  },
  {
    id: '35',
    slug: null,
    title: 'Talking to Strangers',
    author:  'Malcolm Gladwell',
    image: '/assets/images/booksCourses/1s-zoom.file.jpeg',
    images: ['/assets/images/booksCourses/1s-zoom.file.jpeg'],
    department: 'Books & Courses',
    promotion: ['2020-10-03', '2021-03-16'],
    description: [
     ' The #1 New York Times and top ten Sunday Times bestseller',
      'The routine traffic stop that ends in tragedy. The spy who spends years undetected at the highest levels of the Pentagon. The false conviction of Amanda Knox. Why do we so often get other people wrong? Why is it so hard to detect a lie, read a face or judge a stranger\'s motives?',
      'Using stories of deceit and fatal errors to cast doubt on our strategies for dealing with the unknown, Malcolm Gladwell takes us on an intellectual adventure into the darker side of human nature, where strangers are never simple and misreading them can have disastrous consequences.'
    ],
    price: 146,
    rating: 4.6,
    category: "",
    sub_category: ""
  },
  {
    id: '36',
    slug: null,
    title: 'Outliers',
    author:  'Malcolm Gladwell',
    image: '/assets/images/booksCourses/3838ae35455b8737ddced7ff13ae9aa0-zoom.jpg',
    images: ['/assets/images/booksCourses/3838ae35455b8737ddced7ff13ae9aa0-zoom.jpg'],
    department: 'Books & Courses',
    promotion: ['2020-01-03', '2020-03-16'],
    description: [
      'Why do some people achieve so much more than others? Can they lie so far out of the ordinary? In this book, the author looks at everyone from rock stars to professional athletes, software billionaires to scientific geniuses, to show that the story of success is far more surprising, and far more fascinating, than we could ever have imagined.',
    'Why do some people achieve so much more than others? Can they lie so far out of the ordinary? Malcolm Gladwell looks at everyone from rock stars to scientific geniuses to show that the story of success is far more surprising, and inspiring, than we ever imagined.',
    '\'Malcolm Gladwell ... has a genius for making everything he writes seem like an impossible adventure\' Tim Adams, Observer',
    '\'The best kind of writer - the kind who makes you feel like you\'re a genius, rather than he\'s a genius\' Dominic Maxwell, The Times \'I wanted to cheer or clap\' William Leith, Evening Standard'],
    price: 209,
    rating: 4.6,
    category: "",
    sub_category: ""
  },
  {
    id: '37',
    slug: null,
    title: 'The Power of Habit',
    author:  'Charles Duhigg',
    image: '/assets/images/booksCourses/65762a5f32e1a45a7ee225b885561d1b-zoom.jpg',
    images: ['/assets/images/booksCourses/65762a5f32e1a45a7ee225b885561d1b-zoom.jpg'],
    department: 'Books & Courses',
    promotion: ['2020-01-03', '2020-03-16'],
    description: [
      'Why do we do develop habits? And how can we change them?',
      'We can always change. In The Power of Habit, award-winning New York Times business reporter Charles Duhigg translates cutting-edge behavioural science into practical self-improvement action, distilling advanced neuroscience into fascinating narratives of transformation.',
      'Why can some people and companies change overnight, and some stay stuck in their old ruts? The answer lies deep in the human brain, and The Power of Habits reveals the secret pressure points that can change a life. From Olympic swimmer Michael Phelps to Martin Luther King Jr., from the CEO of Starbucks to the locker rooms of the NFL, Duhigg explores the incredible results of keystone habits, and how they can make all the difference between billions and millions, failure and success - or even life and death.'
    ],
    price: 0,
    rating: 0,
    category: "",
    sub_category: ""
  },
  {
    id: '38',
    slug: null,
    title: 'Thinking, Fast and Slow',
    author:  'Daniel Kahneman',
    image: '/assets/images/booksCourses/29f0423451fd859780f080d21adbbfaf-zoom.jpg',
    images: ['/assets/images/booksCourses/29f0423451fd859780f080d21adbbfaf-zoom.jpg'],
    department: 'Books & Courses',
    promotion: ['2020-01-03', '2020-03-16'],
    description: [
      'Looks at the way our minds work, and how we make decisions. Why is there more chance we\'ll believe something if it\'s in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? This book enables to you make better decisions at work, at home, and in everything you do. The phenomenal international bestseller - 2 million copies sold - that will change the way you make decisions',
      '\'A lifetime\'s worth of wisdom\' Steven D. Levitt, co-author of Freakonomics \'There have been many good books on human rationality and irrationality, but only one masterpiece. That masterpiece is Thinking, Fast and Slow\' Financial Times',
      'Why is there more chance we\'ll believe something if it\'s in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices: fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do.'
    ],
    price: 185,
    rating: 5,
    category: "",
    sub_category: ""
  },
  {
    id: '39',
    slug: null,
    title: 'All Rise: A Judicial Memoir',
    author:  'Dikgang Moseneke',
    image: '/assets/images/booksCourses/2-s-zoom.file.jpeg',
    images: ['/assets/images/booksCourses/2-s-zoom.file.jpeg'],
    department: 'Books & Courses',
    promotion: ['2020-01-03', '2020-03-16'],
    description: [
      'Law as a profession was not Dikgang Moseneke’s first choice. As a small boy he told his aunt that he wanted to be a traffic officer, but life had other plans for him. At the young age of 15, he was imprisoned for participating in antiapartheid activities. During his ten years of incarceration, he completed his schooling by correspondence and earned two university degrees. Afterwards he studied law at the University of South Africa.',

  'Practising law during apartheid South Africa brought with it unique challenges, especially to professionals of colour, within a fraught political climate. After some years in general legal practice and at the Bar, and a brief segue into business, Moseneke was persuaded that he would best serve the country’s young democracy by taking judicial office.'
    ],
    price: 285,
    rating: 5,
    category: "",
    sub_category: ""
  }
];
