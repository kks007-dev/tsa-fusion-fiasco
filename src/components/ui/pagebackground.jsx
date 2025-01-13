import React from 'react';

const PageBackground = ({ 
  imageUrl,
  overlayOpacity = 0, // Controls darkness of the overlay
  children,
  className
}) => {
  return (
    <div className="relative min-h-screen ">
      {/* Fixed background image */}
      <div 
        className={"fixed inset-0 bg-cover bg-center bg-no-repeat " + className}
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