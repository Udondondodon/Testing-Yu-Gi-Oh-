import CardIDB from '../src/scripts/data/card-database';
import Card from '../src/scripts/data/card-source';
import * as TestFactories from './helpers/testFactories';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Gacha Card', () => {
  const addGachaButtonContainer = () => {
    document.body.innerHTML = '<div id="gachaButton"></div>';
  };

  beforeEach(() => {
    addGachaButtonContainer();
  });

  it('should show the like button when the gacha Button', async () => {
    await TestFactories.createGachaButtonInitiatorWithCard();

    expect(document.querySelector('[aria-label="gacha button"]')).toBeTruthy();
  });
});
