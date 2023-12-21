import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
// import AllProducts from './pages/AllProducts';
// import ProductDetail from './pages/ProductDetail';
// import NewProduct from './pages/NewProduct';
// import MyCart from './pages/MyCart';
// import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,

    // 아울렛 사용하여 자식 루트 보여주기
    children: [
      // { index: true, path: '/', element: <Home /> },
      // { path: '/products', element: <AllProducts /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
