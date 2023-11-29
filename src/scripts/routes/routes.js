import Gacha from '../views/pages/gacha';
import Detail from '../views/pages/card-detail';
import Favorite from '../views/pages/favorite';
import Dashboard from '../views/pages/dashboard';
import Inventory from '../views/pages/inventory';

const routes = {
  '/': Dashboard,
  '/gacha': Gacha,
  '/inventory': Inventory,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
