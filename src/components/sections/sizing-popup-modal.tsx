"use client";

import Image from 'next/image';
import { X } from 'lucide-react';
import type { FC } from 'react';

// A real implementation would get these props from a parent component's state
interface SizingPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizingPopupModal: FC<SizingPopupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  // Prevents modal from closing when clicking on the content
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-sm rounded-[16px] bg-gradient-to-br from-[#FFE0F5] to-[#FFCCF0] shadow-2xl md:max-w-[700px]"
        onClick={handleContentClick}
        aria-modal="true"
        role="dialog"
        aria-labelledby="sizing-modal-title"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 text-gray-500 transition-colors hover:text-gray-900"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col overflow-hidden rounded-[16px] md:flex-row">
          {/* Left: Image */}
          <div className="relative h-56 w-full md:h-auto md:w-[40%]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/images/3052eda4-b6ff-495c-ab4a-b333e7d62d5d-19.png?"
              alt="A guide on how to measure baby's feet"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Right: Form */}
          <div className="flex w-full flex-col justify-center p-6 text-center md:w-[60%] md:p-8 md:text-left">
            <h2 id="sizing-modal-title" className="text-2xl font-bold text-[#2C3E50]">
              Need Help with Sizing?
            </h2>
            <p className="mt-2 text-base text-[#3C4F5F]">
              Get your free guide on how to measure your baby&apos;s feet! 🤗👶
            </p>

            <form className="mt-4 flex flex-col gap-[10px]">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="w-full rounded-md border border-[#CCC] bg-white p-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF1B8D]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md border border-[#CCC] bg-white p-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF1B8D]"
              />
              <button
                type="submit"
                className="mt-1 w-full rounded-lg bg-[#FF1B8D] py-[15px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#E0187B]"
              >
                DOWNLOAD NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizingPopupModal;