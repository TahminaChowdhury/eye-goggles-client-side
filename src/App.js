
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Shared/Login/Login";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import NotFound from "./Pages/NotFound/NotFound"
import AuthProvider from "./ContextApi/AuthProvider";
import PrivateRoute from "./Pages/Shared/Login/PrivateRoute/PrivateRoute";
import SingleSunglass from "./Pages/Home/SingleSunglass/SingleSunglass";
import Signup from "./Pages/Shared/Signup/Signup";
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path="/signup">
            <Signup></Signup>
          </Route>

         <PrivateRoute path="/sunglass/:sunglassId">
            <SingleSunglass></SingleSunglass>
         </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>

        

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
