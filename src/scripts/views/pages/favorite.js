import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
import { createRestaurantList } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <h2>Ini adalah kartu yang berada pada decklist anda</h2>
        <div class="restaurant-list" id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllDecks();
      const restaurantContainer = document.querySelector('#restaurant-list');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantList(restaurant);
      });
    } catch (error) {
      showResponseMessage(error);
    }
  },
};

export default Favorite;
