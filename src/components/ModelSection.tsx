import Image from 'next/image';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://djunoemhhucuiipi.public.blob.vercel-storage.com';

//Images for model selections
const models = [
    {
        name: 'Endangered',
        href: '/models/endangered',
        imageSrc: `${BASE_URL}/baby-shoe/models/endangered-animal/Fox_3.webp`,
    },
    {
        name: 'Stripe',
        href: '/models/stripe',
        imageSrc: `${BASE_URL}/baby-shoe/models/stripe/A25ST-Stripe-Brick-2.webp`,
    },
    {
        name: 'Zootopia',
        href: '/models/zootopia',
        imageSrc: `${BASE_URL}/baby-shoe/models/zootopia/Gray-5.webp`,
    },
    {
        name: 'Butterfly',
        href: '/models/butterfly',
        imageSrc: `${BASE_URL}/baby-shoe/models/butterfly/A25BU-Butterfly-30.webp`,
    },
    {
        name: 'Ethnic',
        href: '/models/ethnic',
        imageSrc: `${BASE_URL}/baby-shoe/models/ethnic/Ethnic-(1).webp`,
    },
];




const ModelSection = () => {
    return (
        <section id="new-models" className=" py-20  ">
            <div className="max-w-[1240px] mx-auto px-5">

                <h2 className="text-center text-2xl font-bold uppercase text-dark-charcoal-alt mb-10">
                    Attipas New Models
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {models.map((model) => (
                        <article key={model.name}>
                            <a href={model.href} className="group relative block overflow-hidden">
                                <Image
                                    src={model.imageSrc}
                                    alt={model.name}
                                    width={257}
                                    height={354}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="absolute inset-0"></span>
                                </div>
                            </a>
                            <div className="bg-[#d9a779]/30 py-[15px] px-5 text-center">
                                <h3 className="font-display text-lg font-bold text-text-primary">
                                    <a href={model.href} className="hover:text-link-hover transition-colors">
                                        {model.name}
                                    </a>
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModelSection;