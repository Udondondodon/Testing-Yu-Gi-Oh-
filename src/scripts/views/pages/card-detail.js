import Card from '../../data/card-source';
import UrlParser from '../../routes/url-parser';
import { createCardDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CardIDB from '../../data/card-database';

const Detail = {
  async render() {
    return `
      <div id="detail-card"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const card = await Card.detailCard(url.id);
    const cardContainer = document.querySelector('#detail-card');
    cardContainer.innerHTML += createCardDetail(card);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteCard: CardIDB,
      card: {
        id: card.id,
        card_images: card.card_images,
        name: card.name,
        desc: card.desc,
      },
    });
  },
};

export default Detail;
