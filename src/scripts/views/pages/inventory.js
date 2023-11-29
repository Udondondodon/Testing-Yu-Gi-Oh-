import CardIDB from '../../data/card-database';
import { createCardList } from '../templates/template-creator';

const Inventory = {
  async render() {
    return `
        <h2>Ini adalah list kartu yang anda miliki</h2>
        <div class="card-list" id="card-list"></div>
    `;
  },

  async afterRender() {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };
    try {
      const cards = await CardIDB.getAllCards();
      const cardContainer = document.querySelector('#card-list');
      cards.forEach((card) => {
        cardContainer.innerHTML += createCardList(card);
      });
    } catch (error) {
      showResponseMessage(error);
    }
  },
};

export default Inventory;
