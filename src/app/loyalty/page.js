"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Trophy, Gift, Users, Vote, Calendar, QrCode } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import { QRCodeCanvas } from 'qrcode.react';

// TODO: Import auth context/hooks from authentication system
// import { useAuth } from '@/contexts/auth-context';

const LoyaltyDashboard = () => {
  // TODO: Replace with actual auth integration
  // const { user, isAuthenticated } = useAuth();
  const isAuthenticated = true; // Temporary mock
  const mockUser = {
    points: 2750,
    tier: "Gold",
    nextTier: "Platinum",
    pointsToNext: 250,
    history: [
      { date: "2024-01-10", description: "Dinner Order", points: 150 },
      { date: "2024-01-05", description: "Referral Bonus", points: 500 },
      { date: "2023-12-28", description: "Special Event", points: 300 },
    ],
  };

  const [activeTab, setActiveTab] = useState('points');

  // Tier thresholds
  const tiers = {
    Bronze: 0,
    Silver: 1000,
    Gold: 2500,
    Platinum: 5000
  };

  // TODO: These functions should integrate with backend APIs
  const [showQR, setShowQR] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [reservations, setReservations] = useState([]);

  const generateQRCode = () => {
    // Generate a unique code combining user ID and timestamp
    const uniqueCode = `FUSION-${mockUser.points}-${Date.now()}`;
    setQrValue(uniqueCode);
    setShowQR(true);
  };

  const shareReferral = (platform) => {
    // Implementation for social sharing
    console.log(`Share referral on ${platform}`);
  };

  const voteDish = (dishId) => {
    // Implementation for voting system
    console.log(`Vote for dish ${dishId}`);
  };

  const reserveSpot = (event) => {
    // Add to reservations
    setReservations([...reservations, event]);
    
    // You would typically make an API call here
    console.log(`Reserved spot for ${event.name}`);
    
    // Disable the button after reservation
    return true;
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-900 mb-8">Loyalty Program</h1>
        
        {!isAuthenticated ? (
          // TODO: Replace with actual login component
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-lg">Please log in to access your loyalty dashboard</p>
              <Button className="mt-4 w-full">Log In</Button>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="points" className="space-y-6">
            <TabsList className="grid grid-cols-6 gap-4">
              <TabsTrigger value="points">Points</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="referral">Referral</TabsTrigger>
              <TabsTrigger value="voting">Voting</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="qr">QR Code</TabsTrigger>
            </TabsList>

            {/* Points & Status Tab */}
            <TabsContent value="points">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-6 w-6 text-green-600" />
                      Current Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-2xl font-bold text-green-900">{mockUser.tier} Member</p>
                        <p className="text-green-600">{mockUser.points} Points</p>
                      </div>
                      <div>
                        <p className="text-sm text-green-600 mb-2">
                          {mockUser.pointsToNext} points until {mockUser.nextTier}
                        </p>
                        <Progress value={(mockUser.points % 2500) / 25} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Points History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockUser.history.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-2">
                          <div>
                            <p className="font-medium">{item.description}</p>
                            <p className="text-sm text-green-600">{item.date}</p>
                          </div>
                          <p className="font-bold text-green-700">+{item.points}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-6 w-6 text-green-600" />
                    Available Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      { name: "Free Appetizer", points: 500 },
                      { name: "20% Off Next Order", points: 1000 },
                      { name: "Private Tasting Event", points: 2500 },
                    ].map((reward, index) => (
                      <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{reward.name}</p>
                          <p className="text-sm text-green-600">{reward.points} points required</p>
                        </div>
                        <Button disabled={mockUser.points < reward.points}>
                          Redeem
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Referral Tab */}
            <TabsContent value="referral">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-green-600" />
                    Refer Friends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">Share your referral code and earn 500 points for each friend who joins!</p>
                  <div className="p-4 bg-green-100 rounded-lg mb-6">
                    <p className="text-center font-mono text-lg">FUSION2024</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {['Email', 'WhatsApp', 'Facebook'].map((platform) => (
                      <Button
                        key={platform}
                        onClick={() => shareReferral(platform)}
                        className="w-full"
                      >
                        Share on {platform}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Voting Tab */}
            <TabsContent value="voting">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Vote className="h-6 w-6 text-green-600" />
                    Vote on New Dishes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { id: 1, name: "Nigerian Pho Fusion", votes: 245 },
                      { id: 2, name: "Curry Jollof Risotto", votes: 189 },
                      { id: 3, name: "Tandoori Plantain Roll", votes: 167 },
                    ].map((dish) => (
                      <div key={dish.id} className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{dish.name}</p>
                          <p className="text-sm text-green-600">{dish.votes} votes</p>
                        </div>
                        <Button onClick={() => voteDish(dish.id)}>
                          Vote
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-green-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { date: "2024-01-20", name: "Cooking Masterclass", spots: 5 },
                    { date: "2024-02-01", name: "Wine Pairing Evening", spots: 8 },
                    { date: "2024-02-15", name: "Chef's Table Experience", spots: 3 },
                  ].map((event, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">{event.name}</p>
                        <p className="text-sm text-green-600">{event.date}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-green-600">{event.spots} spots left</p>
                        <Button 
                          onClick={() => reserveSpot(event)}
                          disabled={reservations.some(r => r.name === event.name) || event.spots === 0}
                        >
                          {reservations.some(r => r.name === event.name) ? 'Reserved' : 'Reserve Spot'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

            {/* QR Code Tab */}
            <TabsContent value="qr">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-6 w-6 text-green-600" />
                  Point Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p>Show this QR code to collect points for in-person visits</p>
                  <Button onClick={generateQRCode}>
                    {showQR ? 'Generate New Code' : 'Generate QR Code'}
                  </Button>
                  <div className="w-64 h-64 mx-auto border-2 border-dashed rounded-lg flex items-center justify-center">
                    {showQR ? (
                      <QRCodeCanvas
                        value={qrValue}
                        size={256}
                        level="H"
                        includeMargin={true}
                      />
                    ) : (
                      <p className="text-green-600">Click generate to show QR code</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
    </div>
  );
};

export default LoyaltyDashboard;