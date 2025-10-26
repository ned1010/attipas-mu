"use client";

import { useCart } from '@/contexts/cart-context';
import { useCurrency } from '@/contexts/currency-context';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X, ChevronRight, Lock, Truck } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const { convertPrice, currencySymbol } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-text-primary">Home</Link>
            <ChevronRight size={16} />
            <span className="text-text-primary">Shopping Cart</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
            Shopping Cart
          </h1>

          <div className="max-w-2xl mx-auto bg-background-light-grey rounded-lg p-12 text-center">
            <p className="text-xl text-text-secondary mb-6">Your cart is empty</p>
            <Link
              href="/collections/all-products"
              className="inline-block bg-accent-blue-grey text-white uppercase text-sm font-ui py-3 px-8 rounded-md transition-colors hover:bg-accent-blue-grey-dark"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const convertedTotalPrice = convertPrice(totalPrice);
  const shippingThreshold = 100;
  const remainingForFreeShipping = Math.max(0, shippingThreshold - totalPrice);
  const qualifiesForFreeShipping = remainingForFreeShipping === 0;

  return (
    <div className="min-h-screen bg-white py-6 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
          <Link href="/" className="hover:text-text-primary">Home</Link>
          <ChevronRight size={16} />
          <span className="text-text-primary">Shopping Cart</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 md:mb-0">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-text-secondary hover:text-accent-pink transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Free Shipping Banner */}
        {!qualifiesForFreeShipping && (
          <div className="bg-background-light-grey rounded-lg p-4 mb-6 flex items-center gap-3">
            <Truck className="text-accent-blue-grey" size={24} />
            <p className="text-sm text-text-primary">
              Add <span className="font-bold">{currencySymbol}{convertPrice(remainingForFreeShipping)}</span> more to qualify for <span className="font-bold">FREE SHIPPING</span>!
            </p>
          </div>
        )}

        {qualifiesForFreeShipping && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
            <Truck className="text-green-600" size={24} />
            <p className="text-sm text-green-700 font-semibold">
              🎉 Congratulations! You qualify for FREE SHIPPING!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item) => {
              const itemPrice = parseFloat(item.salePrice || item.price);
              const convertedItemPrice = convertPrice(itemPrice);
              const convertedRegularPrice = item.salePrice ? convertPrice(parseFloat(item.price)) : null;
              const itemTotal = convertPrice(itemPrice * item.quantity);

              return (
                <div key={item.id} className="bg-white border border-border rounded-lg p-4 md:p-5 flex gap-4 md:gap-6 relative hover:shadow-md transition-shadow">
                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 text-text-secondary hover:text-accent-pink transition-colors"
                    aria-label="Remove item"
                  >
                    <X size={20} />
                  </button>

                  {/* Product Image */}
                  <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 bg-background-light-grey rounded-md overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-sm md:text-base text-text-primary pr-6 mb-2">
                        {item.name}
                      </h3>
                      <div className="mt-1">
                        {convertedRegularPrice ? (
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-muted-foreground line-through text-sm">
                              {currencySymbol}{convertedRegularPrice}
                            </span>
                            <span className="font-bold text-base md:text-lg text-text-primary">
                              {currencySymbol}{convertedItemPrice}
                            </span>
                            <span className="text-xs text-accent-pink uppercase font-semibold">Sale</span>
                          </div>
                        ) : (
                          <span className="font-bold text-base md:text-lg text-text-primary">{currencySymbol}{convertedItemPrice}</span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm text-text-secondary">Qty:</span>
                        <div className="flex items-center border border-border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 md:p-2 hover:bg-background-light-grey transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 md:px-4 py-1.5 md:py-2 min-w-[2.5rem] text-center text-sm font-semibold border-x border-border">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 md:p-2 hover:bg-background-light-grey transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <span className="font-bold text-sm md:text-base text-text-primary">
                        {currencySymbol}{itemTotal}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-background-light-grey rounded-lg p-5 md:p-6 sticky top-4">
              <h2 className="text-xl font-bold text-text-primary mb-5">Order Summary</h2>

              <div className="space-y-3 mb-5 pb-5 border-b border-border">
                <div className="flex justify-between text-text-secondary text-sm">
                  <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span className="font-semibold text-text-primary">{currencySymbol}{convertedTotalPrice}</span>
                </div>
                <div className="flex justify-between text-text-secondary text-sm">
                  <span>Shipping</span>
                  <span className="text-text-primary font-semibold">
                    {qualifiesForFreeShipping ? 'FREE' : 'Calculated at checkout'}
                  </span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg text-text-primary mb-6">
                <span>Total</span>
                <span>{currencySymbol}{convertedTotalPrice}</span>
              </div>

              <button className="w-full bg-accent-pink text-white uppercase text-sm font-ui font-semibold py-4 px-6 rounded-md transition-colors hover:bg-accent-pink-dark mb-3 flex items-center justify-center gap-2">
                <Lock size={16} />
                Secure Checkout
              </button>

              <Link
                href="/collections/all-products"
                className="block text-center text-sm text-accent-blue-grey hover:text-accent-blue-grey-dark font-semibold"
              >
                ← Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <Lock size={16} className="text-green-600" />
                    <span>Secure SSL Encrypted Payment</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <Truck size={16} className="text-accent-blue-grey" />
                    <span>Free Shipping on Orders Over {currencySymbol}{convertPrice(shippingThreshold)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}