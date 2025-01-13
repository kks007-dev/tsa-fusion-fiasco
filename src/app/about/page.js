import React from 'react';
import { MapPin, Clock, Truck, Leaf, Trophy, Users } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import PageBackground from '@/components/ui/pagebackground';  // Add this import

// Header Component remains the same
const Header = () => {
  return <Navbar/>;
};

const AboutPage = () => {
  return (
    <PageBackground 
      imageUrl="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1000"
      overlayOpacity={0.7}  // Made slightly darker to ensure text readability
    >
      <div className="min-h-screen">
        <Header />
        {/* Hero Section */}
        <div className="bg-green-800/80 text-white py-20"> {/* Added transparency */}
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
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 p-8 rounded-lg shadow-lg"> {/* Added transparency */}
                <p className="text-green-700 mb-4">
                  Born from a passion for vegetarian cooking and global flavors, Fusion Fiasco started as a wild experiment in a home kitchen. Today, we're proud to serve the most innovative vegetarian fusion dishes from our fleet of eco-friendly food trucks.
                </p>
                <p className="text-green-700">
                  Our mission is to prove that vegetarian food can be exciting, satisfying, and packed with flavors that challenge the status quo. Every dish we serve is a carefully crafted fusion of traditional recipes and modern culinary techniques.
                </p>
              </div>
              <div className="bg-green-700/90 p-8 rounded-lg text-white"> {/* Added transparency */}
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
            <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center"> {/* Added transparency */}
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Multiple Locations</h3>
              <p className="text-green-700">Track our trucks in real-time and find the nearest location to you</p>
            </div>
            
            <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center"> {/* Added transparency */}
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Easy Mobile Ordering</h3>
              <p className="text-green-700">Order ahead and skip the line with our convenient mobile app</p>
            </div>
            
            <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center"> {/* Added transparency */}
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Local Delivery</h3>
              <p className="text-green-700">Enjoy our fusion dishes at home with our delivery service</p>
            </div>
          </div>

          {/* Locations Map */}
          <div className="bg-white/90 p-8 rounded-lg shadow-lg"> {/* Added transparency */}
            <h2 className="text-3xl font-bold text-green-900 mb-6">Find Our Food Trucks</h2>
            <div className="aspect-video bg-green-100 rounded-lg flex items-center justify-center">
              <p className="text-green-700">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default AboutPage;