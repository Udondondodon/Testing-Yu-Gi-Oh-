import CardIDB from '../../data/card-database';
import { createCardInventory } from '../templates/template-creator';

const Inventory = {
  async render() {
    return `
        <h2>Ini adalah list kartu yang anda miliki</h2>
        <div class="card-inv" id="card-inv">
        </div>
    `;
  },

  async afterRender() {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };
    try {
      const cards = await CardIDB.getAllCards();
      const cardContainer = document.querySelector('#card-inv');
      cards.forEach((card) => {
        cardContainer.innerHTML += createCardInventory(card);
      });
    } catch (error) {
      showResponseMessage(error);
    }
  },
};

export default Inventory;
