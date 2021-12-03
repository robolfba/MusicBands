import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default App;
