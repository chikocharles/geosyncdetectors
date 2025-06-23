
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Users, Globe, Headphones, BookOpen, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Comprehensive technical assistance and maintenance services for all our detector models.",
      features: ["24/7 Support", "Remote Diagnostics", "Repair Services", "Warranty Coverage"]
    },
    {
      icon: BookOpen,
      title: "Training & Education",
      description: "Professional training programs to help customers understand and maximize their detector's potential.",
      features: ["Hands-on Training", "Operation Manuals", "Video Tutorials", "Best Practices"]
    },
    {
      icon: Users,
      title: "Customer Consultation",
      description: "Expert guidance to help you choose the right detector for your specific needs and requirements.",
      features: ["Needs Assessment", "Product Recommendations", "Site Evaluation", "Custom Solutions"]
    },
    {
      icon: Globe,
      title: "Africa-Wide Delivery",
      description: "Reliable shipping and delivery services across African countries with tracking and insurance.",
      features: ["Fast Shipping", "Secure Packaging", "Insurance Coverage", "Tracking System"]
    }
  ];

  const whyChooseUs = [
    "State-of-the-art gold detector machines designed for accuracy",
    "Competitive pricing without compromising on quality",
    "Strong reputation for delivering high-quality products",
    "Exceptional customer service and support",
    "Staying at the forefront of detection technology",
    "Building strong relationships through exceptional service"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive services to ensure you get the most out of your gold detection equipment with ongoing support and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Why Choose <span className="text-gradient">Geosync Detectors?</span>
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to staying at the forefront of gold detection technology, ensuring our customers have access to the latest advancements and exceptional service.
            </p>

            <div className="space-y-4 mb-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{reason}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              onClick={scrollToContact}
              size="lg"
              className="gradient-gold text-white hover:opacity-90"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right Content - Service Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 gradient-blue rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFPLVVocW1hbEwuX0FDX1NMMTUwMF8uanBn.jpg"
                  alt="Professional customer service and technical support for gold detectors"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Service Stats Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Future Plans Section */}
        <motion.div
          className="mt-20 bg-white rounded-3xl p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Future Plans</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are continuously expanding our reach and improving our services to better serve our customers across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Global Expansion</h4>
              <p className="text-gray-600">
                Exploring new markets to reach Zambia, Mozambique, Botswana, and other African countries with our advanced detection technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Customer Engagement</h4>
              <p className="text-gray-600">
                Building stronger relationships with our customers through exceptional service, support, and continuous innovation in detection technology.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Services;
