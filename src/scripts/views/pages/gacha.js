/* eslint-disable no-plusplus */
import Card from '../../data/card-source';
import { createCardList } from '../templates/template-creator';
import CardIDB from '../../data/card-database';

const Gacha = {
  async render() {
    return `
      <h2>Hasil Gacha</h2>
      <div class="card-list" id="card-list"></div>
    `;
  },

  async afterRender() {
    const card = await Card.listCard();
    const cardContainer = document.querySelector('#card-list');

    let displayedCards = 0;

    while (displayedCards < 10) {
      const randomIndex = Math.floor(Math.random() * card.length);
      const cardItem = card[randomIndex];
      cardContainer.innerHTML += createCardList(cardItem);
      displayedCards++;

      CardIDB.putCard(cardItem);
    }
  },
};

export default Gacha;
