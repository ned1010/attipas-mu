"use client";

import Image from 'next/image';
import { useCart } from '@/contexts/cart-context';
import { useCurrency } from '@/contexts/currency-context';

const products = [
  {
    id: 'mesh-green',
    name: 'First Walking Shoes - Breathable Mesh (Green)',
    imageSrc: '/images/breathable-mesh-shoes/mesh-green.jpg',
    badges: [
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/66ceb0f45891b.svg', alt: 'Bestseller' },
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/6864d6ff470ab.svg', alt: 'Restock Alert' }
    ],
    price: '44.00',
    salePrice: null,
  },
  {
    id: 'mesh-grey',
    name: 'First Walking Shoes - Breathable Mesh (Grey)',
    imageSrc: '/images/breathable-mesh-shoes/mesh-grey.jpg',
    badges: [
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/66ceb0f45891b.svg', alt: 'Bestseller' },
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/6864d6ff470ab.svg', alt: 'Restock Alert' }
    ],
    price: '44.00',
    salePrice: null,
  },
  {
    id: 'mesh-blue',
    name: 'First Walking Shoes - Breathable Mesh (Blue)',
    imageSrc: '/images/breathable-mesh-shoes/mesh-blue.jpg',
    badges: [
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/66ceb0f45891b.svg', alt: 'Bestseller' },
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/6864d6ff470ab.svg', alt: 'Restock Alert' }
    ],
    price: '44.00',
    salePrice: null,
  },
  {
    id: 'mesh-pink',
    name: 'First Walking Shoes - Breathable Mesh (Pink)',
    imageSrc: '/images/breathable-mesh-shoes/mesh-pink.jpg',
    badges: [
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/66ceb0f45891b.svg', alt: 'Bestseller' },
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/6864d6ff470ab.svg', alt: 'Restock Alert' }
    ],
    price: '44.00',
    salePrice: null,
  },
  {
    id: 'mesh-solid-grey',
    name: 'First Walking Shoes - Breathable Mesh (Solid Grey)',
    imageSrc: '/images/breathable-mesh-shoes/mesh-solid-grey.jpg',
    badges: [
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/66ceb0f45891b.svg', alt: 'Bestseller' },
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/686f209f97854.svg', alt: '20% Off' }
    ],
    price: '44.00',
    salePrice: '35.00',
  },
  {
    id: 'mesh-solid-pink',
    name: 'First Walking Shoes - Breathable Mesh (Solid Pink)',
    imageSrc: '/images/breathable-mesh-shoes/mesh-solid-pink.jpg',
    badges: [
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/66ceb0f45891b.svg', alt: 'Bestseller' },
      { url: 'https://d3azqz9xba9gwd.cloudfront.net/storage/labels/things4bubs/686f209f97854.svg', alt: '20% Off' }
    ],
    price: '44.00',
    salePrice: '35.00',
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
    const { addItem } = useCart();
    const { convertPrice, currencySymbol } = useCurrency();
    
    const PlaceholderImage = () => (
      <div className="aspect-square w-full bg-white" />
    );

    const handleAddToCart = () => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        salePrice: product.salePrice,
        imageSrc: product.imageSrc,
      });
    };

    const priceUSD = parseFloat(product.price);
    const salePriceUSD = product.salePrice ? parseFloat(product.salePrice) : null;
    const displayPrice = convertPrice(priceUSD);
    const displaySalePrice = salePriceUSD ? convertPrice(salePriceUSD) : null;
  
    return (
      <div className="flex flex-col h-full text-center">
        <div className="relative aspect-square w-full">
          <PlaceholderImage />
          <div className="absolute top-2 left-2 flex items-center gap-1">
            {product.badges.map((badge, index) => (
              <Image key={index} src={badge.url} alt={badge.alt} width={75} height={19} className="h-auto" />
            ))}
          </div>
        </div>
        <div className="flex-grow flex flex-col p-2 pt-4">
          <h3 className="font-body font-semibold text-base text-text-primary flex-grow">
            {product.name}
          </h3>
          <div className="mt-2 text-text-primary">
            {displaySalePrice ? (
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-muted-foreground line-through">{currencySymbol}{displayPrice}</span>
                <span className="font-bold text-lg">{currencySymbol}{displaySalePrice}</span>
                <span className="text-sm text-accent-blue-grey">Sale</span>
              </div>
            ) : (
              <span className="text-lg">{currencySymbol}{displayPrice}</span>
            )}
          </div>
          <div className="mt-auto pt-3">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-accent-blue-grey text-white uppercase text-sm font-ui py-3 px-4 rounded-md transition-colors hover:bg-accent-blue-grey-dark"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  

const BreathableMeshShoesGrid = () => {
  return (
    <section className="bg-background-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold uppercase text-[#333333] mb-10 tracking-wider">
          BREATHABLE MESH BABY SHOES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreathableMeshShoesGrid;