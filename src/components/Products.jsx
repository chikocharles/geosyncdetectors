
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Shield, Award, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "GPX 6000",
      category: "professional",
      image: "https://th.bing.com/th/id/OIP.k0yXcO8rFwzzMM4c5y53jwHaFR?rs=1&pid=ImgDetMain.jpg",
      features: ["Advanced Pulse Technology", "Waterproof Design", "Deep Detection"],
      rating: 5,
      price: "Contact for Price"
    },
    {
      id: 2,
      name: "GPZ 7000",
      category: "standard",
      image: "https://www.minelab.com/files/467502.png",
      features: ["Ultimate depth", "LCD Display", "Ultimate control"],
      rating: 4,
      price: "Contact for Price"
    },
    {
      id: 3,
      name: "GPX 5000",
      category: "professional",
      image: "https://www.minelab.com/__files/i/467500/GPX-5000_ProductImage.png",
      features: ["High Sensitivity", "Ground Balance", "Audio Alerts"],
      rating: 5,
      price: "Contact for Price"
    },
    {
      id: 4,
      name: "SDC 2300",
      category: "standard",
      image: "https://www.minelab.com/files/467509.png",
      features: ["Easy Operation", "Discrimination Mode", "Adjustable Shaft"],
      rating: 4,
      price: "Contact for Price"
    },
    {
      id: 5,
      name: "Gold Monster 1000",
      category: "professional",
      image: "https://tse3.mm.bing.net/th/id/OIP.FCODKBQQdSwlQrZHRqqE4QHaEx?rs=1&pid=ImgDetMain&o=7&rm=3",
      features: ["Long Range Detection", "3D Imaging", "GPS Integration"],
      rating: 5,
      price: "Contact for Price"
    },
    {
      id: 6,
      name: "Titan GER500",
      category: "portable",
      image: "https://gerdetect.net/wp-content/uploads/2023/01/TITAN-500-SMART-DETECTOR-800x800.png",
      features: ["Portable Design", "Battery Efficient", "Quick Setup"],
      rating: 4,
      price: "Contact for Price"
    },
    {
      id: 7,
      name: "Titan  GER1000",
      category: "portable",
      image: "https://gergermany.de/assets/img/assets/home/titan-ger-1000-homepage.png",
      features: ["Portable Design", "Battery Efficient", "Quick Setup"],
      rating: 4,
      price: "Contact for Price"
    },
    {
      id: 8,
      name: "Primero",
      category: "portable",
      image: "https://www.inventumdetector.com/wp-content/uploads/2019/07/Produit-4-1.jpg",
      features: ["Portable Design", "Battery Efficient", "Quick Setup"],
      rating: 4,
      price: "Contact for Price"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Search },
    { id: 'professional', name: 'Professional', icon: Award },
    { id: 'standard', name: 'Standard', icon: Shield },
    { id: 'portable', name: 'Portable', icon: Zap }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Product Range</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of state-of-the-art gold detector machines designed for accuracy, reliability, and exceptional performance.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 ${
                selectedCategory === category.id 
                  ? 'gradient-gold text-white' 
                  : 'border-gray-300 hover:border-blue-500'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden card-hover border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={`${product.name} - Professional gold detector machine`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${
                          i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-blue-600">{product.price}</p>
                  </div>
                  <Button 
                    onClick={scrollToContact}
                    className="gradient-gold text-white hover:opacity-90"
                  >
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Products */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our Detectors?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our machines are designed to detect gold and other minerals with unmatched accuracy and minimal effort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Advanced Technology",
                description: "Latest detection algorithms and signal processing for superior accuracy"
              },
              {
                icon: Shield,
                title: "Reliable Performance",
                description: "Built to withstand harsh conditions and deliver consistent results"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Trusted by professionals across Africa with proven success rates"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
