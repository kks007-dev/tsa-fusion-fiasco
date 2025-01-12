"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Check, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CheckoutConfirmation = () => {
  const router = useRouter();
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random order number

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Success Message */}
        <div className="text-center space-y-4">
          <div className="bg-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto">
            <Check className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-green-900">Thank You For Your Order!</h1>
          <p className="text-green-700">We're excited to prepare your fusion fiasco feast.</p>
        </div>

        {/* Order Details Card */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900">Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-green-100">
              <span className="text-green-700">Order Number</span>
              <span className="font-mono font-bold text-green-900">#{orderNumber}</span>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-green-800">
                <Package className="h-5 w-5" />
                <span>Estimated Delivery Time: 30-45 minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900">What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-green-700">
              You'll receive a confirmation email shortly with your order details.
              Track your order status and view complete details on your order page.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => router.push('/order')}
                className="bg-green-600 hover:bg-green-700"
              >
                View Order Status
              </Button>
              <Button 
                onClick={() => router.push('/')}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Continue Shopping
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutConfirmation;