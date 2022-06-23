import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import LogOut from "./components/LogOut";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Products />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
