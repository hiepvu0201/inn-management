import logo from "./logo.svg";
import "./App.css";
// import Login from './feature/login/index'
// import Register  from './feature/register'
// import Forgotpassword from "./feature/forgotpassword";
// import Home from './feature/homepage'
import Branches from './../src/feature/admin/branches'
// import Customer from './feature/admin/customer'
import Revenue from './feature/admin/revenue'
import Component_Block_Last from './components/component_block_last'
import Role from './../src/feature/admin/role'
import Rules from './../src/feature/admin/rules'
import Reportedissues from './../src/feature/admin/reported-issues'
import Notification from './../src/feature/admin/notification'
import Monthlyincome from './../src/feature/admin/monthlyincome'
import Monthlypayment from './../src/feature/admin/monthlypayment'
import Users from './../src/feature/admin/users'
import Facilities from './../src/feature/admin/facilities'
import Room from './../src/feature/admin/room'
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Forgotpassword/> */}
      {/* <Home/> */}
      {/* <Branches/> */}
       {/* <Role/> */}
       {/* <Rules/> */}
       <Facilities/>
       {/* <Facilities/> */}
        {/* <Reportedissues/> */}
        {/* <Notification/>/ */}
      {/* <Customer/>
       */}
       {/* <Revenue/> */}
       {/* <Monthlyincome/> */}
       {/* <Monthlypayment/> */}
       {/* <Users/> */}
    </div>
  );
}

export default App;
