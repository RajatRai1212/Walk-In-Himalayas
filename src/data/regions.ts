export type Region = {
  slug: string;
  name: string;
  shortDescription: string;
  bestSeason: string;
  sampleItineraries: string[];
  highlights: string[];
};

export const regions: Region[] = [
  {
    slug: 'chamba-valley',
    name: 'Chamba Valley',
    shortDescription:
      'Remote valleys, temple towns, and high passes shaped by living mountain culture.',
    bestSeason: 'March to June, September to November',
    sampleItineraries: [
      '2N Dalhousie + Dainkund + Khajjiar',
      '4N Chamba heritage + village walks',
      '6N Chamba valley trek + camping'
    ],
    highlights: ['Offbeat villages', 'High meadows', 'Heritage temples', 'Riverside camps']
  },
  {
    slug: 'dalhousie',
    name: 'Dalhousie',
    shortDescription:
      'Pine forests, colonial charm, and easy-access family treks with scenic viewpoints.',
    bestSeason: 'All year (snow best Dec-Feb)',
    sampleItineraries: [
      'Weekend Dainkund + Kalatop',
      '3N Dalhousie family escape',
      '4N camping + short hikes'
    ],
    highlights: ['Dainkund Peak', 'Kalatop sanctuary', 'Khajjiar meadows', 'Sunset viewpoints']
  },
  {
    slug: 'dharamshala',
    name: 'Dharamshala & McLeod Ganj',
    shortDescription:
      'Monasteries, cedar forests, and classic treks with panoramic Dhauladhar views.',
    bestSeason: 'March to June, September to November',
    sampleItineraries: [
      '2N Triund trek',
      '4N Kareri Lake trek',
      '6N Indrahar Pass adventure'
    ],
    highlights: ['Triund ridge', 'Kareri Lake', 'Monasteries', 'Tea gardens']
  },
  {
    slug: 'manali-kullu',
    name: 'Manali & Kullu',
    shortDescription:
      'Glacier-fed rivers, alpine meadows, and iconic high-altitude passes.',
    bestSeason: 'May to October (snow treks in early summer)',
    sampleItineraries: [
      '3N Bhrigu Lake',
      '5N Hampta Pass',
      '2N Manali viewpoints'
    ],
    highlights: ['Hampta Pass', 'Bhrigu Lake', 'Kullu meadows', 'Manali viewpoints']
  }
];
