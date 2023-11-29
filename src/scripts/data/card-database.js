import { openDB } from 'idb';
import CONFIG from '../global/config';

const {
  DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME, OBJECT_STORE_DECK,
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    database.createObjectStore(OBJECT_STORE_DECK, { keyPath: 'id' });
  },
});

const CardIDB = {
  async getCard(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllCards() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putCard(card) {
    if (!card.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, card);
  },
  async deleteCard(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async getDeck(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_DECK, id);
  },
  async getAllDecks() {
    return (await dbPromise).getAll(OBJECT_STORE_DECK);
  },
  async putDeck(card) {
    if (!card.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_DECK, card);
  },
  async deleteDeck(id) {
    return (await dbPromise).delete(OBJECT_STORE_DECK, id);
  },
};

export default CardIDB;
