import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Login from "../components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
