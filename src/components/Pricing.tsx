"use client";
import PrimaryButton from "@/common/PrimaryButton";
import { isAbsolute } from "path";
import { useState } from "react";
import { BsCurrencyDollar, BsCircle } from "react-icons/bs";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";

const RENDERDATA = [
  {
    tier: "Basic",
    discount: 20,
    price: 19,
    features: [
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: false,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: false,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: false,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: false,
      },
    ],
  },
  {
    tier: "Pro",
    discount: 20,
    price: 19,
    features: [
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
    ],
  },
  {
    tier: "Enterprise",
    discount: 20,
    price: 19,
    features: [
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
      {
        content: "Access all interview preparation resources.",
        isAvailable: true,
      },
    ],
  },
];
interface IDetails {
  tier: string;
  discount: number;
  price: number;
  features: [
    {
      content: string;
      isAvailable: boolean;
    },
  ];
}
export default function Pricing() {
  const [details, setDetails] = useState<IDetails>(RENDERDATA[0]);
  return (
    <section className="w-full my-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Simple ,Transparent Pricing</h1>
        <p className="my-4 text-xl">No contracts , No surprise Fees</p>
      </div>
      <div className="flex gap-12 justify-center my-16">
        <div className="border p-8 w-1/3">
          <h1 className="text-4xl font-bold border-b-2">
            Unlock Perks with {details?.tier}
          </h1>
          {details?.features?.map((feature, idx) => (
            <p key={idx} className="my-8 flex justify-between text-xl">
              {feature.content}{" "}
              {feature.isAvailable ? (
                <FiCheckCircle className="text-green-400" />
              ) : (
                <FiXCircle className="text-red-600" />
              )}
            </p>
          ))}
        </div>
        <div className="w-1/3 ">
          {RENDERDATA.map((price, index) => (
            <div
              key={index}
              className={`border flex p-6 ${
                price?.tier === details?.tier && "bg-[#007BFF] text-white"
              } rounded-lg justify-between my-4 hover:bg-[#B2D8FF] duration-300 hover:text-white cursor-pointer`}
              onClick={() => setDetails(price)}
            >
              <div className="flex gap-4 items-center">
                {price === details ? (
                  <FaCircleCheck className="text-3xl" />
                ) : (
                  <BsCircle className="text-3xl" />
                )}
                <div>
                  <h1 className="text-2xl">{price?.tier}</h1>
                  {price?.discount && <p>Save {price?.discount} %</p>}
                </div>
              </div>
              <div className="flex items-center">
                <BsCurrencyDollar className="text-3xl font-bold" />
                <h3 className="text-3xl font-bold">{price?.price}</h3>
                <span className="mx-2">/month</span>
              </div>
            </div>
          ))}
          <div className="border-t-2 flex justify-end">
            <PrimaryButton
              text="Choose Plan"
              className="my-4 w-1/3"
              handleFunction={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
