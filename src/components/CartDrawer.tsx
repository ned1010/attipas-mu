"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useShopifyCart } from "@/contexts/shopify-cart-context";
import { useCurrency } from "@/contexts/currency-context";

export default function CartDrawer() {
    const {
        cartId,
        items,
        totalItems,
        totalAmount,
        isLoading,
        error,
        isCartDrawerOpen,
        setCartDrawerOpen,
        getCheckoutUrl,
        removeItem,
        updateQuantity,
    } = useShopifyCart();

    const { currencySymbol } = useCurrency();

    const handleCheckout = async () => {
        if (!cartId) return;

        try {
            const checkoutUrl = await getCheckoutUrl();
            if (checkoutUrl) {
                window.location.href = checkoutUrl;
            }
        } catch (err) {
            console.error("Error getting checkout URL:", err);
        }
    };

    return (
        <Sheet open={isCartDrawerOpen} onOpenChange={setCartDrawerOpen}>
            <SheetContent side="right" className="w-[360px] sm:w-[420px] p-0">
                <SheetHeader className="border-b px-5 py-4">
                    <div className="flex items-center justify-between">
                        <SheetTitle className="text-base font-semibold">Cart</SheetTitle>
                    </div>
                </SheetHeader>

                <div className="flex-1 overflow-auto px-5 py-4">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded mb-4 text-sm">
                            {error}
                        </div>
                    )}

                    {items.length === 0 ? (
                        <div className="py-10 text-center">
                            <p className="text-sm text-text-secondary mb-4">Your cart is empty</p>
                            <Link
                                href="/collections/all-products"
                                className="inline-block text-sm underline text-text-primary"
                                onClick={() => setCartDrawerOpen(false)}
                            >
                                Continue shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => {
                                const itemPrice = item.price ? parseFloat(item.price.amount) : 0;
                                const itemTotal = itemPrice * item.quantity;

                                return (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                            {item.product?.featuredImage?.url ? (
                                                <Image
                                                    src={item.product.featuredImage.url}
                                                    alt={
                                                        item.product.featuredImage.altText ||
                                                        item.product.title ||
                                                        "Attipas Baby Shoes"
                                                    }
                                                    width={64}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full" />
                                            )}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="min-w-0">
                                                    {item.product?.handle ? (
                                                        <Link
                                                            href={`/products/${item.product.handle}`}
                                                            className="text-sm font-medium text-text-primary hover:underline line-clamp-2"
                                                            onClick={() => setCartDrawerOpen(false)}
                                                        >
                                                            {item.product.title}
                                                        </Link>
                                                    ) : (
                                                        <p className="text-sm font-medium text-text-primary line-clamp-2">
                                                            {item.product?.title || "Attipas Baby Shoes"}
                                                        </p>
                                                    )}

                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        Size: {item.variantTitle || item.title || "One Size"} · Qty: {item.quantity}
                                                    </p>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <div className="flex items-center border border-gray-300 rounded">
                                                            <button
                                                                type="button"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                disabled={isLoading}
                                                                className="p-1 hover:bg-gray-100 disabled:opacity-50"
                                                                aria-label="Decrease quantity"
                                                            >
                                                                <Minus className="w-4 h-4" />
                                                            </button>
                                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                disabled={isLoading}
                                                                className="p-1 hover:bg-gray-100 disabled:opacity-50"
                                                                aria-label="Increase quantity"
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </button>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => removeItem(item.id)}
                                                            disabled={isLoading}
                                                            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-red-600 disabled:opacity-50"
                                                            aria-label="Remove item"
                                                        >
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="text-sm font-medium text-text-primary whitespace-nowrap">
                                                    {currencySymbol}{itemTotal.toFixed(2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                <SheetFooter className="border-t px-5 py-4">
                    <div className="w-full space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Items</span>
                            <span className="text-sm font-medium text-text-primary">
                                {totalItems} item{totalItems === 1 ? "" : "s"}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Subtotal</span>
                            <span className="text-sm font-semibold text-text-primary">
                                {currencySymbol}{parseFloat(totalAmount || "0").toFixed(2)}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <Button
                                variant="outline"
                                onClick={() => setCartDrawerOpen(false)}
                                disabled={isLoading}
                            >
                                Continue shopping
                            </Button>

                            <Button
                                variant="coral"
                                onClick={handleCheckout}
                                disabled={!cartId || isLoading || items.length === 0}
                            >
                                {isLoading ? "Processing..." : "Checkout"}
                            </Button>
                        </div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
