export interface EventImage {
  ratio: string;
  url: string;
  height: number;
  width: number;
}

export interface EventPrice {
  type: string;
  currency: string;
  value: number;
}

export interface Venue {
  name: string;
  city: { name: string };
  country: { code: string };
  address?: { line1?: string };
  postalCode?: string;
}


export interface Event {
  id: string;
  name: string;
  url: string;
  locale: string;
  images: EventImage[];
  dates: {
    start: {
      localDate: string;
    };
  };
  priceRanges?: EventPrice[];
  _embedded?: {
    venues?: Venue[];
  };
}
