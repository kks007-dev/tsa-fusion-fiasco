const Footer = () => {
    return (
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Fusion Fiasco</h3>
            <p className="text-green-200">Where Culinary Worlds Collide</p>
          </div>
          <div className="space-x-4 mb-4">
            <a href="#" className="hover:text-green-200">Reservations</a>
            <a href="#" className="hover:text-green-200">Location</a>
            <a href="#" className="hover:text-green-200">Catering</a>
          </div>
          <div className="text-green-300">
            © 2024 Fusion Fiasco. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;