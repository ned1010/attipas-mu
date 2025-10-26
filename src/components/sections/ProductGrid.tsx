"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Eye } from "lucide-react";
import { ProductCard, Product } from "../ProductCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://djunoemhhucuiipi.public.blob.vercel-storage.com';
// Multiple images for hover scroll effect
const PRODUCT_IMAGES = [
  `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
  `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
  `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`,
];

// Transform badge format to match ProductCard interface
const transformBadges = (badges: string[]) => {
  return badges.map(badge => {
    if (badge === "BESTSELLER") return "bestseller";
    if (badge.includes("20%") || badge.includes("OFF")) return "20-off";
    if (badge === "SHOE-SOCKS") return "shoe-socks";
    return "bestseller"; // fallback
  }) as ("bestseller" | "20-off" | "shoe-socks")[];
};

const ALL_PRODUCTS: (Product & { category: string; onSale?: boolean; comingSoon?: boolean })[] = [
  {
    id: 1,
    name: "First Walking Shoes - Sun Yellow",
    slug: "aqua-shoes-sun-yellow",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "SHOE-SOCKS"]),
    category: "Summer"
  },
  {
    id: 2,
    name: "First Walking Shoes - Breathable Bamboo (Sun Yellow)",
    slug: "aqua-shoes-sun-yellow",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER"]),
    category: "Summer"
  },
  {
    id: 3,
    name: "First Walking Shoes - Koala Grey",
    slug: "attipas-endangered-koala-gray",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER"]),
    category: "Animal"
  },
  {
    id: 4,
    name: "First Walking Shoes - Cat Pink",
    slug: "breathable-bamboo-cat-pink",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Animal",
    onSale: true
  },
  {
    id: 5,
    name: "First Walking Shoes - Butterfly Purple",
    slug: "breathable-bamboo-butterfly-purple",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER"]),
    category: "Animal",
    onSale: true
  },
  {
    id: 6,
    name: "First Walking Shoes - Breathable Mesh (Green)",
    slug: "breathable-bamboo",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 44.00,
    salePrice: 44.00,
    badges: transformBadges(["BESTSELLER",]),
    category: "Mesh",
    onSale: false
  },
  {
    id: 7,
    name: "First Walking Shoes - Breathable Mesh (Grey)",
    slug: "breathable-bamboo",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 44.00,
    salePrice: 44.00,
    badges: transformBadges(["BESTSELLER"]),
    category: "Mesh",
    onSale: false
  },
  {
    id: 8,
    name: "First Walking Shoes - Breathable Mesh (Blue)",
    slug: "breathable-bamboo",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 44.00,
    salePrice: 44.00,
    badges: transformBadges(["BESTSELLER"]),
    category: "Mesh",
    onSale: false
  },
  {
    id: 9,
    name: "First Walking Shoes - Breathable Mesh (Pink)",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 44.00,
    salePrice: 44.00,
    badges: transformBadges(["BESTSELLER"]),
    category: "Mesh",
    onSale: false
  },
  {
    id: 10,
    name: "First Walking Shoes - Breathable Mesh Solid Grey",
    slug: "breathable-bamboo",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 44.00,
    salePrice: 35.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Mesh",
    onSale: true
  },
  {
    id: 11,
    name: "First Walking Shoes - Heart Pink",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Pattern",
    onSale: true
  },
  {
    id: 12,
    name: "Attipas Bong Bong Pink",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Pattern",
    onSale: true
  },
  {
    id: 13,
    name: "First Walking Shoes - Palette Berry",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Color Block",
    onSale: true
  },
  {
    id: 14,
    name: "Attipas Zootopia Bear Beige",
    slug: "see-through-bear-beige",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["SHOE-SOCKS"]),
    category: "Animal",
    onSale: true,
    comingSoon: true
  },
  {
    id: 15,
    name: "First Walking Shoes - Palette White Chocolate",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Color Block",
    onSale: true
  },
  {
    id: 16,
    name: "First Walking Shoes - Star Charcoal",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Pattern",
    onSale: true
  },
  {
    id: 17,
    name: "Attipas Flower Gray",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Pattern",
    onSale: true
  },
  {
    id: 18,
    name: "Attipas Zootopia Penguin Navy",
    slug: "zootopia-penguin-navy",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["SHOE-SOCKS"]),
    category: "Animal",
    onSale: true,
    comingSoon: true
  },
  {
    id: 19,
    name: "First Walking Shoes - Breathable Mesh Solid Pink",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 44.00,
    salePrice: 35.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Mesh",
    onSale: true
  },
  {
    id: 20,
    name: "First Walking Shoes - Rainbow Pink",
    slug: "pop-peach",
    imageSrc: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`,
    images: PRODUCT_IMAGES,
    originalPrice: 31.00,
    salePrice: 25.00,
    badges: transformBadges(["BESTSELLER", "20% OFF"]),
    category: "Pattern",
    onSale: true
  }
];

const CATEGORIES = ["All", "Summer", "Mesh", "Animal", "Pattern", "Color Block"];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Selling", value: "bestselling" },
  { label: "Newest", value: "newest" }
];

interface ShopProductsGridProps {
  collectionType?: string;
}

export default function ShopProductsGrid({ collectionType = "All" }: ShopProductsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});


  // Auto-scroll through images on hover
  useEffect(() => {
    if (hoveredProduct === null) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const product = ALL_PRODUCTS.find(p => p.id === hoveredProduct);
        if (!product) return prev;
        return {
          ...prev,
          [hoveredProduct]: ((prev[hoveredProduct] || 0) + 1) % product.images.length
        };
      });
    }, 800); // Change image every 800ms

    return () => clearInterval(interval);
  }, [hoveredProduct]);

  const handleMouseEnter = (productId: number) => {
    setHoveredProduct(productId);
    setCurrentImageIndex(prev => ({ ...prev, [productId]: 0 }));
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  // Filter products
  let filteredProducts = ALL_PRODUCTS.filter(product => {
    // Filter by collection type first (from URL slug)
    if (collectionType !== "All") {
      // Map collection types to product categories
      const categoryMap: { [key: string]: string[] } = {
        "Summer": ["Summer"],
        "Winter": ["Winter"],
        "Mesh": ["Mesh"],
        "Animal": ["Animal"],
        "Pattern": ["Pattern"],
        "Color Block": ["Color Block"],
        "Sale": [], // Show all products that are on sale
        "Bamboo": ["Summer"], // Bamboo shoes are typically summer category
        "Aqua": ["Summer"], // Aqua shoes are summer category
        "Gifts": [], // Show all products for gifts
        "Accessories": [], // Show all products for accessories
        "Socks": [], // Show all products for socks
        "Large": [], // Show all products for large sizes
        "Feeding": [] // Show all products for feeding
      };

      const allowedCategories = categoryMap[collectionType];

      // Special handling for sale items
      if (collectionType === "Sale" && !product.onSale) {
        return false;
      }

      // If we have specific categories for this collection type, filter by them
      if (allowedCategories && allowedCategories.length > 0 && !allowedCategories.includes(product.category)) {
        return false;
      }
    }

    // Then filter by selected category (from dropdown)
    if (selectedCategory !== "All" && product.category !== selectedCategory) {
      return false;
    }

    // Filter by sale only checkbox
    if (showSaleOnly && !product.onSale) {
      return false;
    }

    return true;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.salePrice && b.salePrice ? a.salePrice - b.salePrice : 0;
      case "price-desc":
        return a.salePrice && b.salePrice ? b.salePrice - a.salePrice : 0;
      case "bestselling":
        return a.badges.includes("bestseller") ? -1 : 1;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // const handleAddToCart = (product: typeof ALL_PRODUCTS[0]) => {
  //   if (product.comingSoon) return;

  //   addItem({
  //     id: `shop-product-${product.id}`,
  //     name: product.name,
  //     price: product.originalPrice ? product.originalPrice.toFixed(2) : product.salePrice.toFixed(2),
  //     salePrice: product.originalPrice ? product.salePrice.toFixed(2) : null,
  //     imageSrc: product.imageSrc,
  //   });
  // };

  // const toggleFavorite = (productId: number) => {
  //   setFavorites(prev =>
  //     prev.includes(productId)
  //       ? prev.filter(id => id !== productId)
  //       : [...prev, productId]
  //   );
  // };

  // const getSavePercentage = (original: number, sale: number) => {
  //   return Math.round(((original - sale) / original) * 100);
  // };

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Filter and Sort Bar */}
      <div className="bg-background-light-grey-alt rounded-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Category Filter */}
          <div className="w-full lg:w-auto">
            <label className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3 block">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                    ? "bg-[#d68972] text-white shadow-md cursor-pointer"
                    : "bg-white text-text-primary hover:bg-accent-blue-grey/10 border border-gray-200 cursor-pointer"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sort and Filter Options */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-end gap-4">
            {/* Sale Filter */}
            <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2.5 rounded-lg border border-gray-200 hover:border-accent-pink transition-colors">
              <input
                type="checkbox"
                checked={showSaleOnly}
                onChange={(e) => setShowSaleOnly(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-accent-pink focus:ring-accent-pink"
              />
              <span className="text-sm font-medium text-text-primary">Sale Only</span>
            </label>

            {/* Sort Dropdown */}
            <div className="relative min-w-[200px]">
              <label className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-1.5 block">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue-grey focus:border-transparent cursor-pointer hover:border-accent-blue-grey transition-colors"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 bottom-3 w-4 h-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-text-primary">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            hoveredProduct={hoveredProduct}
            currentImageIndex={currentImageIndex}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            showSalePrice={product.originalPrice !== product.salePrice}
            idPrefix="shop"
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-background-light-grey-alt rounded-xl">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              No Products Found
            </h3>
            <p className="text-text-secondary mb-6">
              We couldn&apos;t find any products matching your filters. Try adjusting your selection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setShowSaleOnly(false);
                setSortBy("featured");
              }}
              className="px-8 py-3 bg-accent-blue-grey text-white rounded-lg hover:bg-accent-blue-grey-dark transition-colors font-semibold shadow-sm hover:shadow-md"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}