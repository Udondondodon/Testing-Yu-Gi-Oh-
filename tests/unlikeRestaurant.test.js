import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putDeck({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteDeck(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllDecks()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteDeck(1);
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllDecks()).toEqual([]);
  });
});
