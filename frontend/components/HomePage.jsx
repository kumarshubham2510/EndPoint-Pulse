import ShowAPI from "./ShowAPI";
import AddAPI from "./AddApi";
import Dashboard from "./DashBoard";
import Navbar from "./NavBar";

export default function HomePage() {
  return (
    <>
      <div className=" bg-white/30 backdrop-blur-lg rounded-lg p-6 shadow-lg flex">
        <h1 className="text-3xl font-bold my-7 mx-2 text-gray-800 ">
          EndPoint Pulse
        </h1>
        <Navbar />
      </div>
      <Dashboard />
    </>
  );
}
