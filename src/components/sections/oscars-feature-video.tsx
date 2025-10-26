import React from 'react';

const OscarsFeatureVideo = () => {
  return (
    <section className="bg-white py-[60px]">
      <div className="mx-auto max-w-[1400px] px-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="w-full text-left lg:w-2/5">
            <h4 className="text-[32px] font-bold leading-[1.2] text-[#333333]">
              As featured at the Oscars
            </h4>
            <p className="mt-4 text-base leading-[1.6] text-[#666666]">
              Attipas are the number one choice of shoes for babies, toddlers and preschoolers. As light as a sock but more supportive than a pre walker, Attipas will support your little one from their very first steps until 4 years of age. Based on seven years of research, Attipas are award-winning and have been endorsed by Australian podiatrists. Lightweight. Flexible. Convenient. Breathable. Safe. Attipas shoes are Walking Science.
            </p>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/mOHGs2zpBjg"
                title="Australia's #1 baby shoes made their way to Hollywood 🏆 Find out why!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OscarsFeatureVideo;