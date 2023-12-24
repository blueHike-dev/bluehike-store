import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Cart from './components/cart/Cart';

function App() {
  
  
  const Layout = ()=> {
    return <div className="main">
      <Navbar />
      <div className="container">
          <Outlet />        
      </div>
      <Footer />
    </div>
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },

      ]
    },

    {
      path:'/cart',
      element: <Cart />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}



export default App
