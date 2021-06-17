import "./App.css";
import React ,{useState} from "react";

import Home from "./feature/homepage";
import Branches from "./../src/feature/admin/branches";
import Role from "./../src/feature/admin/role";
import Rules from "./../src/feature/admin/rules";
import Reportedissues from "./../src/feature/admin/reported-issues";
import Notification from "./../src/feature/admin/notification";
import Monthlyincome from "./../src/feature/admin/monthlyincome";
import Monthlypayment from "./../src/feature/admin/monthlypayment";
import Users from "./../src/feature/admin/users";
import Facilities from "./../src/feature/admin/facilities";
import Room from "./../src/feature/admin/room";
import ElectricityWaters from "./../src/feature/admin/electricity-water";
import Contract from "./../src/feature/admin/contract";
import Notification_client from "./feature/client/notification";
import Room_client from "./../src/feature/client/room";
import Room_tag from "./../src/components/room_tag";
import Homepage_admin from "./../src/feature/admin/homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link,
} from "react-router-dom";
import Reportissues_client from "./feature/client/report-issues";
import Detail_room from "./feature/client/detail_room";
import Rules_client from "./feature/client/rules";
import Invoices from "./feature/admin/invoice";
import Profile from "./feature/client/profile";
import Login from "./feature/login";
import Cookies from "js-cookie";
import { PrivateRoute, AuthButton } from "./fakeAuth";
import Register from './feature/register'
import { Spin } from "antd";
import Info from './feature/admin/info'
import Password from './feature/admin/password'
import PasswordUs from './feature/client/passworduser'
import Invoiceone from './feature/client/invoiceone'
function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
  const Userlayout =()=>{
     return (
       <Switch>
         <Route path="/detailroom">
           <Detail_room />
         </Route>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/pro">
           <Profile />
         </Route>
         <Route path="/reportus">
           <Reportissues_client />
         </Route>
         <Route path="/noti">
           <Notification_client />
         </Route>
         <Route path="/ruleus">
           <Rules_client />
         </Route>
         <Route exact path="/room">
           <Room_client />
         </Route>
         <Route path="/changepass">
           <PasswordUs />
         </Route>
         <Route path="/invoiceus">
           <Invoiceone />
         </Route>
       </Switch>
     );
  }
  const Adminlayout = () => {
     return (
       <Switch>
         <Route path="/branches">
           <Branches />
         </Route>
         <Route path="/info">
           <Info />
         </Route>
         <Route path="/password">
           <Password />
         </Route>
         <Route path="/rooms">
           <Room />
         </Route>
         <Route path="/facilities">
           <Facilities />
         </Route>
         <Route path="/electricity-water">
           <ElectricityWaters />
         </Route>
         <Route path="/monthlyincome">
           <Monthlyincome />
         </Route>
         <Route path="/monthlypayment">
           <Monthlypayment />
         </Route>
         <Route path="/contract">
           <Contract />
         </Route>
         <Route path="/user">
           <Users />
         </Route>
         <Route path="/role">
           <Role />
         </Route>
         <Route path="/rule">
           <Rules />
         </Route>
         <Route path="/notification">
           <Notification />
         </Route>
         <Route path="/reported-issue">
           <Reportedissues />
         </Route>
         <Route path="/invoices">
           <Invoices />
         </Route>
         <Route exact path="/">
           <Homepage_admin />
         </Route>
       </Switch>
     );
       
  }
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/register"
          name="Register Page"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/login"
          name="Login Page"
          render={(props) => <Login {...props} />}
        />
        {Cookies.get("Bearer") !== undefined ? (
          <Route
            path="/"
            name="HomeUser"
            render={(props) => <Userlayout {...props} />}
          />
        ) : (
          <PrivateRoute path="/" name="HomeUser" component={Userlayout} />
        )}
      </Switch>

      {/* </Switch>   */}
      {/* <Room_client/> */}

      {/* <Detail_room/> */}
      {/* <Detailroom_tag/> */}
      {/* <Rules_client/> */}
      {/* <Reportissues_client/> */}
      {/* <Profile/> */}
      {/* <Login /> */}
      {/* <Rest/> */}
    </div>
  );
}
export default App;
