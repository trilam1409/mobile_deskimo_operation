export type LocationType = {
  city_code: string;
  country_code: string;
  city_name: string;
  currency: string;
  background: string;
  refresh_expired_time: number;
  refresh_ongoing_time: number;
  dkm_minimum_charge: string;
  lat: number;
  lng: number;
  corporate_registration_url: string;
  customer_support_url: string;
  faq_url: string;
  how_it_work_url: string;
  invite_term_url: string;
  policy_url: string;
  term_url: string;
  user_guide_url: string;
};

export type UserGuideType = {
  image: any;
  title: string;
  description: string;
};

export type LandmarkType = {
  distance: string;
  image_url: string;
  lat: number;
  lng: number;
  name: string;
};
