"use client"

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MapComponent = () => {
  const mapRef = useRef(null);
  const location = { lat: 29.7249, lng: -95.3858 }; // Museum District Houston coordinates

  useEffect(() => {
    // Load Google Maps Script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDv559eJvB-EM8uvDpWhPXxE3Z4xHiPZ0Q`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "on" }],
          },
        ],
      });

      // Add marker for food truck location
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Fusion Fiasco Food Truck",
        animation: window.google.maps.Animation.DROP,
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-bold">Fusion Fiasco</h3>
            <p>Currently serving at Museum District</p>
            <p>Open: 11 AM - 8 PM</p>
          </div>
        `
      });

      // Add click listener to marker
      map.addListener('click', () => {
        infoWindow.open(map);
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardContent className="p-6">
        <div 
          ref={mapRef} 
          className="w-full h-96 rounded-lg shadow-lg"
          style={{ minHeight: "400px" }}
        />
      </CardContent>
    </Card>
  );
};

export default MapComponent;