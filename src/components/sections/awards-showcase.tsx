import Image from "next/image";

const AwardPlaceholder = () => (
  <div className="h-[96px] w-[75px] rounded-lg bg-white/10" aria-hidden="true" />
);

const AwardsShowcase = () => {
  return (
    <section className="bg-[#2B2B2B] font-body text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-[50px]">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
          {/* Left Column: Anniversary Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/images/sub_atti10th-9.webp?"
              alt="10 Years Attipas Anniversary"
              width={350}
              height={175}
              className="object-contain"
            />
          </div>

          {/* Right Column: Awards & Media */}
          <div className="flex flex-col items-center md:items-start">
            {/* Awards Placeholders */}
            <div className="flex flex-wrap items-end justify-center gap-2 md:justify-start">
              {/* NOTE: Placeholders used as award medal assets were not provided. */}
              <AwardPlaceholder />
              <AwardPlaceholder />
              <AwardPlaceholder />
              <AwardPlaceholder />
              <AwardPlaceholder />
            </div>

            {/* As Seen On... */}
            <h3 className="mt-8 mb-6 text-center text-xl font-bold tracking-wider md:text-left">
              As Seen On...
            </h3>

            {/* Media Logos */}
            <div className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-4 md:justify-start">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/images/sharktank-12.webp?"
                alt="Shark Tank Logo"
                width={129}
                height={69}
                className="h-auto object-contain"
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/images/oscars-logo-statue-13.webp?"
                alt="The Oscars Logo"
                width={129}
                height={87}
                className="h-auto object-contain"
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/images/old-today-australia-logo-14.webp?"
                alt="Today show logo"
                width={100}
                height={70}
                className="h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsShowcase;