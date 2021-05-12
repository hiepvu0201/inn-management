
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
import Info from "./../src/feature/client/information";
// import Notification_tag from "./../src/components/notification_tag";
import Homepage_admin from "./feature/admin/facilities copy";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Room_client from './../src/feature/client/room'
import Room_tag from './../src/components/room_tag'
function App() {
  return (
    <div className="App">
      <Room_client/>
      {/* <Room_tag/> */}
      {/* <Homepage_admin/> */}
    </div>
  );
}

export default App;
