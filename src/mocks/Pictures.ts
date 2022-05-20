type Breed = {
  id: number,
  name: string,
}

type Picture = {
  height: number,
  id: number | string,
  url: string,
  width: number,
}

export type BreedInfo = Breed & Picture;

const breed: BreedInfo = {
  id: 239,
  name: 'Standard Schnauzer',
  height: 1280,
  url: 'https://cdn2.thedogapi.com/images/v-08PkHgP.jpg',
  width: 1280,
};

export const pictures = Array.from( { length: 15}, () => breed);
