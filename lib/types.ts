export type SellerType = 'contractor' | 'supplier' | 'owner_operator' | 'yard' | 'crew' | 'individual';

export type ListingCategory = 'Materials' | 'Dirt & Aggregate' | 'Concrete' | 'Equipment' | 'Hauling' | 'Labor & Crews';

export type ListingType = 'For Sale' | 'Wanted' | 'For Rent' | 'Service Available' | 'Service Needed';

export type Urgency = 'urgent' | 'today' | 'this_week' | 'flexible';

export type Condition = 'excellent' | 'good' | 'fair' | 'as_is';

export interface Listing {
  id: string;
  title: string;
  category: ListingCategory;
  subcategory: string;
  listingType: ListingType;
  price: number | null;
  priceType: 'fixed' | 'negotiable' | 'contact' | null;
  sellerName: string;
  sellerType: SellerType;
  location: string;
  postalCode: string;
  distance?: number;
  postedTime: string;
  urgency?: Urgency;
  quantity?: number | string;
  unit?: string;
  description: string;
  condition?: Condition;
  availability?: string;
  imageUrl?: string;
  phone?: string;
  email?: string;
  additionalDetails?: Record<string, any>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  type: SellerType;
  savedListings: string[];
  myListings: string[];
  verified?: boolean;
}

export interface SearchFilters {
  category?: ListingCategory;
  subcategory?: string;
  listingType?: ListingType;
  location?: string;
  postalCode?: string;
  priceMin?: number;
  priceMax?: number;
  urgency?: Urgency;
  sortBy?: 'recent' | 'price_low' | 'price_high' | 'distance';
  searchTerm?: string;
}
