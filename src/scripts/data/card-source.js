import API_ENDPOINT from '../global/api-endpoint';

class Card {
  static async listCard() {
    const response = await fetch(API_ENDPOINT.LIST);

    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data;
    }
    throw new Error(`Failed to fetch cards: ${response.status}`);
  }

  static async detailCard(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data[0];
    }
    throw new Error(`Failed to fetch cards: ${response.status}`);
  }
}

export default Card;
