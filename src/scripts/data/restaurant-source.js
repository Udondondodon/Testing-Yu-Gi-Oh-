import API_ENDPOINT from '../global/api-endpoint';

class Restaurant {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);

    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data;
    }
    throw new Error(`Failed to fetch restaurants: ${response.status}`);
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data[0];
    }
    throw new Error(`Failed to fetch restaurants: ${response.status}`);
  }
}

export default Restaurant;
