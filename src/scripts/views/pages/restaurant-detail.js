import Restaurant from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
// import deckList from '../../data/decklist';

const Detail = {
  async render() {
    return `
      <div id="detail-restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await Restaurant.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML += createRestaurantDetail(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        card_images: restaurant.card_images,
        name: restaurant.name,
        desc: restaurant.desc,
      },
    });
  },
};

export default Detail;
