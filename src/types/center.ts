export interface Center {
  id: string;
  name: string;
  address: string;
  google_maps_url?: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  category: string;
  day_pass_discounts_percentage: {
    [key: string]: {
      value: number;
      message: string;
    };
  };
}
