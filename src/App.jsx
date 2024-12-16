import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check, Sun, Home, Droplets, Shield, 
LineChart, Clock, Percent, Battery } from 'lucide-react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white">
        <div className="container mx-auto px-6 py-16">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center">
              <Sun className="w-8 h-8 mr-2 text-yellow-300" />
              <h1 className="text-2xl font-bold">SolarShine Solutions</h1>
            </div>
            <div className="space-x-6">
              <a href="#mission" className="hover:text-blue-200 transition">Mission</a>
              <a href="#services" className="hover:text-blue-200 transition">Services</a>
              <a href="#benefits" className="hover:text-blue-200 transition">Benefits</a>
              <a href="#about" className="hover:text-blue-200 transition">About</a>
              <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            </div>
          </nav>
          
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">Making Your Home Shine</h2>
            <p className="text-xl mb-8">Professional solar panel and gutter maintenance in Mandurah and surrounding areas</p>
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-block">
              Get Your Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Mission */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At SolarShine Solutions, we're dedicated to maximizing the performance of your solar investment and protecting your home through professional maintenance services. Our commitment to excellence ensures your solar panels operate at peak efficiency and your property stays well-maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Solar Panel Service */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <Sun className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-blue-600">Solar Panel Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Professional panel cleaning
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Comprehensive inspection reports
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Performance optimization
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Expert maintenance advice
                </li>
              </ul>
            </div>

            {/* Gutter Service */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <Droplets className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-blue-600">Gutter Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Professional gutter cleaning
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Downpipe maintenance
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Preventative care
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Water flow optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Why Choose Professional Maintenance?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Regular professional maintenance is crucial for protecting your investment and ensuring optimal performance of your solar system.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Performance Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <LineChart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-600">Increased Performance</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Up to 25% performance increase</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Optimal energy generation</span>
                </li>
              </ul>
            </div>

            {/* Longevity Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-600">Extended Lifespan</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Prevent permanent damage</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Protect warranty coverage</span>
                </li>
              </ul>
            </div>

            {/* Investment Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <Percent className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-600">Investment Protection</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Maximize ROI</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Lower electricity bills</span>
                </li>
              </ul>
            </div>

            {/* Early Detection Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <Battery className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-600">Early Detection</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Identify issues early</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Prevent costly repairs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Did You Know Box */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-sky-50 p-8 rounded-lg max-w-3xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Did You Know?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Professional cleaning can restore up to 25% of lost efficiency in dirty solar panels</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Regular maintenance can extend your solar system's life by up to 5-10 years</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Coastal areas like Mandurah require more frequent cleaning due to salt buildup</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Most solar panel warranties require regular professional maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">The SolarShine Difference</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Fully Insured</h3>
              <p>Comprehensive insurance coverage for your peace of mind</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Industry Expertise</h3>
              <p>Professional height access and maintenance specialists</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Advanced Equipment</h3>
              <p>Using the latest technology for optimal results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholderplaceholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <span>0400 000 000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span>info@solarshinesolutions.com.au</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <span>Servicing Mandurah and surrounding areas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 SolarShine Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
