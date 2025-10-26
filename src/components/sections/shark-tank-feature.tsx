import Image from "next/image";

const SharkTankFeature = () => {
  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/images/Shark_Tank_Things_4_Bubs_200x200-8.jpg?"
              alt="Attipas featured on Shark Tank Australia"
              width={570}
              height={380}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-[28px] font-bold text-[#333333] mb-5">
              As seen on Shark Tank Australia
            </h2>
            <p className="text-base text-[#666666] leading-[1.6]">
              Attipas baby shoes were featured on Shark Tank Australia, when mumpreneur Caroline Africh presented the Sharks with her distribution business Things 4 Bubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharkTankFeature;