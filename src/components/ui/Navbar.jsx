"use client";
import Link from 'next/link';
import { Button } from './button';


const Navbar = () => {

  
  let username = localStorage.getItem("name");
  let token = localStorage.getItem("token");
  
  const signOut = () =>{
    if(confirm('Sign out?')){
      localStorage.clear();
      window.location.href = '/';
    };
  };
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
          {token? 
          <Button asChild className="bg-green-500 hover:bg-green-50"><Link href="#" onClick={signOut} className="text-lg hover:text-green-500">
            {username}
          </Link></Button> :
          <Button asChild className="group bg-green-500 hover:bg-green-50"><Link href="/login" className="hover:text-green-500">
            Login
          </Link></Button>}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;