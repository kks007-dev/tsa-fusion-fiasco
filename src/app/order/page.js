"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Receipt,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/ui/Navbar';
import PageBackground from '@/components/ui/pagebackground';

// Mock data - replace with your actual data fetching logic
const mockOrders = [
  {
    id: '123456',
    date: '2025-01-12T18:30:00',
    status: 'In Progress',
    total: 42.99,
    items: [
      { name: 'Fusion Burger', quantity: 2, price: 15.99 },
      { name: 'Sweet Potato Fries', quantity: 1, price: 5.99 },
      { name: 'Dragon Breath Sauce', quantity: 1, price: 2.99 }
    ],
    address: '123 Main St, Foodville, FV 12345',
  },
  {
    id: '123455',
    date: '2025-01-11T19:45:00',
    status: 'Delivered',
    total: 35.50,
    items: [
      { name: 'Noodle Bowl', quantity: 1, price: 18.99 },
      { name: 'Spring Rolls', quantity: 2, price: 7.99 }
    ],
    address: '123 Main St, Foodville, FV 12345',
  }
];

const OrderCard = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = new Date(order.date).toLocaleString();
  
  return (
    <Card className="border-green-200 mb-4">
      <CardHeader 
        className="cursor-pointer hover:bg-green-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <CardTitle className="text-green-900">Order #{order.id}</CardTitle>
            <div className="text-sm text-green-700">{formattedDate}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="font-bold text-green-900">${order.total.toFixed(2)}</div>
              <div className={`text-sm ${
                order.status === 'Delivered' ? 'text-green-600' : 'text-orange-500'
              }`}>
                {order.status}
              </div>
            </div>
            {isExpanded ? (
              <ChevronUp className="text-green-600" />
            ) : (
              <ChevronDown className="text-green-600" />
            )}
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          {/* Order Items */}
          <div className="space-y-2">
            <div className="font-semibold text-green-900">Order Items</div>
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-green-700">
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          {/* Delivery Address */}
          <div className="space-y-1">
            <div className="font-semibold text-green-900">Delivery Address</div>
            <div className="flex items-center gap-2 text-green-700">
              <MapPin className="h-4 w-4" />
              <span>{order.address}</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button 
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Receipt className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Clock className="h-4 w-4 mr-2" />
              Track Order
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const OrdersPage = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-green-50">
      <PageBackground className="bg-gradient-to-t" imageUrl="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
      <Navbar />
      <div className="max-w-3xl mx-auto py-10">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-900">Your Orders</h1>
            <p className="text-green-700">View and track your orders</p>
          </div>
          <Button 
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Menu
          </Button>
        </div>
        
        {/* Orders List */}
        <div className="space-y-4">
          {mockOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
        
        {/* Empty State */}
        {mockOrders.length === 0 && (
          <Card className="border-green-200 text-center py-12">
            <CardContent>
              <div className="space-y-4">
                <div className="text-green-900 font-semibold">No orders yet</div>
                <p className="text-green-700">
                  When you place an order, it will appear here.
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => router.push('/')}
                >
                  Browse Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      </PageBackground>
    </div>
  );
};

export default OrdersPage;