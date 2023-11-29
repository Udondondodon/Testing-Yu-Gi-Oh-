import CardIDB from '../data/card-database';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, card }) {
    this._likeButtonContainer = likeButtonContainer;
    this._card = card;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._card;

    if (await this._isCardExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isCardExist(id) {
    const card = await CardIDB.getDeck(id);
    return !!card;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await CardIDB.putDeck(this._card);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await CardIDB.deleteDeck(this._card.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
