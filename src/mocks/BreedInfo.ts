import {BreedInfoMocks} from '../types/types';

const breedInfo: BreedInfoMocks = {
  bredFor: 'Small rodent hunting, lapdog',
  breedGroup: 'Toy',
  height: {
    imperial: '9 - 11.5',
    metric: '23 - 29',
  },
  id: 1,
  image: [
    {
      height: 1199,
      id: 'BJa4kxc4X',
      url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
      width: 1600,
    },
    {
      height: 1199,
      id: 'BJa4kxc4X',
      url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
      width: 1600,
    },
    {
      height: 1199,
      id: 'BJa4kxc4X',
      url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
      width: 1600,
    },
  ],
  lifeSpan: '10 - 12 years',
  name: 'Affenpinscher',
  origin: 'Germany, France',
  referenceImageId: 'BJa4kxc4X',
  temperament: 'Stubborn, Curious, Playful, Adventurous, Active, Fun-loving',
  weight: {
    imperial: '6 - 13',
    metric: '3 - 6',
  }
};

export const breedInfoArray = Array.from( { length: 15}, () => breedInfo);
