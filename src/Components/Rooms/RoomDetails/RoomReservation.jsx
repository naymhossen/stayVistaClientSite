/* eslint-disable react/prop-types */
import { useState } from "react";
import Calender from "../../../Shared/Calender/Calender";
// import { formatDistance } from "date-fns";

const RoomReservation = ({ rooms }) => {
  const [value, setValue] = useState([
    {
      startDate: new Date(rooms?.from),
      endDate: new Date(rooms?.to),
      key: "selection",
    },
  ]);

  //  const totalDays = parseInt(
  //   formatDistance(new Date(rooms?.to), new Date(rooms?.from)).split(' ')[0]
  // )

  // const totalPrice = totalDays * rooms?.price
  // console.log(totalPrice);



  return (
    <>
      <div className="border p-8 rounded-xl overflow-hidden">
        <div className="mb-3">
          <h1 className="font-bold">
            ${rooms?.price}
            <span className="text-sm text-gray-500">/night</span>
          </h1>
        </div>
        <hr />
        <div className="mt-3 mb-3">
          <Calender value={value} />
        </div>
        <hr />
        <div className="mt-3 mb-3">
          <button className=" w-full font-bold text-white bg-red-500 p-2 rounded-xl">
            Reserve
          </button>
        </div>
        <hr />
        <div className="font-bold flex justify-between mt-3 text-xl">
          <h2>Total</h2>
          <h2>${rooms?.price}</h2>
        </div>
      </div>
    </>
  );
};

export default RoomReservation;
