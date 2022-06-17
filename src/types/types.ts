type Size = {
  imperial: string,
  metric: string,
}

export interface Picture {
  height: number,
  id: number | string,
  url: string,
  width: number,
}

export interface PictureVoting extends Picture {
  breeds: BreedInfo[];
}

export interface BreedInfo {
  bredFor: string,
  breedGroup: string,
  height: Size,
  id: number,
  image: Picture,
  lifeSpan: string,
  name: string,
  origin: string,
  referenceImageId: string,
  temperament: string,
  weight: Size,
}

export type BreedInfoMocks = {
  bredFor: string,
  breedGroup: string,
  height: Size,
  id: number,
  image: Picture[],
  lifeSpan: string,
  name: string,
  origin: string,
  referenceImageId: string,
  temperament: string,
  weight: Size,
}

export interface Vote {
  imageId?: number | string,
  subId?: string | null,
}

export interface VoteReactions extends Vote {
  value?: number,
}

export interface Votes extends VoteReactions {
  countryCode?: string,
  id?: number,
  createdAt?: string,
}
