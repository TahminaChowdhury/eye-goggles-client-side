import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/Home/ConatctUs/ContactUs';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './ContextApi/AuthProvider';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import SingleSunglass from './Pages/Home/Products/Sunglasses/SingleSunglass/SingleSunglass';
import Explore from './Pages/Home/Explore/Explore';
import DashBoard from './Pages/Dashboard/DashBoard/DashBoard';
import Cart from './Pages/Cart/Cart/Cart';
import GoToTop from './Pages/Home/GoToTop/GoToTop';
import Checkout from './Pages/Cart/Checkout/Checkout';
import CheckoutSuccess from './Pages/Cart/Checkout/CheckoutSuccess';
import CheckoutCancel from './Pages/Cart/Checkout/CheckoutCancel';
import Auth from './Pages/Shared/Auth';
import Profile from './Pages/Dashboard/User/Profile/Profile';
import MyWishlist from './Pages/Dashboard/User/MyWishlist/MyWishlist';
import MyReviews from './Pages/Dashboard/User/MyReviews/MyReviews';
import MyOrders from './Pages/Dashboard/User/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/checkout-cancel" element={<CheckoutCancel />} />
            <Route path="/sunglass/:id" element={<SingleSunglass />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashBoard />
                </PrivateRoute>
              }
            >
              <Route index element={<Profile />} />
              <Route path="/dashboard/myOrders" element={<MyOrders />} />
              <Route path="/dashboard/myWishlist" element={<MyWishlist />} />
              <Route path="/dashboard/myReviews" element={<MyReviews />} />
            </Route>
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
          </Routes>
          <GoToTop />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
