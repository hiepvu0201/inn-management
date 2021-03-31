import logo from "./logo.svg";
import "./App.css";
// import Login from './feature/login/index'
// import Register  from './feature/register'
// import Forgotpassword from "./feature/forgotpassword";
import Home from './feature/homepage'
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
      <Forgotpassword/>
      <Home/>
    </div>
  );
}

export default App;
