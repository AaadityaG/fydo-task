import React from "react";
import { useSelector } from "react-redux";

import { FaCircleArrowRight } from "react-icons/fa6";
const OrderSummary = () => {
  const GC = useSelector((state) => state.ticket.Gcount);
  const VC = useSelector((state) => state.ticket.Vcount);

  return (
    <>
      <div className="w-full mt-6">
        <h1 className="text-xl font-bold text-[#393F4C]">Order Sumary</h1>

        <div className="my-3 flex flex-col gap-2">
          <div className="flex justify-between text-[#475467] mt-3">
            <p>{GC}x General Admission Ticket</p>
            <p>₹{`${GC * 699}`}.00</p>
          </div>
          <div className="flex justify-between text-[#475467]">
            <p>{`${VC}`}x VIP Admission</p>
            <p>₹{`${VC * 699}`}.00</p>
          </div>
        </div>

        <div className="my-3 flex flex-col gap-2">
          <div className="flex justify-between text-[#475467] mt-3">
            <p>Sub Total</p>
            <p>₹{`${GC * 699 + VC * 699}`}.00</p>
          </div>
          <div className="flex justify-between text-[#475467]">
            <p>Taxes</p>
            <p>₹179.80</p>
          </div>
          <div className="flex justify-between text-[#039855]">
            <p>Discount</p>
            <p>- ₹179.80</p>
          </div>

          <h1 className="text-xl font-bold text-[#393F4C] flex justify-between my-3">
            <span>Total</span> <span>₹{`${GC * 699 + VC * 699}`}.00</span>
          </h1>
        </div>

        <button className="w-full bg-red-500 p-3 rounded-lg text-[white] text-center">
          Proceed to Checkout{" "}
          <FaCircleArrowRight size={"24px"} className="inline" />
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
