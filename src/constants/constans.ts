export const TIMEOUT_MESSAGE = 5000;

export enum AppRoute {
  Promo = 'pets-paw/',
  Voting = '/voting',
  Breeds = '/breeds',
  Gallery = '/gallery',
  Likes = '/likes',
  Favorites = '/favorites',
  Dislikes = '/dislikes',
}

export enum BtnSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Square = 'Square',
  SquareSecondary = 'SquareSecondary',
}

export enum BtnVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Special = 'Special',
}

export enum TypeElement {
  Button = 'Button',
  Link = 'Link',
}

export enum TextModal {
  AddLikes = 'Are you sure you want to add to like?',
  AddFavorites = 'Are you sure you want to add to favorites?',
  AddDislikes = 'Are you sure you want to add to dislikes?',
  Success = 'Great job!',
  Error = 'Something went wrong. Try again',
}

export enum NameSpace {
  Modal = 'MODAL',
}


export enum TypeModal {
  Like = 'Likes',
  Dislike = 'Dislikes',
  Favorites = 'Favorites',
}

export enum SortType {
  Asc = 'Asc',
  Desc = 'Desc',
  Random = 'Random',
}

export enum MimeTypes {
  All = 'gif,jpg,png',
  Static = 'jpg,png',
  Animated = 'gif',
}

export enum SizeImage {
  Small = 'small',
  Med = 'med',
  Full = 'full',
}
