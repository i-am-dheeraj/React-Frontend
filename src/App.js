
import "./App.css";
import Profile from "../src/components/pages/Profile/Profile";
import Login from "../src/components/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Blog from "./components/Blog";
import Signup from "./components/signup";
import Home from"./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route>
        <Route exact path="/" element={<Home/>} />
         <Route path="/home" element={<Home/>} />

          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/dashboard" element={<Dashboard/>}/>
          <Route path = "/profile" element={<Profile/>}/>
          
          <Route path = "/Blog" element = {<Blog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
