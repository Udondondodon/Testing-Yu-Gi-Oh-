const createCardList = (card) => `
  <div class="container-list" id "container-list">
    <a href="#/detail/${card.id}">
      <img class="lazyload" src="${card.card_images[0].image_url}" alt="Foto Kartu ${card.name}">
    </a>
  </div>
`;

const createCardInventory = (card) => `
  <div class="container-inv" id "container-inv">
    <div id="card-name">
      <td >${card.name}</td>
    </div>
    <div id="card-opsi">
      <td><a href="#/detail/${card.id}"><button>Detail Kartu</button></a></td>
    </div>
  </div>
`;

const createCardDetail = (card) => `
  <div class="container-detail">
    <div class="head">
      <h2>${card.name}</h2>
    </div>
    <div class="content">
      <div class"img">
        <img src="${card.card_images[0].image_url}" alt="Foto Kartu ${card.name}">
      </div>
      <div class ="description">
        <p class="desc">${card.desc}</p>
      </div>
    <div>
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
  createCardInventory,
  createCardDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
