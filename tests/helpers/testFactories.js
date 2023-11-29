import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonInitiatorWithCard = async (card) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    card,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonInitiatorWithCard };
