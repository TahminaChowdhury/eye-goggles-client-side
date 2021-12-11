import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Shared/Login/Login";
import NotFound from "./Pages/NotFound/NotFound"
import AuthProvider from "./ContextApi/AuthProvider";
import PrivateRoute from "./Pages/Shared/Login/PrivateRoute/PrivateRoute";
import SingleSunglass from "./Pages/Home/SingleSunglass/SingleSunglass";
import Signup from "./Pages/Shared/Signup/Signup";
import DashBoard from "./Pages/Shared/Navigation/DashBoard/DashBoard";
import Explore from "./Pages/Shared/Navigation/Explore/Explore";
import MyOrders from "./Pages/Shared/Navigation/DashBoard/MyOrders/MyOrders";
import Payment from "./Pages/Shared/Navigation/DashBoard/Payment/Payment";
import Review from "./Pages/Shared/Navigation/DashBoard/Review/Review";
import PurchaseForm from "./Pages/Home/SingleSunglass/PurchaseForm/PurchaseForm";
import ContactUs from "./Pages/Home/ConatctUs/ContactUs";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          
          <Route path='/purchaseform'>
            <PurchaseForm></PurchaseForm>
          </Route>

          <Route path='/contactus'>
            <ContactUs></ContactUs>
          </Route>

          <PrivateRoute path='/dashboard'>
            <DashBoard></DashBoard>
          </PrivateRoute>

          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute path="/payment">
            <Payment></Payment>
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>


          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path="/signup">
            <Signup></Signup>
          </Route>

         <PrivateRoute path="/sunglass/:sunglassId">
            <SingleSunglass></SingleSunglass>
         </PrivateRoute>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
