import React, { useState } from "react";

import Hro from "../assets/HeroBanner.png";
import Popup from "./Popup";
import family from "../assets/icons/family.svg";
import save from "../assets/icons/save.svg";
import time from "../assets/icons/time.svg";
import translate from "../assets/icons/translate.svg";
import Map from "../assets/Map.png";
import Artist from "../assets/Artist.png";

import { FaCircleArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  const [pay, setPay] = useState(false);

  return (
    <>
      {pay && <Popup />}

      <div className="w-full h-full px-7 py-7 grid grid-cols-3 auto-rows-min gap-3">
        <div className="col-span-3 row-span-0 lg:col-span-2 lg:row-span-1">
          <img src={Hro} alt="Hero Banner" />
        </div>

        <div className="col-span-3 row-span-0 lg:col-span-1 lg:row-span-3 p-4 flex flex-col gap-6 border rounded-[10px] border-[#E4E7EC] text-[#475467] ">
          <h1 className="font-bold text-2xl lg:text-4xl text-[black]">
            Casa Bacardi on Tour Ft. KING | Bhubaneswar
          </h1>

          <div
            id="categories"
            className="flex flex-wrap gap-8 my-4 items-center"
          >
            <span className="flex gap-2 ">
              <img src={save} alt="icons" />
              <p>5 PM ONW</p>
            </span>
            <span className="flex gap-2  ">
              <img src={translate} alt="icons" />
              <p>3 Hours</p>
            </span>
            <span className="flex gap-2 ">
              <img src={time} alt="icons" />
              <p>Fri, 16 Jan 24</p>
            </span>
            <span className="flex gap-2 ">
              <img src={family} alt="icons" />
              <p>Family Friendly</p>
            </span>
            <span className="flex gap-2 items-center">
              <img src={save} alt="icons" />
              <p>Music</p>
            </span>
            <span className="flex gap-2 ">
              <img src={translate} alt="icons" />
              <p>Hindi</p>
            </span>
          </div>

          <p>
            #BHUBANESWAR are you ready for the BIGGEST PARTY IN TOWN?Bacardi
            Experiences brings #CasaBacardiOnTour back to Bhubaneswar, this
            January! If Maan Meri Jaan moves you, #ItsAMood! Experience{" "}
            <span className="font-bold">KING</span> perform Live for you at
            Dream City Resort on the 13th of January, 2024. Get your tickets
            NOW!
          </p>

          <button
            onClick={() => setPay(true)}
            className="bg-[#FE3838] w-full p-7 md:rounded-[50px] flex gap-5 items-center justify-between text-[#fff] fixed left-0 bottom-0 md:border-[32px] lg:static lg:border-none lg:rounded-xl lg:p-7"
          >
            <div id="left" className="flex flex-col items-start">
              <p
                id="up"
                className="text-xs text-[#FFA9A9] font-bold leading-3 tracking-[1px]"
              >
                STARTING FROM
              </p>
              <h1 id="down" className="text-2xl">
                ₹699 /-
              </h1>
            </div>
            <div id="right">
              <p className="flex gap-3 items-center font-medium">
                Get Tickets <FaCircleArrowRight size={32} />
              </p>
            </div>
          </button>

          <div
            id="cards"
            className="flex flex-wrap md:flex-row-reverse md:flex-nowrap lg:flex lg:flex-col gap-3"
          >
            {/* map-card*/}
            <div
              className="w-full p-7 flex flex-col justify-between gap-2 border rounded-[10px] border-[#E4E7EC] cursor-pointer"
              id="map-card"
            >
              <img src={Map} alt="" />
              <p className="flex justify-between">
                <span>Kalyan Mandap...</span>
                <span className="flex items-center gap-3 text-[#FE3838]">
                  Get Direction <FaCircleArrowRight />
                </span>
              </p>
            </div>

            {/* Artist Card */}
            <div className="max-w-md mx-auto w-full overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="">
                <img
                  src={Artist}
                  alt="Artist"
                  className="w-full h-50 object-cover"
                />
              </div>

              <div className="bg-[#101828] p-4 text-white">
                <p>
                  Rapper-performer-storyteller, KING continues a steep climb on
                  the Indian pop music scene with his unstoppable barrage...
                  <br />
                  <span className="underline">Read More</span>
                </p>

                <div className="mt-4 flex items-center">
                  <p className="mr-2">Follow King on</p>
                  <span className="text-2xl mr-2">
                    <FaInstagram />
                  </span>
                  <span className="text-2xl">
                    <FaFacebook />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-span-auto lg:col-span-2 lg:row-span-auto lg:flex lg:flex-col lg:gap-7 mb-48">
          <div id="details" className="my-2">
            <h1 className="font-bold text-2xl">Details</h1>
            <p className="text-[#475467] leading-6">
              <span className="font-bold">Artist Lineup:</span> <br />
              King + Supporting Acts
              <br />
              <span className="font-bold">Event produced by:</span> WMS
              Entertainment
              <br />
              <span className="font-bold">Presented by:</span> Bacardi
              Experiences
              <br />
              <span className="font-bold">Event Partner:</span> Embassy
              <br />
              Offline Ticketing Partner: Agnaye Ventures, Contact - +91 99377
              98098
              <br />
              <span className="font-bold">Table Bookings:</span> +91 98663 88866
              <br />
            </p>
          </div>

          <div id="instructions">
            <h1 className="font-bold text-2xl">Instructions</h1>
            <p className="list-inside text-[#475467]">
              <li className="list-inside">
                By accepting, holding or using a ticket, you acknowledge that
                you have read, understood, accepted and agreed to the full terms
                and conditions.
              </li>
              <li className="list-inside">
                The organizer reserves the right to alter the schedule of the
                event without prior intimation.
              </li>
              <li className="list-inside">
                The organizer, the venue and the ticketing company shall not be
                liable for any difficulties caused by an unauthorized copy or
                reproduction of this ticket and reserves the right to refuse
                entry to such ticket holders.
              </li>
              <li className="list-inside">
                No refund on a purchased ticket is possible, even in case of any
                rescheduling, unforeseen circumstances or force majeure
                conditions
              </li>
              <li className="list-inside">
                Duplicate tickets will not be issued for Lost or stolen tickets.
              </li>
              <li className="list-inside">Each ticket admits only 1 person.</li>
              <li className="list-inside">
                This is a wristband access festival. In case wristbands are
                taken off, replacement wristbands will not be issued. Wristband
                removed or tampered with will be rendered invalid and will not
                be replaced.
              </li>
              <li className="list-inside">
                Rights of admission are reserved, even for valid ticket holders.
              </li>
              <li className="list-inside">
                Please remember to carry a valid government issued photo ID
                Proof (Driver's License/ Aadhar Card/ Passport). You may not be
                permitted to enter in the absence of a valid ID Proof.
              </li>
              <li className="list-inside">
                Liquor will be served to guests of Legal Drinking Age (LDA) only
                and on display of valid age groups. LDA bands will be provided
                at the venue on proof of age
              </li>
              <li className="list-inside">
                If an underage individual is found consuming alcohol, the ward’s
                adult guardian will be liable for all resulting actions &
                consequences.
              </li>
            </p>
          </div>

          <div id="Policies">
            <h1 className="font-bold text-2xl">Policies</h1>
            <p className="list-inside text-[#475467]">
              <li className="list-inside">
                By accepting, holding or using a ticket, you acknowledge that
                you have read, understood, accepted and agreed to the full terms
                and conditions.
              </li>
              <li className="list-inside">
                The organizer reserves the right to alter the schedule of the
                event without prior intimation.
              </li>
              <li className="list-inside">
                The organizer, the venue and the ticketing company shall not be
                liable for any difficulties caused by an unauthorized copy or
                reproduction of this ticket and reserves the right to refuse
                entry to such ticket holders.
              </li>
              <li className="list-inside">
                No refund on a purchased ticket is possible, even in case of any
                rescheduling, unforeseen circumstances or force majeure
                conditions
              </li>
              <li className="list-inside">
                Duplicate tickets will not be issued for Lost or stolen tickets.
              </li>
              <li className="list-inside">Each ticket admits only 1 person.</li>
              <li className="list-inside">
                This is a wristband access festival. In case wristbands are
                taken off, replacement wristbands will not be issued. Wristband
                removed or tampered with will be rendered invalid and will not
                be replaced.
              </li>
              <li className="list-inside">
                Rights of admission are reserved, even for valid ticket holders.
              </li>
              <li className="list-inside">
                Please remember to carry a valid government issued photo ID
                Proof (Driver's License/ Aadhar Card/ Passport). You may not be
                permitted to enter in the absence of a valid ID Proof.
              </li>
              <li className="list-inside">
                Liquor will be served to guests of Legal Drinking Age (LDA) only
                and on display of valid age groups. LDA bands will be provided
                at the venue on proof of age
              </li>
              <li className="list-inside">
                If an underage individual is found consuming alcohol, the ward’s
                adult guardian will be liable for all resulting actions &
                consequences.
              </li>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
