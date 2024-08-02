export interface LocationHeaderProps {
  name: string;
  distance: string;
  googleMapUrl?: string;
}

export interface PricingOptionProps {
  label: string;
  price?: number;
  duration: string;
  discountPercentage?: number;
  className?: string;
}

export interface DiscountBadgeProps {
  percentage: number;
}

export interface CardImageProps {
  imageUrl: string;
  category: string;
}
