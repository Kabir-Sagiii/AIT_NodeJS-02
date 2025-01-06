import LoginForm from "./components/login/Login";
import SignupForm from "./components/signup/Signup";
import Home from "./components/home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Users from "./components/users/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path={"/signup"} element={<SignupForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
