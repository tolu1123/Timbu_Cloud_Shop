import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// import the router's api
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


import Index from './Index.jsx'
import Cart from './Cart.jsx'
import CheckOut from './CheckOut.jsx'
import Product from './Product.jsx'

// Configure the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <Error/>,
  }, {
    path: '/cart',
    element: <Cart />,
    errorElement: <Error/>,
  },
  {
    path: '/checkout',
    element: <CheckOut />,
    errorElement: <Error/>,
  },{
    path: '/product',
    element: <Product />,
    errorElement: <Error/>
  }
])



// Creating a default component
function Default() {

  // Creating a global state for the link value that will be used by the header components of all apps specifically those aside from the index page
  // const [linkValue, setLinkValue] = useState(' ');

  // function updateLinkValue(data) {
  //   setLinkValue(data);
  // }
  

  return (
      
        <RouterProvider router={router}></RouterProvider>
  )
}
{/* <LinkContext.Provider value={{linkValue, updateLinkValue}} ></LinkContext.Provider> */}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Default />
  </React.StrictMode>,
)
