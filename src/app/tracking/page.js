"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const FoodTruckPage = () => {
  const mapRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  
  const location = {
    lat: 29.7392,
    lng: -95.4634,
    name: "Fusion Fiasco",
    address: "Galleria, Houston",
    description: "Experience a unique blend of Asian-Latin fusion cuisine",
    phone: "(346) 379-5010"
  };

  const hours = [
    { day: "Monday", time: "11:00 AM - 8:00 PM" },
    { day: "Tuesday", time: "11:00 AM - 8:00 PM" },
    { day: "Wednesday", time: "11:00 AM - 8:00 PM" },
    { day: "Thursday", time: "11:00 AM - 8:00 PM" },
    { day: "Friday", time: "11:00 AM - 9:00 PM" },
    { day: "Saturday", time: "11:00 AM - 9:00 PM" },
    { day: "Sunday", time: "12:00 PM - 6:00 PM" }
  ];

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const cstTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
      
      const day = cstTime.toLocaleDateString('en-US', { weekday: 'long' });
      const currentHour = cstTime.getHours();
      const currentMinutes = cstTime.getMinutes();
      
      setCurrentTime(cstTime.toLocaleTimeString('en-US', { 
        timeZone: 'America/Chicago',
        hour: 'numeric',
        minute: '2-digit'
      }));

      const todaySchedule = hours.find(schedule => schedule.day === day);

      if (todaySchedule) {
        const [openTime, closeTime] = todaySchedule.time.split(" - ");
        
        const [openHourStr, openMinStr] = openTime.split(":")[0].trim().split(" ")[0].split(":");
        const openPeriod = openTime.includes("PM") ? "PM" : "AM";
        
        const [closeHourStr, closeMinStr] = closeTime.split(":")[0].trim().split(" ")[0].split(":");
        const closePeriod = closeTime.includes("PM") ? "PM" : "AM";

        const convertTo24Hour = (hour, period) => {
          let hour24 = parseInt(hour);
          if (period === "PM" && hour24 !== 12) hour24 += 12;
          if (period === "AM" && hour24 === 12) hour24 = 0;
          return hour24;
        };

        const openHour24 = convertTo24Hour(openHourStr, openPeriod);
        const closeHour24 = convertTo24Hour(closeHourStr, closePeriod);

        const currentTimeValue = currentHour + (currentMinutes / 60);
        setIsOpen(currentTimeValue >= openHour24 && currentTimeValue < closeHour24);
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white transform -translate-x-1/2 -translate-y-1/2">
          <div class="w-2 h-2 bg-white rounded-full"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });

    const map = L.map(mapRef.current).setView([location.lat, location.lng], 15);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([location.lat, location.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div class="p-3">
          <h3 class="font-bold text-lg mb-2">${location.name}</h3>
          <p class="text-gray-600 mb-2">${location.description}</p>
          <p class="font-medium">
            <span class="${isOpen ? 'text-green-600' : 'text-red-600'}">
              ${isOpen ? '● Open Now' : '○ Closed'}
            </span>
          </p>
        </div>
      `)
      .openPopup();

    return () => map.remove();
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{location.name}</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">{location.description}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                isOpen 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {isOpen ? '● Open Now' : '○ Closed'} ({currentTime} CST)
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                <MapPin className="w-4 h-4 mr-2" />
                {location.address}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                <Phone className="w-4 h-4 mr-2" />
                {location.phone}
              </span>
            </div>
          </div>

          {/* Map Card */}
          <Card className="mb-12 shadow-xl rounded-xl overflow-hidden border border-gray-200">
            <CardContent className="p-0">
              <div
                ref={mapRef}
                className="w-full h-[500px]"
              />
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="shadow-xl rounded-xl border border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <Clock className="w-6 h-6 mr-3 text-gray-600" />
                <h2 className="text-2xl font-bold text-gray-900">Hours of Operation</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {hours.map((schedule) => {
                  const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long' }) === schedule.day;
                  return (
                    <div
                      key={schedule.day}
                      className={`flex justify-between items-center border-b border-gray-200 py-4 ${
                        isToday ? 'bg-blue-50 -mx-4 px-4 rounded-lg' : ''
                      }`}
                    >
                      <span className={`font-medium ${isToday ? 'text-blue-800' : 'text-gray-900'}`}>
                        {schedule.day}
                      </span>
                      <span className={`${isToday ? 'text-blue-700' : 'text-gray-600'}`}>
                        {schedule.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FoodTruckPage;