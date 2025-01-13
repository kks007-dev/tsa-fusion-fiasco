"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Trophy, Gift, Users, Vote, Calendar, QrCode } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import { QRCodeCanvas } from 'qrcode.react';
import PageBackground from '@/components/ui/pagebackground';

// TODO: Import auth context/hooks from authentication system
// import { useAuth } from '@/contexts/auth-context';

const LoyaltyDashboard = () => {
  const isAuthenticated = true; // Temporary mock
  const [userState, setUserState] = useState({
    points: 2750,
    tier: "Gold",
    nextTier: "Platinum",
    pointsToNext: 250,
    history: [
      { date: "2024-01-10", description: "Dinner Order", points: 150 },
      { date: "2024-01-05", description: "Referral Bonus", points: 500 },
      { date: "2023-12-28", description: "Special Event", points: 300 },
    ],
  });

  const [activeTab, setActiveTab] = useState('points');
  const [showQR, setShowQR] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [reservations, setReservations] = useState([]);
  const [votedDishes, setVotedDishes] = useState(new Set());
  const [redeemedRewards, setRedeemedRewards] = useState(new Set());
  const [dishes, setDishes] = useState([
    { id: 1, name: "Nigerian Pho Fusion", votes: 245 },
    { id: 2, name: "Curry Jollof Risotto", votes: 189 },
    { id: 3, name: "Tandoori Plantain Roll", votes: 167 },
  ]);

  // Tier thresholds
  const tiers = {
    Bronze: 0,
    Silver: 1000,
    Gold: 2500,
    Platinum: 5000
  };

  // TODO: These functions should integrate with backend API

  const generateQRCode = () => {
    const uniqueCode = `FUSION-${userState.points}-${Date.now()}`;
    setQrValue(uniqueCode);
    setShowQR(true);
  };

  const shareReferral = async (platform) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const referralCode = 'FUSION2024';
      const shareText = `Join me at Fusion Restaurant! Use my referral code: ${referralCode}`;
      
      switch (platform) {
        case 'Email':
          window.location.href = `mailto:?subject=Join%20me%20at%20Fusion%20Restaurant&body=${encodeURIComponent(shareText)}`;
          break;
        case 'WhatsApp':
          window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
          break;
        case 'Facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`, '_blank');
          break;
      }
    } catch (error) {
      console.error('Error sharing referral:', error);
    }
  };


  const voteDish = async (dishId) => {
    if (votedDishes.has(dishId)) return;

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setDishes(dishes.map(dish => 
        dish.id === dishId 
          ? { ...dish, votes: dish.votes + 1 }
          : dish
      ));
      
      setVotedDishes(new Set([...votedDishes, dishId]));
      
      // Add voting points to user's account
      setUserState(prev => ({
        ...prev,
        points: prev.points + 50,
        history: [{
          date: new Date().toISOString().split('T')[0],
          description: "Dish Vote Bonus",
          points: 50
        }, ...prev.history]
      }));
    } catch (error) {
      console.error('Error voting for dish:', error);
    }
  };

  const redeemReward = async (reward) => {
    if (userState.points < reward.points) return;
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setRedeemedRewards(new Set([...redeemedRewards, reward.name]));
      
      setUserState(prev => ({
        ...prev,
        points: prev.points - reward.points,
        history: [{
          date: new Date().toISOString().split('T')[0],
          description: `Redeemed: ${reward.name}`,
          points: -reward.points
        }, ...prev.history]
      }));
    } catch (error) {
      console.error('Error redeeming reward:', error);
    }
  };

  const reserveSpot = async (event) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setReservations([...reservations, event]);
      return true;
    } catch (error) {
      console.error('Error reserving spot:', error);
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <PageBackground imageUrl="https://img.freepik.com/free-photo/indian-food-circular-frame-with-copy-space_23-2148747658.jpg?t=st=1736748795~exp=1736752395~hmac=a76e64a39be61107e861affb43c3b0687d65070e05b7fd7498779f878a86b5c5&w=1380"
      overlayOpacity={0.7}
      >
      <Navbar />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8"><i>Loyalty Program</i></h1>
        
        {!isAuthenticated ? (
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-lg">Please log in to access your loyalty dashboard</p>
              <Button className="mt-4 w-full">Log In</Button>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="points" className="space-y-6">
            <TabsList className=" text-white grid grid-cols-6 gap-4">
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
                        <p className="text-2xl font-bold text-green-900">{userState.tier} Member</p>
                        <p className="text-green-600">{userState.points} Points</p>
                      </div>
                      <div>
                        <p className="text-sm text-green-600 mb-2">
                          {userState.pointsToNext} points until {userState.nextTier}
                        </p>
                        <Progress value={(userState.points % 2500) / 25} className="h-2" />
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
                      {userState.history.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-2">
                          <div>
                            <p className="font-medium">{item.description}</p>
                            <p className="text-sm text-green-600">{item.date}</p>
                          </div>
                          <p className={`font-bold ${item.points > 0 ? 'text-green-700' : 'text-red-700'}`}>
                            {item.points > 0 ? '+' : ''}{item.points}
                          </p>
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
                        <Button 
                          disabled={userState.points < reward.points || redeemedRewards.has(reward.name)}
                          onClick={() => redeemReward(reward)}
                        >
                          {redeemedRewards.has(reward.name) ? 'Redeemed' : 'Redeem'}
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
                    {dishes.map((dish) => (
                      <div key={dish.id} className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{dish.name}</p>
                          <p className="text-sm text-green-600">{dish.votes} votes</p>
                        </div>
                        <Button 
                          onClick={() => voteDish(dish.id)}
                          disabled={votedDishes.has(dish.id)}
                        >
                          {votedDishes.has(dish.id) ? 'Voted' : 'Vote'}
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
    </PageBackground>
    </div>
  );
};

export default LoyaltyDashboard;