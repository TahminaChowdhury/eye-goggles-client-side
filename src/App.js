import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/Home/ConatctUs/ContactUs';
import Login from './Pages/Shared/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './ContextApi/AuthProvider';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import SingleSunglass from './Pages/Home/Products/Sunglasses/SingleSunglass/SingleSunglass';
import Signup from './Pages/Shared/Signup/Signup';
import Explore from './Pages/Home/Explore/Explore';
import DashBoard from './Pages/Dashboard/DashBoard/DashBoard';
import AllOrders from './Pages/Dashboard/Admin/AllOrders/AllOrders';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/Dashboard/Admin/AddProduct/AddProduct';
import UpdateProduct from './Pages/Dashboard/Admin/UpdateProduct/UpdateProduct';
import Cart from './Pages/Cart/Cart/Cart';

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sunglass/:id" element={<SingleSunglass />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashBoard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/makeadmin"
              element={
                <PrivateRoute>
                  <MakeAdmin />
                </PrivateRoute>
              }
            />
            <Route path="/dashboard/allorders" element={<AllOrders />} />
            <Route
              path="/dashboard/addproduct"
              element={
                <PrivateRoute>
                  <AddProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/updateproduct"
              element={
                <PrivateRoute>
                  <UpdateProduct />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
