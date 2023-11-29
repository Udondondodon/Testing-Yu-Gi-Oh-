import CardIDB from '../src/scripts/data/card-database';
import * as TestFactories from './helpers/testFactories';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Liking a card', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the card has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({ id: 1 });

    expect(document.querySelector('[aria-label="like this card"]')).toBeTruthy();
  });

  it('should not show the unlike button when the card has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this card"]')).toBeFalsy();
  });

  it('should be able to like the card', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const card = await CardIDB.getDeck(1);
    expect(card).toEqual({ id: 1 });

    await CardIDB.deleteDeck(1);
  });

  it('should not add a card again when its already liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({ id: 1 });

    await CardIDB.putDeck({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await CardIDB.getAllDecks()).toEqual([{ id: 1 }]);
    await CardIDB.deleteDeck(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLikeButtonInitiatorWithCard({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await CardIDB.getAllDecks()).toEqual([]);
  });
});
