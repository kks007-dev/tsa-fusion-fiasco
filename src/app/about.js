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