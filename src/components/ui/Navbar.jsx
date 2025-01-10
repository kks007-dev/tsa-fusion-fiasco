import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-green-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-3xl font-bold hover:text-green-200">
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

export default Navbar;