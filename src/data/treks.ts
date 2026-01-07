export type Trek = {
  slug: string;
  name: string;
  region: string;
  locationLabel: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Advanced';
  durationDays: number;
  altitude: string;
  bestSeason: string;
  startingPoint: string;
  nearestTown: string;
  priceFrom: number;
  tags: string[];
  highlights: string[];
  overview: string;
  itinerary: { day: string; plan: string }[];
  inclusions: string[];
  exclusions: string[];
  packingList: string[];
  safetyNotes: string[];
  howToReach: string[];
  faqs: { question: string; answer: string }[];
  gallery: string[];
};

export const treks: Trek[] = [
  {
    slug: 'dainkund-peak-trek',
    name: 'Dainkund Peak Trek',
    region: 'Dalhousie',
    locationLabel: 'Dalhousie, Chamba',
    difficulty: 'Easy',
    durationDays: 1,
    altitude: '2,755 m (approx.)',
    bestSeason: 'All year (snow in winter)',
    startingPoint: 'Dalhousie',
    nearestTown: 'Dalhousie',
    priceFrom: 1800,
    tags: ['family', 'short', 'viewpoint', 'budget', 'women-only'],
    highlights: ['Panoramic Pir Panjal views', 'Pine forests', 'Accessible day hike'],
    overview:
      'A classic Dalhousie day hike to the highest point in the area, ideal for families and short-stay visitors.',
    itinerary: [
      {
        day: 'Day 1',
        plan: 'Drive to the trailhead, gentle ascent through pine forests, summit views, and return to Dalhousie.'
      }
    ],
    inclusions: ['Local guide', 'Permits as applicable', 'Basic first-aid kit'],
    exclusions: ['Personal snacks', 'Transport to Dalhousie', 'Travel insurance'],
    packingList: ['Light jacket', 'Water bottle', 'Sun cap', 'Comfortable shoes'],
    safetyNotes: ['Slow, steady pacing', 'Weather-dependent visibility'],
    howToReach: [
      'From Dalhousie: 20-30 min drive to trailhead.',
      'From Pathankot: 2.5-3 hrs to Dalhousie by road.'
    ],
    faqs: [
      {
        question: 'Is this trek suitable for kids?',
        answer: 'Yes, children above 7 years usually enjoy this easy hike with gentle gradients.'
      }
    ],
    gallery: ['/images/placeholder-1.svg', '/images/placeholder-2.svg']
  },
  {
    slug: 'kalatop-wildlife-sanctuary-hike',
    name: 'Kalatop Wildlife Sanctuary Hike',
    region: 'Dalhousie',
    locationLabel: 'Kalatop, Dalhousie',
    difficulty: 'Easy',
    durationDays: 1,
    altitude: '2,400 m (approx.)',
    bestSeason: 'March to June, September to December',
    startingPoint: 'Dalhousie',
    nearestTown: 'Dalhousie',
    priceFrom: 1600,
    tags: ['family', 'nature', 'forest', 'budget', 'women-only'],
    highlights: ['Deodar forests', 'Wildlife spotting', 'Forest trails'],
    overview:
      'A forest immersion walk in Kalatop sanctuary, perfect for families and nature lovers.',
    itinerary: [
      {
        day: 'Day 1',
        plan: 'Morning forest walk, wildlife interpretation, picnic lunch, return by afternoon.'
      }
    ],
    inclusions: ['Guide', 'Entry assistance', 'Snacks and tea'],
    exclusions: ['Transport', 'Personal expenses'],
    packingList: ['Closed shoes', 'Binoculars (optional)', 'Light rain layer'],
    safetyNotes: ['Stay on marked trails', 'Avoid loud noise to respect wildlife'],
    howToReach: [
      'Drive 14 km from Dalhousie to Kalatop entry point.',
      'Nearest railhead: Pathankot.'
    ],
    faqs: [
      {
        question: 'Can we spot wildlife?',
        answer: 'Sightings vary; the sanctuary is known for birds, deer, and foxes.'
      }
    ],
    gallery: ['/images/placeholder-3.svg', '/images/placeholder-4.svg']
  },
  {
    slug: 'sach-pass-expedition',
    name: 'Sach Pass Expedition (Ride + Trek Option)',
    region: 'Chamba Valley',
    locationLabel: 'Chamba Valley',
    difficulty: 'Challenging',
    durationDays: 3,
    altitude: '4,420 m (approx.)',
    bestSeason: 'Late June to September',
    startingPoint: 'Chamba',
    nearestTown: 'Chamba',
    priceFrom: 12000,
    tags: ['adventure', 'expedition', 'seasonal'],
    highlights: ['High-altitude pass', 'Remote villages', 'Rugged landscapes'],
    overview:
      'A seasonal high-pass adventure combining scenic drives and optional short hikes. Weather windows are crucial.',
    itinerary: [
      { day: 'Day 1', plan: 'Chamba to Bairagarh, acclimatization walk.' },
      { day: 'Day 2', plan: 'Cross Sach Pass with stops for short hikes and photography.' },
      { day: 'Day 3', plan: 'Return to Chamba via scenic valleys.' }
    ],
    inclusions: ['Local guide', 'Support vehicle', 'Basic meals during transit'],
    exclusions: ['Personal gear', 'Stay upgrades', 'Permits if required'],
    packingList: ['Warm layers', 'Rain jacket', 'Gloves', 'Sturdy shoes'],
    safetyNotes: ['Route subject to weather closures', 'High-altitude acclimatization required'],
    howToReach: [
      'Chamba is reachable from Pathankot (4-5 hrs) or Dharamshala (5-6 hrs).' 
    ],
    faqs: [
      {
        question: 'Is the pass always open?',
        answer: 'No. Sach Pass opens only in late summer depending on snow clearance.'
      }
    ],
    gallery: ['/images/placeholder-5.svg', '/images/placeholder-6.svg']
  },
  {
    slug: 'bharmaur-bharmani-mata-trek',
    name: 'Bharmaur & Bharmani Mata Trek',
    region: 'Chamba Valley',
    locationLabel: 'Bharmaur, Chamba',
    difficulty: 'Moderate',
    durationDays: 2,
    altitude: '2,700 m (approx.)',
    bestSeason: 'April to June, September to November',
    startingPoint: 'Bharmaur',
    nearestTown: 'Chamba',
    priceFrom: 5200,
    tags: ['cultural', 'temple', 'moderate'],
    highlights: ['Temple trek', 'Mountain villages', 'Cultural immersion'],
    overview:
      'A cultural trek around Bharmaur with a respectful visit to Bharmani Mata temple and village trails.',
    itinerary: [
      { day: 'Day 1', plan: 'Arrive Bharmaur, village walk and acclimatization.' },
      { day: 'Day 2', plan: 'Trek to Bharmani Mata, return and depart.' }
    ],
    inclusions: ['Guide', 'Local permit assistance', 'Homestay coordination'],
    exclusions: ['Transport', 'Personal expenses'],
    packingList: ['Light rain layer', 'Comfortable trekking shoes'],
    safetyNotes: ['Respect temple guidelines', 'Carry sufficient water'],
    howToReach: ['Bharmaur is 65 km from Chamba by road.'],
    faqs: [
      {
        question: 'Is this trek suitable for beginners?',
        answer: 'Yes, with a moderate fitness level and pacing.'
      }
    ],
    gallery: ['/images/placeholder-7.svg', '/images/placeholder-8.svg']
  },
  {
    slug: 'mani-mahesh-trek',
    name: 'Mani Mahesh Trek',
    region: 'Chamba Valley',
    locationLabel: 'Bharmaur, Chamba',
    difficulty: 'Challenging',
    durationDays: 4,
    altitude: '4,080 m (approx.)',
    bestSeason: 'August to September (pilgrimage season)',
    startingPoint: 'Hadsar',
    nearestTown: 'Chamba',
    priceFrom: 9500,
    tags: ['pilgrimage', 'seasonal', 'high-altitude'],
    highlights: ['Sacred lake', 'Glacier views', 'Cultural significance'],
    overview:
      'A high-altitude pilgrimage trek approached with respect and safety-first planning.',
    itinerary: [
      { day: 'Day 1', plan: 'Drive to Hadsar, trek to Dhancho.' },
      { day: 'Day 2', plan: 'Trek to Mani Mahesh Lake, return to Dhancho.' },
      { day: 'Day 3', plan: 'Buffer/acclimatization day for weather.' },
      { day: 'Day 4', plan: 'Trek back to Hadsar and depart.' }
    ],
    inclusions: ['Guide', 'Camp coordination', 'Basic meals during trek'],
    exclusions: ['Porters', 'Insurance', 'Personal gear'],
    packingList: ['Thermal layers', 'Rain protection', 'Trekking poles'],
    safetyNotes: ['High altitude awareness', 'Weather can change quickly'],
    howToReach: ['Hadsar is reachable via Bharmaur from Chamba.'],
    faqs: [
      {
        question: 'Do we need permits?',
        answer: 'Permit requirements vary; we assist with local formalities.'
      }
    ],
    gallery: ['/images/placeholder-9.svg', '/images/placeholder-10.svg']
  },
  {
    slug: 'khajjiar-dainkund-trails',
    name: 'Khajjiar to Dainkund “Mini Switzerland” Trails',
    region: 'Dalhousie',
    locationLabel: 'Khajjiar, Dalhousie',
    difficulty: 'Easy',
    durationDays: 1,
    altitude: '2,000-2,700 m',
    bestSeason: 'March to June, September to December',
    startingPoint: 'Khajjiar',
    nearestTown: 'Dalhousie',
    priceFrom: 1900,
    tags: ['family', 'meadow', 'short', 'budget'],
    highlights: ['Khajjiar meadow', 'Gentle ridge walk', 'Family-friendly'],
    overview:
      'Soft trails linking Khajjiar meadows to Dainkund viewpoints for easy-paced explorers.',
    itinerary: [
      {
        day: 'Day 1',
        plan: 'Morning in Khajjiar, walk to Dainkund ridge, return by afternoon.'
      }
    ],
    inclusions: ['Guide', 'Light refreshments'],
    exclusions: ['Transport', 'Lunch'],
    packingList: ['Sunscreen', 'Comfortable shoes', 'Water bottle'],
    safetyNotes: ['Stay hydrated', 'Watch for slippery sections after rain'],
    howToReach: ['Khajjiar is 22 km from Dalhousie.'],
    faqs: [
      {
        question: 'Can we combine with a picnic?',
        answer: 'Yes, we can plan a family picnic with advance notice.'
      }
    ],
    gallery: ['/images/placeholder-11.svg', '/images/placeholder-12.svg']
  },
  {
    slug: 'triund-trek',
    name: 'Triund Trek',
    region: 'Dharamshala',
    locationLabel: 'McLeod Ganj, Dharamshala',
    difficulty: 'Moderate',
    durationDays: 2,
    altitude: '2,850 m (approx.)',
    bestSeason: 'March to June, September to December',
    startingPoint: 'McLeod Ganj',
    nearestTown: 'Dharamshala',
    priceFrom: 4500,
    tags: ['classic', 'camping', 'moderate', 'women-only', 'budget'],
    highlights: ['Dhauladhar views', 'Camping at Triund', 'Sunset ridge'],
    overview:
      'A classic weekend trek above McLeod Ganj with memorable ridge camping and panoramic views.',
    itinerary: [
      { day: 'Day 1', plan: 'Trek from McLeod Ganj to Triund, camp overnight.' },
      { day: 'Day 2', plan: 'Sunrise views, descend back to McLeod Ganj.' }
    ],
    inclusions: ['Guide', 'Camping gear', 'Meals during trek'],
    exclusions: ['Transport to Dharamshala', 'Personal gear rental'],
    packingList: ['Warm layers', 'Headlamp', 'Reusable bottle'],
    safetyNotes: ['Weather changes quickly at the ridge', 'Keep hydrated'],
    howToReach: ['Dharamshala is 2.5 hrs from Pathankot by road.'],
    faqs: [
      {
        question: 'Is this trek good for beginners?',
        answer: 'Yes, with a moderate fitness level and steady pace.'
      }
    ],
    gallery: ['/images/placeholder-13.svg', '/images/placeholder-14.svg']
  },
  {
    slug: 'kareri-lake-trek',
    name: 'Kareri Lake Trek',
    region: 'Dharamshala',
    locationLabel: 'Dharamshala',
    difficulty: 'Moderate',
    durationDays: 3,
    altitude: '2,950 m (approx.)',
    bestSeason: 'April to July, September to November',
    startingPoint: 'Kareri Village',
    nearestTown: 'Dharamshala',
    priceFrom: 7800,
    tags: ['lake', 'camping', 'moderate', 'women-only'],
    highlights: ['Alpine lake', 'Forest trails', 'Village stay option'],
    overview:
      'A scenic trek to a high-altitude lake with a mix of cedar forests and open meadows.',
    itinerary: [
      { day: 'Day 1', plan: 'Drive to Kareri village, short acclimatization walk.' },
      { day: 'Day 2', plan: 'Trek to Kareri Lake, camp overnight.' },
      { day: 'Day 3', plan: 'Descend to Kareri village and return.' }
    ],
    inclusions: ['Guide', 'Camping gear', 'Meals'],
    exclusions: ['Transport', 'Personal snacks'],
    packingList: ['Warm jacket', 'Waterproof layers', 'Sleeping bag liner'],
    safetyNotes: ['Follow guide instructions near lake shore', 'Respect local ecology'],
    howToReach: ['Kareri village is about 25 km from Dharamshala.'],
    faqs: [
      {
        question: 'Is the lake frozen in winter?',
        answer: 'Yes, from late December to February the lake can freeze.'
      }
    ],
    gallery: ['/images/placeholder-15.svg', '/images/placeholder-16.svg']
  },
  {
    slug: 'indrahar-pass-trek',
    name: 'Indrahar Pass Trek',
    region: 'Dharamshala',
    locationLabel: 'Dharamshala',
    difficulty: 'Advanced',
    durationDays: 5,
    altitude: '4,350 m (approx.)',
    bestSeason: 'May to June, September to October',
    startingPoint: 'McLeod Ganj',
    nearestTown: 'Dharamshala',
    priceFrom: 15500,
    tags: ['advanced', 'high-altitude', 'adventure', 'premium'],
    highlights: ['High pass crossing', 'Dhauladhar panorama', 'Remote campsites'],
    overview:
      'A demanding trek across the Dhauladhar with steep ascents and high-altitude camps.',
    itinerary: [
      { day: 'Day 1', plan: 'Trek to Triund.' },
      { day: 'Day 2', plan: 'Trek to Lahesh Cave campsite.' },
      { day: 'Day 3', plan: 'Cross Indrahar Pass, descend to Chhata.' },
      { day: 'Day 4', plan: 'Descend to Kuarsi village.' },
      { day: 'Day 5', plan: 'Drive back to Dharamshala.' }
    ],
    inclusions: ['Guide', 'Camping gear', 'Meals', 'Safety equipment'],
    exclusions: ['Porters (optional)', 'Transport to Dharamshala'],
    packingList: ['High-altitude gear', 'Trekking poles', 'Warm gloves'],
    safetyNotes: ['Advanced fitness required', 'Weather contingency days recommended'],
    howToReach: ['Start from McLeod Ganj; nearest railhead is Pathankot.'],
    faqs: [
      {
        question: 'Is this trek suitable for first-timers?',
        answer: 'No, we recommend prior trekking experience.'
      }
    ],
    gallery: ['/images/placeholder-17.svg', '/images/placeholder-18.svg']
  },
  {
    slug: 'guna-devi-naddi-sunset-hike',
    name: 'Guna Devi / Naddi Sunset Hike',
    region: 'Dharamshala',
    locationLabel: 'Naddi, Dharamshala',
    difficulty: 'Easy',
    durationDays: 1,
    altitude: '2,000 m (approx.)',
    bestSeason: 'All year',
    startingPoint: 'Naddi',
    nearestTown: 'Dharamshala',
    priceFrom: 1500,
    tags: ['family', 'short', 'sunset'],
    highlights: ['Sunset views', 'Temple visit', 'Short forest trails'],
    overview:
      'A short and scenic hike for sunset views near Dharamshala, great for families.',
    itinerary: [
      { day: 'Day 1', plan: 'Walk from Naddi to Guna Devi temple and return by sunset.' }
    ],
    inclusions: ['Guide', 'Tea/coffee break'],
    exclusions: ['Transport'],
    packingList: ['Comfortable shoes', 'Light jacket'],
    safetyNotes: ['Carry torch for return after sunset'],
    howToReach: ['Naddi is a 20-minute drive from McLeod Ganj.'],
    faqs: [
      {
        question: 'Is this trek easy for seniors?',
        answer: 'Yes, we adjust pacing for all age groups.'
      }
    ],
    gallery: ['/images/placeholder-19.svg', '/images/placeholder-20.svg']
  },
  {
    slug: 'hampta-pass-trek',
    name: 'Hampta Pass Trek',
    region: 'Manali',
    locationLabel: 'Manali, Kullu',
    difficulty: 'Challenging',
    durationDays: 5,
    altitude: '4,270 m (approx.)',
    bestSeason: 'June to September',
    startingPoint: 'Jobra',
    nearestTown: 'Manali',
    priceFrom: 14500,
    tags: ['pass', 'camping', 'adventure', 'premium'],
    highlights: ['Dramatic pass crossing', 'Meadow camps', 'Chandra valley views'],
    overview:
      'One of Himachal’s most popular pass treks with varied landscapes and thrilling vistas.',
    itinerary: [
      { day: 'Day 1', plan: 'Drive to Jobra, trek to Chika campsite.' },
      { day: 'Day 2', plan: 'Trek to Balu Ka Ghera.' },
      { day: 'Day 3', plan: 'Cross Hampta Pass, descend to Shea Goru.' },
      { day: 'Day 4', plan: 'Trek to Chatru, drive back to Manali.' },
      { day: 'Day 5', plan: 'Buffer day or local exploration.' }
    ],
    inclusions: ['Guide', 'Camping gear', 'Meals'],
    exclusions: ['Transport to Manali', 'Personal gear'],
    packingList: ['Warm layers', 'Rain jacket', 'Trekking poles'],
    safetyNotes: ['High-altitude monitoring', 'Weather buffers recommended'],
    howToReach: ['Manali is connected to Delhi/Chandigarh by road.'],
    faqs: [
      {
        question: 'Is prior trekking experience required?',
        answer: 'Recommended but not mandatory with good fitness.'
      }
    ],
    gallery: ['/images/placeholder-21.svg', '/images/placeholder-22.svg']
  },
  {
    slug: 'bhrigu-lake-trek',
    name: 'Bhrigu Lake Trek',
    region: 'Manali',
    locationLabel: 'Manali, Kullu',
    difficulty: 'Moderate',
    durationDays: 3,
    altitude: '4,300 m (approx.)',
    bestSeason: 'May to October',
    startingPoint: 'Gulaba',
    nearestTown: 'Manali',
    priceFrom: 10800,
    tags: ['lake', 'high-altitude', 'moderate', 'premium'],
    highlights: ['High-altitude lake', 'Alpine meadows', 'Quick access from Manali'],
    overview:
      'A short yet high-altitude trek to the sacred Bhrigu Lake with stunning meadow walks.',
    itinerary: [
      { day: 'Day 1', plan: 'Drive to Gulaba, trek to Rola Kholi camp.' },
      { day: 'Day 2', plan: 'Trek to Bhrigu Lake, return to camp.' },
      { day: 'Day 3', plan: 'Descend and drive back to Manali.' }
    ],
    inclusions: ['Guide', 'Camping gear', 'Meals'],
    exclusions: ['Transport', 'Personal gear'],
    packingList: ['Warm layers', 'Rain jacket', 'Trekking shoes'],
    safetyNotes: ['High altitude can impact breathing', 'Take acclimatization breaks'],
    howToReach: ['Gulaba is 22 km from Manali.'],
    faqs: [
      {
        question: 'Is this trek safe during monsoon?',
        answer: 'We avoid heavy monsoon windows and monitor weather closely.'
      }
    ],
    gallery: ['/images/placeholder-25.svg', '/images/placeholder-26.svg']
  },
  {
    slug: 'offbeat-village-walk-chamba',
    name: 'Offbeat Village Walk – Chamba',
    region: 'Chamba Valley',
    locationLabel: 'Chamba Valley',
    difficulty: 'Easy',
    durationDays: 2,
    altitude: '1,800-2,200 m',
    bestSeason: 'All year',
    startingPoint: 'Chamba',
    nearestTown: 'Chamba',
    priceFrom: 4200,
    tags: ['offbeat', 'culture', 'family', 'women-only', 'budget'],
    highlights: ['Homestay culture', 'Local food', 'Village trails'],
    overview:
      'Slow travel through quiet villages with homestays, local cuisine, and cultural storytelling.',
    itinerary: [
      { day: 'Day 1', plan: 'Village orientation walk, homestay check-in.' },
      { day: 'Day 2', plan: 'Morning trail, cultural interactions, return to Chamba.' }
    ],
    inclusions: ['Local guide', 'Homestay coordination', 'Meals'],
    exclusions: ['Transport', 'Personal expenses'],
    packingList: ['Comfortable clothing', 'Light jacket', 'Reusable bottle'],
    safetyNotes: ['Respect local customs', 'Stay with group in villages'],
    howToReach: ['Chamba is accessible by road from Pathankot or Dharamshala.'],
    faqs: [
      {
        question: 'Are homestays private?',
        answer: 'Rooms are shared/paired depending on group size.'
      }
    ],
    gallery: ['/images/placeholder-29.svg', '/images/placeholder-30.svg']
  },
  {
    slug: 'chamera-lake-riverside-hike',
    name: 'Chamera Lake Riverside Hike',
    region: 'Chamba Valley',
    locationLabel: 'Chamera Lake, Chamba',
    difficulty: 'Easy',
    durationDays: 1,
    altitude: '1,700 m (approx.)',
    bestSeason: 'All year',
    startingPoint: 'Chamba',
    nearestTown: 'Chamba',
    priceFrom: 1900,
    tags: ['offbeat', 'family', 'budget'],
    highlights: ['Riverside trails', 'Quiet viewpoints', 'Local village life'],
    overview:
      'A relaxed riverside hike around Chamera Lake with scenic viewpoints and offbeat village access.',
    itinerary: [
      { day: 'Day 1', plan: 'Drive to Chamera Lake, lakeside walk and return to Chamba.' }
    ],
    inclusions: ['Local guide', 'Snacks and tea'],
    exclusions: ['Transport', 'Personal expenses'],
    packingList: ['Comfortable shoes', 'Light jacket', 'Water bottle'],
    safetyNotes: ['Stay on marked paths near the water', 'Carry sun protection'],
    howToReach: ['Chamera Lake is reachable by road from Chamba in 1-1.5 hours.'],
    faqs: [
      {
        question: 'Is this suitable for families?',
        answer: 'Yes, it is a gentle walk with flexible pacing.'
      }
    ],
    gallery: ['/images/placeholder-31.svg', '/images/placeholder-32.svg']
  }
];
