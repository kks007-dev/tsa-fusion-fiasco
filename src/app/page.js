"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Minus, Plus, X } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <header className="bg-green-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-3xl font-bold">Fusion Fiasco</div>
        <nav className="space-x-6">
          <a href="#menu" className="hover:text-green-200">Menu</a>
          <a href="about.js" className="hover:text-green-200">Order</a>
          <a href="credits.js" className="hover:text-green-200">About</a>
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="bg-green-50 py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold text-green-900 mb-6">
          Where Culinary Worlds Collide
        </h1>
        <p className="text-xl text-green-700 mb-8">
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
          <CardTitle className="ml-4 text-green-900">{title}</CardTitle>
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
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          Our Unique Fusion Concepts
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
          <h3 className="text-xl font-bold text-green-900">{name}</h3>
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
      imageUrl: "/api/placeholder/400/300?text=Lagos+Curry+Bomb"
    },
    {
      name: "Saigon Suya Tacos",
      description: "Nigerian suya spiced meat in Vietnamese-style soft tacos with pickled vegetables",
      price: 16.50,
      imageUrl: "/api/placeholder/400/300?text=Saigon+Suya+Tacos"
    },
    {
      name: "Masala Moi Moi Rolls",
      description: "Traditional Nigerian moi moi wrapped in crispy spring roll pastry with Indian masala spices",
      price: 15.75,
      imageUrl: "/api/placeholder/400/300?text=Masala+Moi+Moi+Rolls"
    },
    {
      name: "Pho Egusi Fusion",
      description: "Classic Vietnamese pho broth infused with Nigerian egusi seed richness",
      price: 17.25,
      imageUrl: "/api/placeholder/400/300?text=Pho+Egusi+Fusion"
    },
    {
      name: "Tandoori Plantain Bánh Mì",
      description: "Tandoori-spiced plantains in a Vietnamese bánh mì with Nigerian-inspired slaw",
      price: 16.99,
      imageUrl: "/api/placeholder/400/300?text=Tandoori+Plantain+Bánh+Mì"
    },
    {
      name: "Coconut Palm Jollof Risotto",
      description: "Creamy Italian-style risotto with Nigerian jollof spices and Vietnamese coconut notes",
      price: 19.50,
      imageUrl: "/api/placeholder/400/300?text=Coconut+Palm+Jollof+Risotto"
    }
  ];

  return (
    <section id="menu" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          Our Fusion Menu
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
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-green-900 mb-4">Your Cart</h2>
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
                  <p className="font-bold text-green-900">{item.name}</p>
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
          <div className="mt-4">
            <div className="flex justify-between font-bold text-green-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
              Checkout
            </Button>
          </div>
        </>
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
      // If item exists, increase quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // If new item, add to cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) {
      // Remove item if quantity becomes 0
      handleRemoveItem(index);
    } else {
      const updatedCart = [...cartItems];
      updatedCart[index].quantity = newQuantity;
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="flex-grow">
          <HeroSection />
          <FeaturedFusions />
          <MenuSection onAddToCart={handleAddToCart} />
        </div>
        <div className="w-full md:w-96">
          <Cart 
            cartItems={cartItems} 
            onRemoveItem={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FusionFiascoWebsite;