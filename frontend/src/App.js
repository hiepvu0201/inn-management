import logo from "./logo.svg";
import "./App.css";
// import Login from './feature/login/index'
// import Register  from './feature/register'
// import Forgotpassword from "./feature/forgotpassword";
// import Home from './feature/homepage'
import Brand from './../src/feature/admin/brand'
// import Customer from './feature/admin/customer'
import Revenue from './feature/admin/revenue'
import Component_Block_Last from './components/component_block_last'
import Role from './../src/feature/admin/role'
import Rules from './../src/feature/admin/rules'
import Reportedissues from './../src/feature/admin/reported-issues'
import Notification from './../src/feature/admin/notification'
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Forgotpassword/> */}
      {/* <Home/> */}
      {/* <Brand/>
       */}
       {/* <Role/> */}
       {/* <Rules/> */}
       
        {/* <Reportedissues/> */}
        <Notification/>
      {/* <Customer/>
       */}
       {/* <Revenue/> */}
    </div>
  );
}

export default App;
