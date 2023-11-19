/* eslint-disable react/prop-types */
import Calender from "../../../Shared/Calender/Calender";

const RoomReservation = ({ rooms }) => {
  const { price } = rooms || {};

  return (
    <>
      <div className="border p-8 rounded-xl overflow-hidden">
        <div className="mb-3">
            <h1 className="font-bold">${price}<span className="text-sm text-gray-500">/night</span></h1>
        </div>
        <hr />
        <div className="mt-3 mb-3">
          <Calender />
        </div>
        <hr />
        <div className="mt-3 mb-3">
            <button className=" w-full font-bold text-white bg-red-500 p-2 rounded-xl">Reserve</button>
        </div>
        <hr />
        <div className="font-bold flex justify-between mt-3 text-xl">
            <h2>Total</h2>
            <h2>${price}</h2>
        </div>
      </div>
    </>
  );
};

export default RoomReservation;
