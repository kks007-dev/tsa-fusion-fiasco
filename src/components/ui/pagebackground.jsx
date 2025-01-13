import React from 'react';

const PageBackground = ({ 
  imageUrl,
  overlayOpacity = 0.5, // Controls darkness of the overlay
  children 
}) => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          zIndex: 0
        }}
      />
      
      {/* Overlay layer to dim the background and ensure content readability */}
      <div 
        className="fixed inset-0 bg-black"
        style={{ 
          opacity: overlayOpacity,
          zIndex: 1
        }}
      />
      
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;