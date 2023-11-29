/* eslint-disable no-plusplus */
import Restaurant from '../../data/restaurant-source';
import { createRestaurantList } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';

const Gacha = {
  async render() {
    return `
      <h2>Hasil Gacha</h2>
      <div class="restaurant-list" id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurant = await Restaurant.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');

    let displayedCards = 0;

    while (displayedCards < 10) {
      const randomIndex = Math.floor(Math.random() * restaurant.length);
      const restaurantItem = restaurant[randomIndex];
      restaurantContainer.innerHTML += createRestaurantList(restaurantItem);
      displayedCards++;

      FavoriteRestaurantIdb.putCard(restaurantItem);
    }
  },
};

export default Gacha;
