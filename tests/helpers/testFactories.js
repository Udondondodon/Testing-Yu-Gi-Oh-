import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonInitiatorWithCard = async (card) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    card,
  });
};

const createGachaButtonInitiatorWithCard = async () => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#gachaButton'),
  });
};

export { createLikeButtonInitiatorWithCard, createGachaButtonInitiatorWithCard };
