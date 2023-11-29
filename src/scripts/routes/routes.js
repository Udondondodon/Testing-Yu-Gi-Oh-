import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
import Favorite from '../views/pages/favorite';
import Dashboard from '../views/pages/dashboard';
import Inventory from '../views/pages/inventory';

const routes = {
  '/': Dashboard,
  '/gacha': RestaurantList,
  '/inventory': Inventory,
  '/detail/:id': RestaurantDetail,
  '/favorite': Favorite,
};

export default routes;
