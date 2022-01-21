import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  SUPERHERO_ROUTE,
} from './utils/consts';
import { Admin } from './pages/Admin';
import { Auth } from './pages/Auth';
import { BasketPage } from './pages/BasketPage';
import { Main } from './pages/Main';
import { SuperheroPage } from './pages/SuperheroPage';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    element: <BasketPage />,
  },
];
export const publickRoutes = [
  {
    path: MAIN_ROUTE,
    element: <Main />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: SUPERHERO_ROUTE + '/:id',
    element: <SuperheroPage />,
  },
];
