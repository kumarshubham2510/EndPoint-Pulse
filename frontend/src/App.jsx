import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Login from "../components/Login";

function App() {
  return (
    <>
      <main className="h-screen w-screen bg-gradient-to-r from-blue-100 to-blue-50 p-8">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>


      </main>
    </>
  );
}

export default App;
