"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Minus, Plus, X, ChevronLeft } from 'lucide-react';import AboutPage from './about/page';
import Navbar from '@/components/ui/Navbar';
import PageBackground from '@/components/ui/pagebackground';


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

// Hero Section Component
const HeroSection = () => {
  return (
    <div className=" backdrop-opacity-30 py-20 rounded-md">
      <div className="container mx-auto text-center px-4">
        <h1 className="font-celina font-light text-8xl text-white mb-6">
        Welcome to <i className=' font-normal'>Fusion Fiasco</i>
        </h1>
        <h3 className="text-2xl font-bold text-green-400 mb-6">
          Where Culinary Worlds Collide
        </h3>
        <p className="text-xl text-green-400 mb-8">
          Unexpected Flavor Journeys: Nigerian, Vietnamese, and Indian Cuisines Reimagined
        </p>
        <a 
          href="#menu" 
          className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors"
        >
          Explore Our Fusion Menu
        </a>
      </div>
    </div>
  );
};

// Cuisine Fusion Card Component
const CuisineFusionCard = ({ icon, title, description }) => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="flex items-center mb-4">
          {icon}
          <CardTitle className="ml-4 text-green-500">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-green-700">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

// Featured Fusions Section
const FeaturedFusions = () => {
  const fusions = [
    {
      icon: <ShoppingCart className="text-green-600" size={48} />,
      title: "Nigerian-Indian Spice Fusion",
      description: "Blend of aromatic Indian spices with bold Nigerian cooking techniques"
    },
    {
      icon: <ShoppingCart className="text-green-600" size={48} />,
      title: "Vietnamese-Nigerian Flavor Explosion",
      description: "Fresh Vietnamese herbs meet robust Nigerian street food flavors"
    },
    {
      icon: <ShoppingCart className="text-green-600" size={48} />,
      title: "Vietnamese-Indian Culinary Adventure",
      description: "Delicate Vietnamese presentation with intense Indian spice profiles"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Our Unique <i className='font-celina text-6xl text-white font-light'>Fusion</i> Concepts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fusions.map((fusion, index) => (
            <CuisineFusionCard 
              key={index}
              icon={fusion.icon}
              title={fusion.title}
              description={fusion.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Menu Item Card Component
const MenuItemCard = ({ name, description, price, imageUrl, onAddToCart }) => {
  return (
    <Card className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64 w-full">
        <img 
          src={imageUrl} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-green-500">{name}</h3>
          <span className="text-green-700 font-semibold">${price.toFixed(2)}</span>
        </div>
        <p className="text-green-700 mb-4">{description}</p>
        <Button 
          onClick={() => onAddToCart({ name, price })}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

// Menu Section Component
const MenuSection = ({ onAddToCart }) => {
  const menuItems = [
    {
      name: "Lagos Curry Bomb",
      description: "Creamy Indian curry meets Nigerian jollof rice with a Vietnamese herb twist",
      price: 18.99,
      imageUrl: "https://i.ibb.co/RzBXQ75/20250113-003615-0000.png"
    },
    {
      name: "Saigon Suya Tacos",
      description: "Nigerian suya spiced imitation-meat in Vietnamese-style soft tacos with pickled vegetables",
      price: 16.50,
      imageUrl: "https://i.ibb.co/NC8NBqY/20250113-003615-0001.png"
    },
    {
      name: "Masala Moi Moi Rolls",
      description: "Traditional Nigerian moi moi wrapped in crispy spring roll pastry with Indian masala spices",
      price: 15.75,
      imageUrl: "https://i.ibb.co/2Yt5pKg/20250113-003615-0002.png"
    },
    {
      name: "Pho Egusi Fusion",
      description: "Classic Vietnamese pho broth infused with Nigerian egusi seed richness",
      price: 17.25,
      imageUrl: "https://i.ibb.co/4Sm68bj/20250113-003615-0003.png"
    },
    {
      name: "Tandoori Plantain Bánh Mì",
      description: "Tandoori-spiced plantains in a Vietnamese bánh mì with Nigerian-inspired slaw",
      price: 16.99,
      imageUrl: "https://i.ibb.co/HC3rLHH/20250113-003615-0004.png"
    },
    {
      name: "Coconut Palm Jollof Risotto",
      description: "Creamy Italian-style risotto with Nigerian jollof spices and Vietnamese coconut notes",
      price: 19.50,
      imageUrl: "https://i.ibb.co/2FD4Y29/20250113-003615-0005.png"
    }
  ];

  return (
    <section id="menu" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Our Featured <i className='font-celina text-7xl text-white font-light'>Fusion</i> Menu
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItemCard 
              key={index}
              {...item}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Cart Component
const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Auto-open cart when items are added
  useEffect(() => {
    if (cartItems.length > 0) {
      setIsOpen(true);
    }
  }, [cartItems.length]);

  return (
    <div className={`fixed right-0 transition-all duration-300 ease-in-out ${isOpen ? 'w-96 top-0 h-screen' : 'w-16 top-50 h-16'} bg-white shadow-lg border-l border-green-100 flex flex-col`}>
      {/* Cart Header */}
      <div className="flex items-center h-20 px-4 border-b border-green-100 bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-full"
        >
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6 text-green-600" />
            {!isOpen && totalItems > 0 && (
              <span className="ml-1 bg-green-600 text-white rounded-full px-2 py-1 text-xs">
                {totalItems}
              </span>
            )}
            {isOpen && (
              <>
                <span className="ml-2 font-bold text-green-500">Your Cart</span>
                <ChevronLeft className={`ml-2 transform transition-transform ${isOpen ? '' : 'rotate-180'}`} />
              </>
            )}
          </div>
        </button>
      </div>

      {/* Cart Content */}
      {isOpen && (
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-green-700">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4 border-b pb-2">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => onRemoveItem(index)}
                      >
                        <X className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                    <div>
                      <p className="font-bold text-green-500">{item.name}</p>
                      <p className="text-green-700">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      
      {/* Fixed Checkout Section */}
      {isOpen && cartItems.length > 0 && (
        <div className="border-t border-green-100 p-4 bg-white">
          <div className="flex justify-between font-bold text-green-500 mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link href="/checkout">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Checkout
          </Button>
          </Link>
          
        </div>
      )}
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Fusion Fiasco</h3>
          <p className="text-green-200">Where Culinary Worlds Collide</p>
        </div>
        <div className="space-x-4 mb-4">
          <a href="#" className="hover:text-green-200">Reservations</a>
          <a href="#" className="hover:text-green-200">Location</a>
          <a href="#" className="hover:text-green-200">Catering</a>
        </div>
        <div className="text-green-300">
          © 2024 Fusion Fiasco. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const FusionFiascoWebsite = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex > -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(index);
    } else {
      const updatedCart = [...cartItems];
      updatedCart[index].quantity = newQuantity;
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <PageBackground overlayOpacity={0.5} imageUrl="https://i.ibb.co/857wSHC/mid-shot-man-reading-food-truck-menu-23-2148757258.jpg">
      <Header />
      
      <div className="flex">
        
        {/* Main content area with dynamic margin based on cart state */}
        <main className="flex-1" style={{ marginRight: "64px" }}>
          
          <div className="max-w-7xl mx-auto px-4 py-8">
            <HeroSection />
            <FeaturedFusions />
            <MenuSection onAddToCart={handleAddToCart} />
          </div>
        </main>
        {/* Collapsible cart sidebar */}
        <Cart 
          cartItems={cartItems} 
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
            <h3 className="text-2xl text-green-200 font-bold">More coming soon!</h3>
          </div>
          
          </div>
          
      <Footer />
      </PageBackground>
    </div>
  );
};

export default FusionFiascoWebsite;