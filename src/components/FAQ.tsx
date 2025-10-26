'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            question: "What age range are Attipas baby shoes suitable for?",
            answer: "Attipas baby shoes are designed for babies and toddlers from 6 months to 4 years old. Our shoes support natural foot development during the crucial early walking stages. We offer various sizes from US 3.5 to US 8.5 to accommodate growing feet and ensure the perfect fit for your little one."
        },
        {
            id: 2,
            question: "How do I choose the right size for my baby?",
            answer: "To find the perfect fit, measure your baby's foot length and refer to our detailed size guide. We recommend choosing a size that allows 0.5-1cm of growing room. Our shoes feature flexible materials that adapt to your baby's foot shape. If you're unsure, our customer service team is happy to help you select the right size."
        },
        {
            id: 3,
            question: "Are Attipas shoes safe for first-time walkers?",
            answer: "Yes! Attipas shoes are specifically designed for first-time walkers and are recommended by podiatrists. Our shoes feature flexible soles that allow natural foot movement, breathable materials, and anti-slip grips for safety. The lightweight design doesn't interfere with balance development, making them perfect for babies learning to walk."
        },
        {
            id: 4,
            question: "How do I care for and clean Attipas shoes?",
            answer: "Attipas shoes are easy to care for. Most styles are machine washable on a gentle cycle with cold water. For best results, air dry away from direct sunlight. For spot cleaning, use mild soap and a damp cloth. The durable materials are designed to withstand regular washing while maintaining their shape and comfort."
        },
        {
            id: 5,
            question: "What is your return and exchange policy?",
            answer: "We offer a 30-day return and exchange policy for unworn items in original condition. If the size doesn't fit perfectly, we're happy to exchange for a different size at no extra cost. For returns, we provide free return shipping labels. Customer satisfaction is our priority, and we want to ensure you find the perfect shoes for your little one."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 md:py-20 bg-gray-50">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-4" >
                    <h2 className="text-center text-2xl font-bold uppercase text-dark-charcoal-alt mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xs font-medium uppercase tracking-widest mb-5 ">
                        Frequently Asked Questions
                    </p>
                </div >
                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        // shadow - [inset_0_4px_8px_rgba(0, 0, 0, 0.1)]
                        <motion.div
                            key={faq.id}
                            className="bg-white rounded-xl border border-border overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className="w-full px-6 py-2 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-sm md:text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0"
                                >
                                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>



        </section>
    );
};


export default FAQ;