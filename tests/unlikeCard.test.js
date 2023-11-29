import CardIDB from '../src/scripts/data/card-database';
import * as TestFactories from './helpers/testFactories';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Unliking a card', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await CardIDB.putDeck({ id: 1 });
  });

  afterEach(async () => {
    await CardIDB.deleteDeck(1);
  });

  it('should display unlike widget when the card has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this card"]')).toBeTruthy();
  });

  it('should not display like widget when the card has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({ id: 1 });

    expect(document.querySelector('[aria-label="like this card"]')).toBeFalsy();
  });

  it('should be able to remove liked card from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({ id: 1 });

    document.querySelector('[aria-label="unlike this card"]').dispatchEvent(new Event('click'));
    expect(await CardIDB.getAllDecks()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked card is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({ id: 1 });

    await CardIDB.deleteDeck(1);
    document.querySelector('[aria-label="unlike this card"]').dispatchEvent(new Event('click'));
    expect(await CardIDB.getAllDecks()).toEqual([]);
  });
});
