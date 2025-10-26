"use client";

import { useState } from "react";
import Image from "next/image";

const RewardsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Rewards");

  const bubbleIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/svgs/comments-solid-6.svg?";
  const closeIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/svgs/cancel-7.svg?";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-5 left-5 w-[60px] h-[60px] bg-[#FF1B8D] rounded-full flex items-center justify-center shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
        }`}
        aria-label="Open rewards panel"
      >
        <Image
          src={bubbleIconUrl}
          alt="Rewards"
          width={28}
          height={28}
          className="filter brightness-0 invert"
        />
      </button>

      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-2xl z-50 transition-all duration-300 ease-out sm:bottom-5 sm:left-5 sm:w-auto sm:max-w-[320px] sm:rounded-xl rounded-t-xl
        ${
          isOpen
            ? "transform-none opacity-100"
            : "opacity-0 pointer-events-none translate-y-full sm:translate-y-4"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rewards-widget-title"
      >
        <div className="relative p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1"
            aria-label="Close rewards panel"
          >
            <Image
              src={closeIconUrl}
              alt="Close"
              width={12}
              height={12}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </button>

          <div className="pr-8">
            <h2 id="rewards-widget-title" className="font-bold text-lg text-text-primary">
              Hi there 👋
            </h2>
            <div className="flex items-baseline mt-1 space-x-2">
              <span className="font-semibold text-sm text-text-primary">Points</span>
              <p className="text-text-secondary text-sm">
                Welcome to Attipas Australia
              </p>
            </div>
          </div>
          
          <div className="mt-6 border-b border-gray-200">
            <div className="flex -mb-px">
              <button
                onClick={() => setActiveTab("Rewards")}
                className={`pb-2 px-1 mr-4 text-sm font-medium transition-colors duration-200 ${
                  activeTab === "Rewards"
                    ? "text-text-primary border-b-2 border-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Rewards
              </button>
              <button
                onClick={() => setActiveTab("Reviews")}
                className={`pb-2 px-1 text-sm font-medium transition-colors duration-200 ${
                  activeTab === "Reviews"
                    ? "text-text-primary border-b-2 border-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          {activeTab === 'Rewards' && (
            <div className="mt-8 text-center">
              <h3 className="text-xl font-medium text-text-primary">
                Be part of us!
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                With more ways to unlock exciting perks, this is your all access pass to exclusive rewards.
              </p>
              <button className="mt-6 w-full bg-[#5B8DBE] text-white py-3 rounded-[6px] text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors">
                Sign up
              </button>
              <p className="mt-5 text-xs text-text-secondary">
                Already have an account?{" "}
                <a href="#" className="font-semibold underline text-text-primary hover:text-opacity-80">
                  Sign In
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RewardsWidget;