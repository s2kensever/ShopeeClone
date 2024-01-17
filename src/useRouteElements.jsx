import { useRoutes } from 'react-router-dom'
import ProductList from './pages/Product/ProductList'
import Login from './pages/Buyer/Login'
import Register from './pages/Buyer/Register/Register'
import Buyer from './layouts/Buyer'

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/buyer/login',
      element: (
        <Buyer>
          <Login />
        </Buyer>
      )
    },
    {
      path: '/buyer/register',
      element: (
        <Buyer>
          <Register />
        </Buyer>
      )
    }
  ])
  return routeElement
}
