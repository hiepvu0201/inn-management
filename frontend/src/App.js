import logo from "./logo.svg";
import "./App.css";
// import Login from './feature/login/index'
// import Register  from './feature/register'
// import Forgotpassword from "./feature/forgotpassword";
import Home from './feature/homepage'
import Branches from "./../src/feature/admin/branches";
// import Customer from './feature/admin/customer'
import Revenue from "./feature/admin/revenue";
import Component_Block_Last from "./components/component_block_last";
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
import Notification_tag from "./components/notification_tag";
import Notification_client from "./feature/client/notification";
import Footer_client from './../src/components/footer_client'
import Room_client from './../src/feature/client/room'
import Room_tag from './../src/components/room_tag'
import Homepage_admin from './../src/feature/admin/homepage'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";  
import Reportissues_client from './feature/client/report-issues'
import Reportissues_tag from "./components/reportissue_tag";
import Detail_room from './feature/client/detail_room'
import Detailroom_tag from './components/detailroom_tag'
import Rules_client from './feature/client/rules'
import Invoices from './feature/admin/invoice'
import Profile from './feature/client/profile'
function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/branches">
          <Branches />
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
        <Route path="/">
          <Homepage_admin />
        </Route>
      </Switch> */}
      {/* <Room_client/> */}
      {/* <Switch>
        <Route path="/detailroom">
          <Detail_room/>
        </Route>
        <Route path="/room">
          <Room_client/>
        </Route>
      </Switch> */}
      {/* <Detail_room/> */}
      {/* <Detailroom_tag/> */}
      {/* <Rules_client/> */}
      {/* <Reportissues_client/> */}
      <Profile/>
    </div>
  );
}
export default App;
