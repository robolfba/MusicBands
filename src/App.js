import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/home" exact element={<PrivateRoute />}>
        <Route path="/home" exact element={<Home />} />
      </Route>
      <Route path="/register" exact element={<Register />} />
      <Route path="/" exact element={<Login />} />
    </Routes>
  );
}

export default App;
