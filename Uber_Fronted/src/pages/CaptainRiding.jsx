import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)

  const finishRidePanelRef = useRef(null)

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 left-0 w-full flex items-center justify-between">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full top-5 right-5"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      
      <div className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative"
      onClick={()=>{
        setFinishRidePanel(true)
      }}>
      <h5
          className=" p-1 text-center w-[90%] absolute top-0"
          onClick={() => {}}
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        
        <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg ">
          Complete Ride
        </button>
        
      </div>
      <div
          ref={finishRidePanelRef}
          className="fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white px-3 py-6 pt-12"
        >
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
    </div>
  );
};

export default CaptainRiding;
