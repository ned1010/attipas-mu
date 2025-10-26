import Image from 'next/image';

const MediaFeaturesCollage = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/images/attipas_press_features_300x300-7.jpg?"
          alt="As seen in media collage featuring logos of Today show, my child magazine, Latte Life, bambini magazine, and others"
          width={1136}
          height={454}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default MediaFeaturesCollage;