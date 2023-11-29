import CardIDB from '../../data/card-database';
import { createCardList } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <h2>Ini adalah kartu yang berada pada decklist anda</h2>
        <div class="card-list" id="card-list"></div>
    `;
  },

  async afterRender() {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };
    try {
      const cards = await CardIDB.getAllDecks();
      const cardContainer = document.querySelector('#card-list');
      cards.forEach((card) => {
        cardContainer.innerHTML += createCardList(card);
      });
    } catch (error) {
      showResponseMessage(error);
    }
  },
};

export default Favorite;
