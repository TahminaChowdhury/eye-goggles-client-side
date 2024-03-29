import React from 'react';
import './Styles/Styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ContactUs from './Pages/Home/ConatctUs/ContactUs';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './ContextApi/AuthProvider';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import SingleSunglass from './Pages/Home/Products/Sunglasses/SingleSunglass/SingleSunglass';
import Explore from './Pages/Home/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Cart from './Pages/Cart/Cart/Cart';
import GoToTop from './Pages/Home/GoToTop/GoToTop';
import Checkout from './Pages/Cart/Checkout/Checkout';
import CheckoutSuccess from './Pages/Cart/Checkout/CheckoutSuccess';
import CheckoutCancel from './Pages/Cart/Checkout/CheckoutCancel';
import Auth from './Pages/Shared/Auth';
import MyWishlist from './Pages/Dashboard/User/MyWishlist/MyWishlist';
import MyReviews from './Pages/Dashboard/User/MyReviews/MyReviews';
import OrderHistory from './Pages/Dashboard/User/MyOrders/OrderHistory';
import Orders from './Pages/Dashboard/Admin/Orders/Orders';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/Dashboard/Admin/AddProduct/AddProduct';
import UpdateProduct from './Pages/Dashboard/Admin/UpdateProduct/UpdateProduct';
import DashboardHome from './Pages/Dashboard/Dashboard/DashboardHome/DashboardHome';
import Profile from './Pages/Dashboard/User/Profile/Profile';
import EditProfile from './Pages/Dashboard/User/Profile/Editprofile/EditProfile';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
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
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route index element={<DashboardHome />} />
              <Route path="/dashboard/orders" element={<Orders />} />
              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
              <Route path="/dashboard/addproduct" element={<AddProduct />} />
              <Route
                path="/dashboard/updateProduct"
                element={<UpdateProduct />}
              />
            </Route>
            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route index path="/user/profile" element={<Profile />}/>
              <Route path="/user/profile/edit" element={<EditProfile />} />
              <Route path="/user/order-history" element={<OrderHistory />} />
              <Route path="/user/myWishlist" element={<MyWishlist />} />
              <Route path="/user/myReviews" element={<MyReviews />} />
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
