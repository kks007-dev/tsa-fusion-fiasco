import React from 'react';
import { MapPin, Clock, Truck, Leaf, Trophy, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import PageBackground from '@/components/ui/pagebackground';  // Add this import

// Header Component remains the same
const Header = () => {
  return <Navbar/>;
};

const AboutPage = () => {

  const resources = [
    { title: "Created Logo and Animated Food Graphics on Concepts App", link: "https://concepts.app/en/" },
    { title: "Web Hosting | Vercel", link: "https://vercel.com/" },
    { title: "Royalty Free Images From Freepik", link: "https://www.freepik.com/" },
    { title: "Royalty Free Images From Pexels", link: "https://www.pexels.com/" },
    { title: "Font(s) from DaFont", link: "https://www.dafont.com/celina-diary.font" },
    { title: "Image Hosting", link: "https://imgbb.com/" }
  ];
  return (
    <PageBackground 
      imageUrl="https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      overlayOpacity={0.7}  // Made slightly darker to ensure text readability
    >
      <div className="min-h-screen">
        <Header />
        <div className="bg-green-800/80 text-white py-20">
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
              <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                <p className="text-green-700 mb-4">
                  Born from a passion for vegetarian cooking and global flavors, Fusion Fiasco started as a wild experiment in a home kitchen. Today, we're proud to serve the most innovative vegetarian fusion dishes from our fleet of eco-friendly food trucks.
                </p>
                <p className="text-green-700">
                  Our mission is to prove that vegetarian food can be exciting, satisfying, and packed with flavors that challenge the status quo. Every dish we serve is a carefully crafted fusion of traditional recipes and modern culinary techniques.
                </p>
              </div>
              <div className="bg-green-700/90 p-8 rounded-lg text-white">
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

          {/* Resources Section - Replaced Map section */}
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Our Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Link 
                  href={resource.link} 
                  key={index}
                  className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <span className="text-green-700 font-medium">{resource.title}</span>
                  <ExternalLink className="h-5 w-5 text-green-600" />
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Link 
                href="/copyright"
                className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
              >
                Copyright Checklist
              </Link>
              <Link 
                href="/work-log"
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Work Log
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default AboutPage;