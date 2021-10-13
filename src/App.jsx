import { useState } from "react";
import "./App.css";
import VerticalBar from "./VerticalBar";

function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <div className="w-screen h-screen flex">
      <div
        className={`${
          isOpen1 ? "w-full" : "hidden"
        } md:w-1/4 border-r md:flex md:flex-col h-full`}
      >
        <div className="w-full h-1/6 flex">
          <span
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
            className="fixed top-2 right-2 cursor-pointer md:hidden bg-white w-10 h-10 shadow-md flex justify-center items-center text-xl font-light"
          >
            x
          </span>
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              className="w-12 h-12 mr-10"
              src="/fourDots.jpeg"
              alt="dots.jpeg"
            />
          </div>
          <div className="w-1/2 h-full"></div>
        </div>
        <div className="w-full h-2/3">
          <div className="w-full h-16 flex pl-16 items-center gap-4 border-l-8 border-white hover:border-black cursor-pointer">
            <img className="w-6 h-6" src="home.png" alt="home.png" />
            <text className="font-bold">Home</text>
          </div>
          <div className="w-full h-16 flex pl-16 items-center gap-4 border-l-8 border-white hover:border-black cursor-pointer">
            <img className="w-6 h-6" src="cup.png" alt="home.png" />
            <text className="font-bold">Projects</text>
          </div>
          <div className="w-full h-16 flex pl-16 items-center gap-4 border-l-8 border-white hover:border-black cursor-pointer">
            <img className="w-6 h-6" src="bank.png" alt="home.png" />
            <text className="font-bold">Billings</text>
          </div>
          <div className="w-full h-16 flex pl-16 items-center gap-4 border-l-8 border-white hover:border-black cursor-pointer">
            <img className="w-6 h-6" src="person.png" alt="home.png" />
            <text className="font-bold">Team Members</text>
          </div>
          <div className="w-full h-16 flex pl-16 items-center gap-4 border-l-8 border-white hover:border-black cursor-pointer">
            <img className="w-6 h-6" src="statsbars.png" alt="home.png" />
            <text className="font-bold">Stats</text>
          </div>
          <div className="w-full h-16 flex pl-16 items-center gap-4 border-l-8 border-white hover:border-black cursor-pointer">
            <img className="w-6 h-6" src="settings.png" alt="home.png" />
            <text className="font-bold">Settings</text>
          </div>
        </div>
        <div className="w-full h-1/6 flex pl-20 gap-4 items-center">
          <div className="w-20 h-20 border-4 p-2 rounded-xl">
            <img
              className="rounded-xl"
              src="https://pbs.twimg.com/profile_images/1323342583834304512/TrZZvSnI.jpg"
              alt="person.png"
            />
          </div>
          <text className="font-bold text-xl">David Milan</text>
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 h-full ${
          isOpen1 || isOpen2 ? "hidden" : ""
        }`}
      >
        <div className="w-full h-1/6 p-10 lg:pr-48">
          <span className="fixed top-2 left-2 cursor-pointer block md:hidden">
            <img
              onClick={() => {
                setIsOpen1(!isOpen1);
              }}
              className="w-10 h-10 p-1 bg-white hover:bg-gray-100 shadow-md"
              src="/ham.png"
              alt="ham.png"
            />
          </span>
          <input
            placeholder="Search for stats"
            className="p-3 border-4 rounded-xl w-full outline-none font-light"
            type="text"
          />
        </div>
        <div className="w-full h-1/3 flex flex-col">
          <div className="w-full px-10 flex justify-between">
            <div className="flex flex-col">
              <text className="font-bold text-4xl">Hello David</text>
              <text className="text-gray-300 font-semibold">Welcome back!</text>
            </div>
            <div className="border-2 text-gray-300 text-sm rounded-xl w-28 h-10 flex justify-between p-2 items-center">
              Filters
              <img
                className="w-6 h-6 cursor-pointer"
                src="filter.png"
                alt="filter.png"
              />
            </div>
          </div>
          <div className="p-2 md:px-10 md:py-4 flex-1">
            <div className="w-full h-full bg-yellow-50 rounded-3xl flex">
              <div className="h-full w-1/3 flex flex-col items-center justify-evenly">
                <img
                  className="w-10 h-10 p-2 bg-gray-200 rounded-full"
                  src="eye.png"
                  alt="eye.png"
                />
                <text className="text-gray-400 text-sm font-semibold">
                  Views
                </text>
                <text className="text-5xl font-bold">500</text>
                <text className="text-gray-400 text-sm font-semibold">
                  Per Day
                </text>
              </div>
              <div className="h-full w-1/3 flex flex-col items-center justify-evenly">
                <img
                  className="w-10 h-10 p-2 bg-gray-200 rounded-full"
                  src="compass.png"
                  alt="compass.png"
                />
                <text className="text-gray-400 text-sm font-semibold">
                  Visits
                </text>
                <text className="text-5xl font-bold">2000</text>
                <text className="text-gray-400 text-sm font-semibold">
                  Per minute
                </text>
              </div>
              <div className="h-full w-1/3 flex flex-col items-center justify-evenly">
                <img
                  className="w-10 h-10 p-2 bg-gray-200 rounded-full"
                  src="shop.png"
                  alt="shop.png"
                />
                <text className="text-gray-400 text-sm font-semibold">
                  Orders
                </text>
                <text className="text-5xl font-bold">5100</text>
                <text className="text-gray-400 text-sm font-semibold">
                  Per Day
                </text>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 pb-10">
          <span className="fixed bottom-2 right-2 cursor-pointer block md:hidden">
            <img
              onClick={() => {
                setIsOpen2(!isOpen2);
              }}
              className="w-10 h-10 p-1 bg-white hover:bg-gray-100 shadow-md"
              src="/ham.png"
              alt="ham.png"
            />
          </span>
          <div className="w-full h-1/2 p-2 md:px-10 gap-4 flex">
            <div className="w-1/2 h-full flex rounded-3xl bg-red-100">
              <div className="w-1/2 h-full flex flex-col pl-4 justify-evenly">
                <text className="text-2xl font-semibold">Sales</text>
                <text className="text-gray-400 text-sm font-semibold">
                  Total sales today
                </text>
                <text className="text-4xl font-bold">$500</text>
              </div>
              <div className="w-1/2 h-full flex justify-center items-center p-3">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="55, 100"
                  />
                  <text fontSize="10" x="8" y="21">
                    55%
                  </text>
                </svg>
              </div>
            </div>
            <div className="w-1/2 h-full flex rounded-3xl bg-green-100">
              <div className="w-1/2 h-full flex flex-col pl-4 justify-evenly">
                <text className="text-2xl font-semibold">Profit</text>
                <text className="text-gray-400 text-sm font-semibold">
                  Per day ration
                </text>
                <text className="text-4xl font-bold">$150</text>
              </div>
              <div className="w-1/2 h-full flex justify-center items-center p-3">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="30, 100"
                  />
                  <text fontSize="10" x="8" y="21">
                    30%
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 p-2 md:px-10 gap-4 flex">
            <div className="w-1/2 h-full flex rounded-3xl bg-blue-100">
              <div className="w-1/2 h-full flex flex-col pl-4 justify-evenly">
                <text className="text-2xl font-semibold">Orders</text>
                <text className="text-gray-400 text-sm font-semibold">
                  Total orders today
                </text>
                <text className="text-4xl font-bold">1000</text>
              </div>
              <div className="w-1/2 h-full flex justify-center items-center p-3">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="80, 100"
                  />
                  <text fontSize="10" x="8" y="21">
                    80%
                  </text>
                </svg>
              </div>
            </div>
            <div className="w-1/2 h-full flex rounded-3xl bg-purple-100">
              <div className="w-1/2 h-full flex flex-col pl-4 justify-evenly">
                <text className="text-2xl font-semibold">Visits</text>
                <text className="text-gray-400 text-sm font-semibold">
                  Total visits today
                </text>
                <text className="text-4xl font-bold">$400</text>
              </div>
              <div className="w-1/2 h-full flex justify-center items-center p-3">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="70, 100"
                  />
                  <text fontSize="10" x="8" y="21">
                    70%
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen2 ? "w-full" : "hidden"
        } md:w-1/4 border-r md:flex md:flex-col h-full p-8 md:py-8 md:pr-8 md:pl-0`}
      >
        <span
          onClick={() => {
            setIsOpen2(!isOpen2);
          }}
          className="fixed top-2 right-2 cursor-pointer shadow-md md:hidden bg-white w-10 h-10 flex justify-center items-center text-xl font-light"
        >
          x
        </span>
        <div className="w-full h-full bg-black rounded-3xl">
          <div className="w-full h-3/5 flex flex-col gap-10">
            <text className="text-2xl flex justify-center items-center p-4 font-semibold text-white">
              Sales Revenue
            </text>
            <div className="flex justify-center gap-8">
              <div className="bg-white w-10 h-10 p-3 rounded-full">
                <img src="shop.png" alt="" />
              </div>
              <div className="flex flex-col">
                <text className="text-white font-semibold text-xl">230k</text>
                <text className="text-sm text-gray-500 font-semibold">
                  Sales
                </text>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <div className="bg-white w-10 h-10 p-3 rounded-full">
                <img src="shop.png" alt="" />
              </div>
              <div className="flex flex-col">
                <text className="text-white font-semibold text-xl">8.549k</text>
                <text className="text-sm text-gray-500 font-semibold">
                  Customers
                </text>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <div className="bg-white w-10 h-10 p-3 rounded-full">
                <img src="shop.png" alt="" />
              </div>
              <div className="flex flex-col">
                <text className="text-white font-semibold text-xl">1.423k</text>
                <text className="text-sm text-gray-500 font-semibold">
                  Products
                </text>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <div className="bg-white w-10 h-10 p-3 rounded-full">
                <img src="shop.png" alt="" />
              </div>
              <div className="flex flex-col">
                <text className="text-white font-semibold text-xl">$9745</text>
                <text className="text-sm text-gray-500 font-semibold">
                  Revenue
                </text>
              </div>
            </div>
          </div>
          <div className="w-full h-2/5 p-2">
            <text className="text-2xl flex pb-8 justify-center items-center font-semibold text-white">
              Statistics
            </text>
            <VerticalBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
