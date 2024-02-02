import React from "react";

import { LuPlus, LuMinus } from "react-icons/lu";

import { useDispatch, useSelector } from "react-redux";
import { Gincrement, Gdecrement } from "../Slices/ticketSlice.js";

const GOrderCard = ({ title }) => {
  const dispatch = useDispatch();
  const tC = useSelector((state) => state.ticket.Gcount);

  const handleIncrement = () => {
    dispatch(Gincrement());
  };

  const handleDecrement = () => {
    if (tC > 0) {
      dispatch(Gdecrement());
    }
  };

  return (
    <div className="w-full p-5 flex flex-col gap-8 border-2 rounded-lg border[#E4E7EC]">
      <div id="up">
        <h1 className="text-xl font-bold text-[#393F4C]">{title}</h1>
        <p className="text-[#667085]">
          This ticket grants entry to one individual to the event.
        </p>
      </div>
      <div
        id="down"
        className="flex justify-between text-2xl  items-center border[#E4E7EC]"
      >
        <h1 className="font-bold text-[#4F5561]">₹{`${tC * 699}`}/-</h1>
        <div className="font-semibold flex gap-3 items-center">
          <span
            role="button"
            onClick={handleDecrement}
            className="p-1 bg-[#E4E7EC] rounded-lg cursor-pointer"
          >
            <LuMinus />
          </span>
          <span>{tC}</span>
          <span
            role="button"
            onClick={handleIncrement}
            className="p-1 bg-red-500 rounded-lg cursor-pointer"
          >
            <LuPlus color="white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GOrderCard;
