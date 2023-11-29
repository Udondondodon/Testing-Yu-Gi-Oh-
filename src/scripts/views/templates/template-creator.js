const createCardList = (card) => `
  <div class="container-list" id "container-list">
    <a href="#/detail/${card.id}">
      <img class="lazyload" src="${card.card_images[0].image_url}" alt="Foto Kartu ${card.name}">
    </a>
  </div>
`;

const createCardDetail = (card) => `
  <div class="container-detail">
    <div class="head">
      <h2>${card.name}</h2>
      <img class="lazyload" src="${card.card_images[0].image_url}" alt="Foto Restoran ${card.name}">
      <p>${card.desc}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this card" id="likeButton" class="like">
    <i class="fa fa-heart-o"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this card" id="likeButton" class="like">
    <i class="fa fa-heart"></i>
  </button>
`;

export {
  createCardList,
  createCardDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
