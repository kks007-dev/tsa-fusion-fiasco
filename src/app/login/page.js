"use client";
import React, { useState } from "react";
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

// Updated Header Component
const Header = () => {
  return (
    // <header className="bg-green-800 text-white py-6">
    //   <div className="container mx-auto flex justify-between items-center px-4">
    //     <Link href="/" className="text-3xl font-bold italic  hover:text-green-200">
    //       Fusion Fiasco
    //     </Link>
    //     <nav className="space-x-6">
    //       <Link href="/menu" className="hover:text-green-200">
    //         Menu
    //       </Link>
    //       <Link href="/tracking" className="hover:text-green-200">
    //         Tracking
    //       </Link>
    //       <Link href="/loyalty" className="hover:text-green-200">
    //         Loyalty
    //       </Link>
    //       <Link href="/community" className="hover:text-green-200">
    //         Community
    //       </Link>
    //       <Link href="/about" className="hover:text-green-200">
    //         About
    //       </Link>
    //     </nav>
    //   </div>
    // </header>
    // To allow for easy navbar changes ( delete comment in future updates)
    <Navbar/>
  );
};

const HomePage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
  
    const toggleForm = () => {
      setIsSignUp(!isSignUp);
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = await document.getElementById('name').value;
        const rawemail = document.getElementById('email').value;
        const email = rawemail.toLowerCase();
        const password = document.getElementById('password').value;
        const data = {
          name: name,
          email: email,
          password: password,
        };
        try {
          const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          const result = await res.json();
          if (res.ok) {
            alert("Sign up successful! Please log in.");
            toggleForm();
          } else {
            alert(result.message || "Something went wrong.");
          }
        } catch (error) {
          console.error(error);
          alert("Failed to sign up. Please try again.");
        }
      };
    
      const handleLogIn = async (event) => {
        event.preventDefault();
        const rawemail = document.getElementById('email').value;
        const email = rawemail.toLowerCase();
        const password = document.getElementById('password').value;
        const data = {
          email: email,
          password: password,
        };
    
        try {
          const res = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          const result = await res.json();
          if (res.ok) {
            alert("Login successful!");
            // Store the token in local storage or a cookie
            localStorage.setItem("token", result.token);
            localStorage.setItem("user", result.user);
            localStorage.setItem("email", result.user.email);
            localStorage.setItem("name", result.user.name);
            window.location.href = '/';
          } else {
            alert(result.message || "Invalid credentials.");
          }
        } catch (error) {
          console.error(error);
          alert("Failed to log in. Please try again.");
        }
      };

    return (
      <div>
        <Header />
        <main className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-3xl p-8 max-w-md w-full">
            <h1 className="text-3xl font-bold text-center mb-6">
              {isSignUp ? "Sign Up" : "Login"}
            </h1>
            <form onSubmit= {isSignUp? handleSignUp : handleLogIn}>
              {isSignUp && (
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    placeholder="Enter your full name" required
                  />
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your email" required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your password" required
                />
              </div>
              {isSignUp && (
                <div className="mb-4">
                  <label
                    htmlFor="confirm-password"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    placeholder="Confirm your password" required
                  />
                </div>
              )}
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              {isSignUp ? "Already have an account?" : "First time here?"}{" "}
              <button
                onClick={toggleForm}
                className="text-green-600 hover:underline focus:outline-none"
              >
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default HomePage;