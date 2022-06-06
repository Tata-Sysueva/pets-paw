type Size = {
  imperial: string,
  metric: string,
}

export type Picture = {
  height: number,
  id: number | string,
  url: string,
  width: number,
}

export type BreedInfo = {
  breedFor: string,
  breedGroup: string,
  height: Size,
  id: number,
  image: Picture & Picture[],
  lifeSpan: string,
  name: string,
  origin: string,
  referenceImageId: string,
  temperament: string,
  weight: Size,
}

export type BreedInfoMocks = {
  breedFor: string,
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
