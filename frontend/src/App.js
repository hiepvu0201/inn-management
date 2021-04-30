import logo from "./logo.svg";
import "./App.css";
// import Login from './feature/login/index'
// import Register  from './feature/register'
// import Forgotpassword from "./feature/forgotpassword";
// import Home from './feature/homepage'
// import Brand from './../src/feature/admin/brand'
// <<<<<<< HEAD
// import Customer from './feature/admin/customer'
import Revenue from './feature/admin/revenue'
import Component_Block_Last from './components/component_block_last'
// =======
// import Expenditure from './feature/admin/expenditure'
// import Electricity_Water from './../src/feature/admin/eletricity-water'
import Contract from './../src/feature/admin/contract'
import Room from './feature/admin/room'
// >>>>>>> IM-16-4
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Forgotpassword/> */}
      {/* <Home/> */}
      {/* <Brand/> */}
{/* <<<<<<< HEAD */}
      {/* <Customer/>
       */}
       <Revenue/>
=======
      {/* <Expenditure/> */}
      {/* <Room/> */}
      {/* <Electricity_Water/> */}
      <Contract/>
{/* >>>>>>> IM-16-4 */}
    </div>
  );
}

export default App;
