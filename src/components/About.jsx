import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, TrendingUp, Shield, Smile, PhoneCall } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Highest Quality",
      description: "Premium gold detector machines with cutting-edge technology"
    },
    {
      icon: TrendingUp,
      title: "Value for Money",
      description: "Competitive pricing without compromising on quality"
    },
    {
      icon: Shield,
      title: "Integrity & Satisfaction",
      description: "Building honest relationships and ensuring customer satisfaction"
    }
  ];

  const happyClients = [
    {
      icon: Smile,
      name: "Jonas Mhonde",
      phone: "0772542740",
      comment: "Great machines, excellent service!"
    },
    {
      icon: Smile,
      name: "Denford Mada",
      phone: "0773350750",
      comment: "Found gold faster than ever."
    },
    {
      icon: Smile,
      name: "Kenneth Ndodza",
      phone: "0718996576",
      comment: "Highly recommend Geosync!"
    },
     {
      icon: Smile,
      name: "Macdonald Zhuwawo",
      phone: "0775789499",
      comment: "Top quality detectors."
    },
    {
      icon: Smile,
      name: "David Chawarika",
      phone: "0779006473",
      comment: "Best investment for mining."
    }
  ];


  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            About <span className="text-gradient">Geosync Detectors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in February 2025, we are passionate about uncovering the hidden minerals of this world with cutting-edge technology and exceptional service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-blue rounded-xl flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading gold detector machines and accessories supplier in Africa, revolutionizing mineral detection technology across the continent.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Geosync Detectors offers brand new gold detector machines to all clients with a mission to deliver uncompromising quality and cutting-edge technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Company Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="/img/gold_step.jpg"
                alt="Advanced gold detection equipment in professional setting"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              
              {/* Company Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Geosync Detectors Pvt Ltd</h4>
                <p className="text-sm text-gray-600 mb-2">Registered: 24 February 2025</p>
                <p className="text-sm text-gray-600">Registration No: 33332A0222025</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in creating cliental confidence and building honest relationships with our clients through these fundamental principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Happy Clients Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Happy <span className="text-gradient">Clients</span></h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers who trust Geosync Detectors for their mineral exploration needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {happyClients.slice(0,3).map((client, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <client.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{client.name}</h4>
                <p className="text-sm text-gray-500 mb-3 flex items-center justify-center">
                  <PhoneCall className="h-4 w-4 mr-2 text-blue-500" />
                  {client.phone}
                </p>
                <p className="text-gray-600 italic">"{client.comment}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Key Personnel Section */}
        <motion.div
          className="bg-white rounded-3xl p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Key Personnel</h3>
            <p className="text-gray-600">Meet the leadership driving Geosync Detectors forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-800 mb-1">Shephard Sigauke</div>
              <div className="text-gray-600">Director</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 rounded-full gradient-blue flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-800 mb-1">Sibusisiwe M. Sigauke</div>
              <div className="text-gray-600">Director</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;