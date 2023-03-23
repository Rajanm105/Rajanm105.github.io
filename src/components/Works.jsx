import React, { useState } from "react";
import code from "../assets/code2.png";
import Modal from "./Modal";

const Works = () => {
  const [showModal1, setshowModal1] = useState(false);
  const [showModal2, setshowModal2] = useState(false);
  const [showModal3, setshowModal3] = useState(false);
  const [showModal4, setshowModal4] = useState(false);
  const [showModal5, setshowModal5] = useState(false);
  const [showModal6, setshowModal6] = useState(false);

  return (
    <div id="work-card" name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                TUTO Android Application
              </span>
              <p className="text-center">
                A Fee-Financing app built with Ionic,Flutter,AngularJS,NodeJS,MySQL
              </p>
              <div className="pt-8 text-center">
                <a href="https://play.google.com/store/apps/details?id=com.isfc.tuto">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" 
                  // type="button"
                  // onClick={() => setshowModal1(true)} 
                  >
                    Demo
                  </button>
                  {showModal1 ? (
                    <>
                      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                              <h3 className="text-3xl font=semibold">
                                General Info
                              </h3>
                              <button
                                className="bg-transparent border-0 text-black float-right"
                                onClick={() => setshowModal1(false)}
                              >
                                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                  x
                                </span>
                              </button>
                            </div>
                            <div className="relative p-6 flex-auto">
                              <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                <label className="block text-black text-sm font-bold mb-1">
                                  First Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                <label className="block text-black text-sm font-bold mb-1">
                                  Last Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                <label className="block text-black text-sm font-bold mb-1">
                                  Address
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                <label className="block text-black text-sm font-bold mb-1">
                                  City
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                              </form>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={() => setshowModal1(false)}
                              >
                                Close
                              </button>
                              <button
                                className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={() => setshowModal1(false)}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Water Monitoring System 
              </span>
              <p className="text-center">
                A android app based on Water Monitoring System built with Flutter and NodeJS.
              </p>
              <div className="pt-8 text-center">
                <a href="https://play.google.com/store/apps/details?id=com.mayursapplication.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  
                  >
                    Demo
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Store Locator Web App
              </span>
              <p className="text-center">
                A web application used for locating stores built with React,NodeJS and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="https://store-locator-webapp.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Rajanm105/Store_locator_webapp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
            {/* Hover Effects */}
            {/* <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="#work-card">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  type="button"
                  onClick={() => setshowModal1(true)} 
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div> */}
          {/* </div> */}
          {/* <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
            {/* Hover Effects */}
            {/* <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="#work-card">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  type="button"
                  onClick={() => setshowModal1(true)} 
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div> */}
          {/* </div> */}
          {/* <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
            {/* Hover Effects */}
            {/* <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="#work-card">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  type="button"
                  onClick={() => setshowModal1(true)} 
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default Works;
