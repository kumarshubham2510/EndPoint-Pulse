import ShowAPI from "./ShowAPI";
import AddAPI from "./AddApi";
import Dashboard from "./DashBoard";

export default function HomePage() {
  return (
    <>
      <div className=" bg-white/30 backdrop-blur-lg rounded-lg p-6 shadow-lg flex">
        <h1 className="text-3xl font-bold my-7 mx-2 text-gray-800 ">
          EndPoint Pulse
        </h1>
        {/* <div class="bg-gradient-to-r from-blue-100 to-blue-50 p-8">
          {" "}
          <div class="bg-white/30 backdrop-blur-lg rounded-lg p-6 shadow-lg">
            <h2 class="text-gray-800 font-bold text-2xl">Glassy Heading</h2>
            <p class="text-gray-700">Some text with a frosted glass effect.</p>
          </div>
        </div> */}
        <p className="text-gray-700 text-xl my-8  mx-2">Home</p>
        <p className="text-gray-700 text-xl my-8  mx-2">Login</p>
        <p className="text-gray-700 text-xl my-8  mx-2">About Us</p>
        <p className="text-gray-700 text-xl my-8 mx-2">Contact Us</p>
      </div>
      <Dashboard />
    </>
  );
}
