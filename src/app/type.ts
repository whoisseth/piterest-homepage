/** @format */

export interface Photo {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: Breadcrumb[];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: {
    [key: string]: {
      status: string;
      approved_on: string;
    };
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string | null;
    twitter_username: string;
    portfolio_url: string | null;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string | null;
      twitter_username: string;
      paypal_email: string | null;
    };
  };
  tags: Tag[];
}

interface Breadcrumb {
  slug: string;
  title: string;
  index: number;
  type: string;
}

interface Tag {
  type: string;
  title: string;
  source?: {
    ancestry: {
      type: {
        slug: string;
        pretty_slug: string;
      };
      category: {
        slug: string;
        pretty_slug: string;
      };
      subcategory: {
        slug: string;
        pretty_slug: string;
      };
    };
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: {
      id: string;
      slug: string;
      created_at: string;
      updated_at: string;
      promoted_at: string | null;
      width: number;
      height: number;
      color: string;
      blur_hash: string;
      description: string | null;
      alt_description: string;
      breadcrumbs: any[];
      urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
      };
      links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
      };
      likes: number;
      liked_by_user: boolean;
      current_user_collections: any[];
      sponsorship: any;
      topic_submissions: {
        [key: string]: {
          status: string;
          approved_on: string;
        };
      };
      user: User;
    };
  };
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  twitter_username: string;
  portfolio_url: string | null;
  bio: string;
  location: string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: {
    instagram_username: string;
    portfolio_url: string | null;
    twitter_username: string;
    paypal_email: string | null;
  };
}
