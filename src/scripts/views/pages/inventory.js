import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
import { createRestaurantList } from '../templates/template-creator';

const Inventory = {
  async render() {
    return `
        <h2>Ini adalah list kartu anda</h2>
        <div class="restaurant-list" id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllCards();
      const restaurantContainer = document.querySelector('#restaurant-list');
      restaurants.forEach((cards) => {
        restaurantContainer.innerHTML += createRestaurantList(cards);
      });
    } catch (error) {
      showResponseMessage(error);
    }
  },
};

export default Inventory;
