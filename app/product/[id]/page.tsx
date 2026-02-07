'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { getProductById, PRODUCTS } from '@/lib/products';
import { withBasePath } from '@/lib/withBasePath';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const imageScale = product?.imageScale && product.imageScale > 0 ? product.imageScale : 1;
  const mainImageStyle = {
    backgroundImage: `url(${withBasePath(product?.images[selectedImage] || '')})`,
    backgroundSize: imageScale === 1 ? undefined : `${Math.round(imageScale * 100)}%`,
    backgroundRepeat: imageScale === 1 ? undefined : 'no-repeat',
  };

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Product Detail */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-charcoal/20">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700"
                style={mainImageStyle}
              />
              {product.limited && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-gold text-charcoal text-sm tracking-wider font-medium">
                  LIMITED EDITION
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-20 overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-2 ring-gold'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${withBasePath(img)})` }}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Category */}
            <p className="text-sm tracking-luxury text-gold uppercase">
              {product.category}
            </p>

            {/* Title & Price */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-warm-white mb-4">
                {product.name}
              </h1>
              <p className="font-serif text-3xl text-gold">
                ${product.price.toLocaleString()} {product.currency}
              </p>
            </div>

            {/* Story */}
            <div className="border-t border-gold/20 pt-8">
              <h2 className="text-sm tracking-wider text-gold uppercase mb-4">The Story</h2>
              <p className="text-lg text-warm-white/80 leading-relaxed mb-6">
                {product.story}
              </p>
              <p className="text-warm-white/60 leading-relaxed">{product.ritual}</p>
            </div>

            {/* Origin */}
            <div className="border-t border-gold/20 pt-6">
              <h3 className="text-sm tracking-wider text-gold uppercase mb-2">Origin</h3>
              <p className="text-warm-white/80">{product.origin}</p>
            </div>

            {/* Specifications */}
            <div className="border-t border-gold/20 pt-6">
              <h3 className="text-sm tracking-wider text-gold uppercase mb-4">
                Specifications
              </h3>
              <dl className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between">
                    <dt className="text-warm-white/60">{spec.label}</dt>
                    <dd className="text-warm-white font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Add to Cart */}
            <div className="border-t border-gold/20 pt-8">
              <button
                disabled={!product.inStock}
                className={`w-full py-4 text-sm tracking-wider font-medium transition-all duration-500 ${
                  product.inStock
                    ? 'bg-gold text-charcoal hover:bg-warm-white'
                    : 'bg-charcoal/50 text-warm-white/30 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="px-6 lg:px-12 max-w-7xl mx-auto border-t border-gold/10 pt-24">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-white mb-12 text-center">
            You May Also Appreciate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {relatedProducts.map((p, index) => (
              <div key={p.id}>
                <motion.a
                  href={`/product/${p.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-charcoal/20">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${withBasePath(p.images[0])})` }}
                    />
                  </div>
                  <h3 className="font-serif text-xl text-warm-white group-hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gold mt-2">${p.price.toLocaleString()}</p>
                </motion.a>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
