import React from 'react';
import { MapPin, Clock, Truck, Leaf, Trophy, Users } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';

// Updated Header Component
const Header = () => {
  return (
    // <header className="bg-green-800 text-white py-6">
    //   <div className="container mx-auto flex justify-between items-center px-4">
    //     <Link href="/" className="text-3xl font-bold italic  hover:text-green-200">
    //       Fusion Fiasco
    //     </Link>
    //     <nav className="space-x-6">
    //       <Link href="/menu" className="hover:text-green-200">
    //         Menu
    //       </Link>
    //       <Link href="/tracking" className="hover:text-green-200">
    //         Tracking
    //       </Link>
    //       <Link href="/loyalty" className="hover:text-green-200">
    //         Loyalty
    //       </Link>
    //       <Link href="/community" className="hover:text-green-200">
    //         Community
    //       </Link>
    //       <Link href="/about" className="hover:text-green-200">
    //         About
    //       </Link>
    //     </nav>
    //   </div>
    // </header>
    // To allow for easy navbar changes ( delete comment in future updates)
    <Navbar/>
  );
};


const AboutPage = () => {
  return (
    
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <Header />
      <div className="bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Fusion Fiasco</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Revolutionizing street food with unique vegetarian fusion creations that bring together the best of Nigerian, Vietnamese, and Indian cuisines.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-green-700 mb-4">
                Born from a passion for vegetarian cooking and global flavors, Fusion Fiasco started as a wild experiment in a home kitchen. Today, we're proud to serve the most innovative vegetarian fusion dishes from our fleet of eco-friendly food trucks.
              </p>
              <p className="text-green-700">
                Our mission is to prove that vegetarian food can be exciting, satisfying, and packed with flavors that challenge the status quo. Every dish we serve is a carefully crafted fusion of traditional recipes and modern culinary techniques.
              </p>
            </div>
            <div className="bg-green-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Leaf className="mr-3" /> 100% Vegetarian
                </li>
                <li className="flex items-center">
                  <Trophy className="mr-3" /> Award-winning Fusion Recipes
                </li>
                <li className="flex items-center">
                  <Users className="mr-3" /> Community-First Approach
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-green-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Multiple Locations</h3>
            <p className="text-green-700">Track our trucks in real-time and find the nearest location to you</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-green-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Easy Mobile Ordering</h3>
            <p className="text-green-700">Order ahead and skip the line with our convenient mobile app</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-green-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Local Delivery</h3>
            <p className="text-green-700">Enjoy our fusion dishes at home with our delivery service</p>
          </div>
        </div>

        {/* Locations Map */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Find Our Food Trucks</h2>
          <div className="aspect-video bg-green-100 rounded-lg flex items-center justify-center">
            <p className="text-green-700">Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;