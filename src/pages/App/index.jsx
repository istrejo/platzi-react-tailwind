import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';

import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../components/Navbar';

import './App.css';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/signin', element: <Signin /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
