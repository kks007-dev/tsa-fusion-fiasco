import React from 'react';
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Header = () => {
  return (
    <header className="bg-green-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-3xl font-bold italic hover:text-green-200">
          Fusion Fiasco
        </Link>
        <nav className="space-x-6">
          <Link href="/menu" className="hover:text-green-200">
            Menu
          </Link>
          <Link href="/tracking" className="hover:text-green-200">
            Tracking
          </Link>
          <Link href="/loyalty" className="hover:text-green-200">
            Loyalty
          </Link>
          <Link href="/community" className="hover:text-green-200">
            Community
          </Link>
          <Link href="/about" className="hover:text-green-200">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

const EventCard = ({ date, title, description, location }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center gap-4">
        <Calendar className="h-6 w-6 text-green-800" />
        <div>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-sm text-gray-600 font-medium">📍 {location}</p>
      </CardContent>
    </Card>
  );
};

const HomePage = () => {
  const events = [
    {
      date: "January 30, 2025",
      title: "Veggie Food Festival",
      description: "Join us for our monthly vegetarian food festival! We'll be serving our famous Indian Cusie and jackfruit sliders. Live activites and local vendors present.",
      location: "Herman Park Houston, Texas"
    },
    {
      date: "Febuary 1, 2025",
      title: "Plant-Based Cooking Workshop",
      description: "Learn how to make our signature cauliflower vegan ranch dressing. Limited spots available! Pre-registration required.",
      location: "Sugar Land, Texas"
    },
    {
      date: "Febuary 5, 2025",
      title: "University Campus Pop-up",
      description: "Special student discount day! Try our new spicy chickpea wrap and sweet potato fries. Sustainability talk at 2 PM.",
      location: "University of Texas Student Center"
    }
  ];

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Community</h1>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-green-800">Upcoming Events</h2>
            {events.map((event, index) => (
              <EventCard
                key={index}
                date={event.date}
                title={event.title}
                description={event.description}
                location={event.location}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;